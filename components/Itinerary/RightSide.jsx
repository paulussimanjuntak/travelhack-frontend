import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Row, Col, Button, Input, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { GoogleMap, Autocomplete, Marker, InfoWindow } from '@react-google-maps/api'

import { GMapsOptions, mapContainerStyle, restrictions, markerOptions, infoOptions } from 'lib/GMapsOptions'

import moment from 'moment'
import Card from 'react-bootstrap/Card'

import MapStyle from 'components/Itinerary/mapStyle'
import CardDetailPlaceMap from 'components/Card/DetailPlaceMap'
import DirectionsAsAService from 'components/Itinerary/DirectionsAsAService'
import DirectionsAsRenderer from 'components/Itinerary/DirectionsAsRenderer'

moment.locale('id')

const CardDetailPlaceMapMemo = memo(CardDetailPlaceMap)
const DirectionsServiceMemo = memo(DirectionsAsAService)
const DirectionsRendererMemo = memo(DirectionsAsRenderer)

const MarkerIcon = '/static/images/marker-noborder.png'
const GoogleIcon = '/static/images/google.svg'
const GoogleMapsIcon = '/static/images/google-maps-icon.svg'

const initialInfoWindow = {isHover: false, place: null}
const RightSideContainer = ({ 
  center, onMapLoad, updateData, dragEnd, updateCenter, onAutoCompleteLoad, onPlaceChangedHandler, itineraries, 
  idxItinerary, directionsCallback, directionsRendererResponse, setShowOptimizeModal, search, setSearch, infoWindow, setInfoWindow
}) => {

  const [markerClicked, setMarkerClicked] = useState({ isClicked: false, place: null, idx: null })

  const onMarkerClick = (place, idx) => {
    setMarkerClicked({ isClicked: true, place: place, idx: idx })
  }

  const onMouseOver = (place) => {
    if(!infoWindow.isHover) {
      setInfoWindow({ isHover: true, place: place })
    }
  }

  const onMouseOut = () => {
    setInfoWindow(initialInfoWindow)
  }

  let infoWindowContent = null
  if(infoWindow.isHover && infoWindow.place) {
    infoWindowContent = (
      <InfoWindow options={infoOptions} position={infoWindow.place.position}>
        <p className="text-center mb-0 p-2 va-text-bottom d-inline-block text-truncate font-weight-bolder text-white">
          {infoWindow.place.name}
        </p>
      </InfoWindow>
    )
  }
  

  return (
    <>
      <Col xxl={11} xl={11} lg={10} md={10} sm={10} xs={10}>
        <GoogleMap
          zoom={12}
          center={center}
          onLoad={onMapLoad}
          onIdle={updateData}
          onDragEnd={dragEnd}
          options={GMapsOptions}
          onCenterChanged={updateCenter}
          mapContainerStyle={mapContainerStyle}
        >
          <Autocomplete
            onLoad={onAutoCompleteLoad}
            restrictions={restrictions}
            className="gmap-autocomplete"
            onPlaceChanged={onPlaceChangedHandler}
          >
            <Input 
              size="large" 
              placeholder="Find region" 
              className="gmap-input-autocomplete"
              prefix={<SearchOutlined />}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Autocomplete>

          {itineraries[idxItinerary] && 
           itineraries[idxItinerary].places && 
           itineraries[idxItinerary].places.length > 0 && itineraries[idxItinerary].places.map((place, i) => (
            <Marker
              key={place.name}
              animation="BOUNCE"
              icon={markerOptions}
              label={{
                text: (i+1).toString(),
                className: 'text-center mt-n1 fs-15 text-white'
              }}
              shape={{type: "circle"}}
              position={place.position}
              onMouseOut={onMouseOut}
              onClick={() => onMarkerClick(place, i+1)}
              onMouseOver={() => onMouseOver(place)}
            />
           ))
          }

          {infoWindowContent}

          {itineraries[idxItinerary] && 
           itineraries[idxItinerary].places && 
           itineraries[idxItinerary].places.length > 1 && (
            <DirectionsServiceMemo 
              travelMode="DRIVING"
              callback={directionsCallback}
              raw_waypoints={itineraries[idxItinerary].places}
            />
          )}
          {directionsRendererResponse !== null && (
            <DirectionsRendererMemo
              directions={directionsRendererResponse}
              selectedPlaceLength={itineraries[idxItinerary] && itineraries[idxItinerary].places && itineraries[idxItinerary].places.length}
            />
          )}
        </GoogleMap>
        <Button 
          type="primary" 
          onClick={() => setShowOptimizeModal(true)}
          // onClick={optimizeRoute}
          className="position-absolute btn-optimize-map rounded-pill ant-btn-dark shadow-floating-btn"
        >
          <i className="far fa-route mr-1"></i> Optimize Route
        </Button>

        <CardDetailPlaceMapMemo
          markerClicked={markerClicked}
          setMarkerClicked={setMarkerClicked}
        />

      </Col>

      <style jsx>{MapStyle}</style>
    </>
  )
}

export default RightSideContainer
