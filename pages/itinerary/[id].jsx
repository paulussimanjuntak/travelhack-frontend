import { parseCookies } from 'nookies'
import { LoadingOutlined } from '@ant-design/icons'
import { useLoadScript } from '@react-google-maps/api'
import { Row, Modal, Button, Select, Form, message, } from 'antd'
import { useState, useRef, useCallback, useEffect, memo } from 'react'

import { getRange } from 'lib/utility'
import { reorder, move } from 'lib/draggable'
import { libraries, getDistance } from 'lib/GMapsOptions'

import moment from 'moment'

import Style from 'components/Itinerary/style'
import BlurBgModal from 'components/Modal/BlurBackground'
import LeftSideContainer from 'components/Itinerary/LeftSide'
import RightSideContainer from 'components/Itinerary/RightSide'

moment.locale('id')

const BlurBgModalMemo = memo(BlurBgModal)
const LeftSideContainerMemo = memo(LeftSideContainer)
const RightSideContainerMemo = memo(RightSideContainer)

const initialInfoWindow = {isHover: false, place: null}
const ItineraryDetail = () => {
  const [search, setSearch] = useState("")
  const [place, setPlace] = useState([])
  const [origin, setOrigin] = useState([])
  const [showDate, setShowDate] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [showOptimizeModal, setShowOptimizeModal] = useState(false)
  const [isOptimize, setIsOptimize] = useState(false)
  const [center, setCenter] = useState({ lat: null, lng: null })
  const [selectedTime, setSelectedTime] = useState("")
  const [autocomplete, setAutocomplete] = useState(null)
  const [itineraries, setItineraries] = useState([])
  const [itinenaryName, setItinenaryName] = useState("")
  const [currentPosition, setCurrentPosition] = useState({})
  const [infoWindow, setInfoWindow] = useState(initialInfoWindow)
  const [directionsRendererResponse, setDirectionsRendererResponse] = useState(null)

  const idxItinerary = itineraries.findIndex(item => item.time === selectedTime)

  const onDragEnd = (result) => {
    const { source, destination } = result

    if (!destination) return

    const sId = source.droppableId;
    const dId = destination.droppableId;

    // if dropable item is in same column
    if (sId === dId) {
      let tmpState = [...place]
      if(sId === "SELECTED_PLACE") tmpState = [...itineraries[idxItinerary].places]

      // list, startIndex, endIndex
      const items = reorder(tmpState, source.index, destination.index);
      if(sId === "PLACE") setPlace(items)
      if(sId === "SELECTED_PLACE") {
        const newState = [...itineraries]
        newState[idxItinerary].places = items
        setItineraries(newState)
      }
    }
    else {
      let sourceState = [], destinationState = []
      if(sId === "PLACE") {
        sourceState = [...place]
        destinationState = [...itineraries[idxItinerary].places]
      } 
      if(sId === "SELECTED_PLACE") {
        sourceState = [...itineraries[idxItinerary].places]
        destinationState = [...place]
      } 
      const result = move(sourceState, destinationState, source, destination);
      setPlace(result.PLACE)
      const newState = [...itineraries]
      newState[idxItinerary].places = result.SELECTED_PLACE
      setItineraries(newState)
    }
  }

  const onDragStartHandler = () => {
    setShowDate(false)
  }

  const onDragEndHandler = (result) => {
    const { source, destination } = result

    if (!destination) return
    const sIdx = source.index
    const dIdx = destination.index

    if(sIdx !== dIdx) {
      Modal.confirm({
        title: 'Are you sure?',
        className: 'modal-radius-10px',
        content: (
          <>
            <span>
              Itinerary on
              <b> {moment(itineraries[sIdx].time).format('DD MMMM')} </b>
              will be moved to
              <b> {moment(itineraries[dIdx].time).format('DD MMMM')} </b>
              and so is the itinerary on <b> {moment(itineraries[dIdx].time).format('DD MMMM')} </b>
              will be moved to
              <b> {moment(itineraries[sIdx].time).format('DD MMMM')}</b>, continue?
            </span>
          </>
        ),
        okText: 'Yes',
        cancelText: 'Cancel',
        onOk() {
          const state = [...itineraries]
          const sPlace = state[sIdx].places
          const dPlace = state[dIdx].places

          state[sIdx].places = dPlace
          state[dIdx].places = sPlace

          setItineraries(state)
        },
      })
    }
  }

  const onChangeDatePicker = (_, dateStrings) => {
    console.log('From:', dateStrings[0], ', to:', dateStrings[1]);
  }

  const onPlaceChangedHandler = () => {
    if(autocomplete !== null) {
      setSearch(autocomplete.getPlace().name)
      setCenter(autocomplete.getPlace().geometry.location)
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  const onOptimizeRouteHandler = () => {
    setIsOptimize(true)
    setTimeout(() => {
      setIsOptimize(false)
    }, 2000)
    setTimeout(() => {
      setShowOptimizeModal(false)
      message.success("We optimize your route, saving 2 hours 45 minutes.")
    }, 2500)
  }

  const onCloseOptimizeModal = () => {
    setOrigin([])
    setShowOptimizeModal(false)
  }

  const onChangeSelectedDate = (time) => {
    setSelectedTime(time)
    setDirectionsRendererResponse(null)
  }

  useEffect(() => {
    const { itinerary } = parseCookies()
    const itinenaryData = JSON.parse(itinerary)

    const dateRange = getRange(itinenaryData.start, itinenaryData.end, 'days')
    const data = dateRange.map(x => {
      return { time: x, places: [], notes: "" }
    })

    setItineraries(data)
    setItinenaryName(itinenaryData.itinerary_name)
    setCenter({ lat: itinenaryData.lat, lng: itinenaryData.lng })
    setCurrentPosition({ lat: itinenaryData.lat, lng: itinenaryData.lng })
    if(dateRange && dateRange.length > 0) setSelectedTime(dateRange[0])
  }, [])


  /* MAPS */
  const mapRef = useRef(null);
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API, libraries });

  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const onAutoCompleteLoad = autocomplete => {
    setAutocomplete(autocomplete)
  }

  const updateCenter = () => {
    if (!mapRef.current) return false
    const newPosition = mapRef.current.getCenter().toJSON()
    setCurrentPosition(newPosition)
  }

  const dragEnd = () => {
    if (!mapRef.current) return false
  }

  const updateData = () => {
    if (!mapRef.current) return false
    let current_cursor = new google.maps.LatLng(currentPosition.lat, currentPosition.lng)
    let mapObject = new google.maps.places.PlacesService(mapRef.current)

    mapObject.nearbySearch(
      {
        location: current_cursor, //Add initial lat/lng here
        rankBy: google.maps.places.RankBy.DISTANCE,
        type: ['tourist_attraction']
      }, callbackTouristAttraction
    );
  }

  //Callback function for getting distance
  const callbackTouristAttraction = (results, status) => {
    if (!mapRef.current) return false
    let tmp_places = []
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for(let key in results) {
        let value = results[key]
        if (value.user_ratings_total >= 50) {
          let tmp = {
            place_id: value.place_id,
            name: value.name,
            position: value.geometry.location,
            rating: value.rating,
            user_rating: value.user_ratings_total,
            address: value.plus_code && value.plus_code.compound_code && value.plus_code.compound_code.split(" ").slice(1).join(" "),
            icon: value.photos && value.photos[0].getUrl() ? value.photos[0].getUrl() : '/static/images/no-image.jpeg',
          };

          const request = {
            placeId: value.place_id,
            fields: ["formatted_address", "formatted_phone_number", "website", "opening_hours"],
          };
          const service = new google.maps.places.PlacesService(mapRef.current)
          service.getDetails(request, (place, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK) {

              let tmp_opening_hours = place && place.opening_hours && place.opening_hours.weekday_text && place.opening_hours.weekday_text.length > 0 ? place.opening_hours.weekday_text : false
              if(tmp_opening_hours) {
                let fFirst = tmp_opening_hours[tmp_opening_hours.length - 1]
                tmp_opening_hours.splice(tmp_opening_hours.length - 1, 1)
                tmp_opening_hours.unshift(fFirst)
              }

              tmp.vicinity = place.formatted_address
              tmp.telp = place && place.formatted_phone_number ? place.formatted_phone_number : false
              tmp.website = place && place.website ? place.website : false
              tmp.opening_hours = tmp_opening_hours && tmp_opening_hours.length > 0 ? tmp_opening_hours : false
            }
          })
          // check duplicate places in places selected
          let tmp_selected_places = itineraries.map(o => o.places).flat()
          let found = tmp_selected_places.some(el => el.name === tmp.name);
          if (!found) tmp_places.push(tmp);
        }
      }
    }

    console.log(tmp_places)
    setPlace(tmp_places)
  }

  const directionsCallback = useCallback((res) => {
    if (res !== null) {
      if (res.status === 'OK') {
        setDirectionsRendererResponse(res)
      } else {
        // setDirectionsRendererResponse(null)
        return
      }
    }
  }, [])

  const optimizeRoute = () => {
    const idxPlaces = itineraries[idxItinerary].places.findIndex(item => item.name === origin)

    let data = Array.from(itineraries[idxItinerary].places)
    let start_point = []

    if(idxPlaces !== -1) start_point = data.splice(idxPlaces, 1)

    if(data.length > 2) {
      for(let i = 0; i < data.length; i++) {
        for(let j = 1; j < data.length; j++) {
          try {
            let distance_one = (getDistance(data[i].position, data[j].position) / 1000).toFixed(2)
            let distance_two = (getDistance(data[i].position, data[j + 1].position) / 1000).toFixed(2)

            let tmpData = null
            if (distance_one > distance_two) {
              tmpData = data[j];
              data[j] = data[j + 1];
              data[j + 1] = tmpData;
            }

            const newState = [...itineraries]
            newState[idxItinerary].places = [...start_point, ...data]
            setItineraries(newState)
          } catch(err) {
            return
          }
        }
      }
    }
  }

  useEffect(() => {
    if(itineraries[idxItinerary] && itineraries[idxItinerary].places && itineraries[idxItinerary].places.length < 1) {
      setDirectionsRendererResponse(null)
    } else {
      return
    }
  }, [itineraries])

  /* MAPS */

  useEffect(() => {
    setTimeout(() => {
      updateData()
    }, 1000)
  },[mapRef])


  if (loadError) return "Error";
  if (!isLoaded) return "";

  return (
    <>
      <Row gutter={[0,0]} className="itinerary-main">
        <LeftSideContainerMemo
          place={place}
          showDate={showDate}
          showNotes={showNotes}
          onDragEnd={onDragEnd}
          infoWindow={infoWindow}
          itineraries={itineraries}
          setShowDate={setShowDate}
          setShowNotes={setShowNotes}
          idxItinerary={idxItinerary}
          selectedTime={selectedTime}
          setInfoWindow={setInfoWindow}
          itinenaryName={itinenaryName}
          onDragEndHandler={onDragEndHandler}
          onDragStartHandler={onDragStartHandler}
          onChangeDatePicker={onChangeDatePicker}
          onChangeSelectedDate={onChangeSelectedDate} 
        />

        <RightSideContainerMemo 
          center={center}
          search={search}
          dragEnd={dragEnd}
          setSearch={setSearch}
          onMapLoad={onMapLoad}
          infoWindow={infoWindow}
          updateData={updateData}
          itineraries={itineraries}
          updateCenter={updateCenter}
          idxItinerary={idxItinerary}
          setInfoWindow={setInfoWindow}
          onAutoCompleteLoad={onAutoCompleteLoad}
          directionsCallback={directionsCallback}
          setShowOptimizeModal={setShowOptimizeModal}
          onPlaceChangedHandler={onPlaceChangedHandler}
          directionsRendererResponse={directionsRendererResponse}
        />

      </Row>

      <Modal
        centered
        footer={null}
        onOk={onCloseOptimizeModal}
        visible={showOptimizeModal}
        onCancel={onCloseOptimizeModal}
        closeIcon={<i className="fal fa-times" />}
        className="modal-rad10px modal-title-center"
        title={<span className="font-weight-bold">Optimize Route</span>}
      >
        <Form layout="vertical">
          <Form.Item label="Start Poin">
            <Select
              allowClear
              showSearch
              size="large"
              className="w-100"
              placeholder="Start Poin"
              value={origin}
              onChange={val => setOrigin(val)}
            >
              {itineraries[idxItinerary] && itineraries[idxItinerary].places.map(data => (
                <Select.Option value={data.name} key={data.name}>{data.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>

        <div className="mt-4 text-center">
          {/* <Button type="primary" size="large" className="rounded-pill btn-green" onClick={onOptimizeRouteHandler}> */}
          <Button type="primary" size="large" className="rounded-pill btn-green" onClick={optimizeRoute}>
            {isOptimize ? (
              <>
                <LoadingOutlined className="va-text-bottom" /> Optimizing Route
              </>
            ):(
              <>
                <i className="far fa-route mr-1" /> Optimize Route
              </>
            )}
            
          </Button>
        </div>
        
      </Modal>

      <BlurBgModalMemo visible={showOptimizeModal} />

      <style jsx>{Style}</style>
    </>
  )
}

export default ItineraryDetail
