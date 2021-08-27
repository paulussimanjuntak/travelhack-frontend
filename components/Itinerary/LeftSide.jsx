import { memo } from 'react'
import { useRouter } from 'next/router'
import { DragDropContext } from 'react-beautiful-dnd'
import { motion, AnimatePresence } from 'framer-motion'
import { Row, Col, Button, DatePicker, Popconfirm, Space, Tooltip } from 'antd'

import moment from 'moment'
import Image from 'next/image'
import NoSSR from 'react-no-ssr'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'

import Notes from 'components/Itinerary/Notes'
import DraggableContainer from 'components/Itinerary/DraggableContainer'
import DraggableDateContainer from 'components/Itinerary/DraggableDateContainer'

moment.locale('id')

const DraggableContainerMemo = memo(DraggableContainer)
const DraggableDateContainerMemo = memo(DraggableDateContainer)


const LeftSideItinerary = ({ 
  itinenaryName, onDragStartHandler, onDragEndHandler, itineraries, selectedTime, onChangeSelectedDate, 
  showDate, setShowDate, onChangeDatePicker, onDragEnd, place, idxItinerary, showNotes, setShowNotes, setInfoWindow, setShowDriver
}) => {
  const router = useRouter()

  const onSubmitHandler = e => {
    e.preventDefault()
    setShowDriver(true)
  }

  const goHome = () => {
    router.push('/')
  }

  return (
    <Col xxl={13} xl={13} lg={14} md={14} sm={14} xs={14} style={{ zIndex: 1 }}>
      <Card className="rounded-0 border-0 shadow-1 h-100vh">

        <Navbar className="border-bottom bg-white w-100" style={{ zIndex: 0 }}>
          <Row gutter={[0,0]} className="w-100 align-items-center">
            <Col span={11}>
              <div className="d-flex">
                <Image 
                  width={36} 
                  height={30} 
                  onClick={goHome}
                  className="hover-pointer" 
                  src="/static/images/logo-square.png" 
                  alt="TRAVELHACK" 
                />
                <div className="ml-1 w-100 text-truncate" style={{ lineHeight: 1 }}>
                  <p className="navbar-brand text-truncate mb-0 w-100">{itinenaryName}</p>
                </div>
              </div>
            </Col>
            <Col span={11} className="overflow-auto">
              <div className="mx-2">
                <DragDropContext onDragStart={onDragStartHandler} onDragEnd={onDragEndHandler}>
                  <DraggableDateContainerMemo
                    data={itineraries}
                    selectedTime={selectedTime}
                    setSelectedTime={onChangeSelectedDate}
                  />
                </DragDropContext>
              </div>
            </Col>
            <Col span={2} className="pl-2">
              <Button 
                block
                size="large" 
                type="primary" 
                className="btn-green-2 px-1" 
                onClick={() => setShowDate(s => !s)}
              >
                <i className="far fa-calendar-alt fs-20"></i>
              </Button>
              <DatePicker.RangePicker 
                size="large"
                open={showDate} 
                onChange={onChangeDatePicker}
                dropdownClassName="datepicker-changedate"
                style={{ opacity: 0, position: 'absolute', left: 0, zIndex: '-1', width: 40 }}
                renderExtraFooter={() => (
                  <Space className="my-1">
                    <Popconfirm
                      title={<>Changing the date will delete your <br/>previous itinerary, continue?</>}
                      onConfirm={() => setShowDate(false)}
                      onCancel={() => setShowDate(false)}
                      okText="Save"
                      cancelText="Cancel"
                      cancelButtonProps={{ type: 'text' }}
                      placement="bottomLeft"
                    >
                      <Button type="primary" size="small">Change</Button>
                    </Popconfirm>
                    <Button type="text" size="small" onClick={() => setShowDate(false)}>Cancel</Button>
                  </Space>
                )}
              />
            </Col>
          </Row>
        </Navbar>

        <section className="itinerary-body">
          <NoSSR>
            <DragDropContext onDragEnd={onDragEnd}>
              <Row gutter={[0,0]} className="draggable-itineraries-row">

                <Col span={12} className="border-right">
                  <section className="container-card-attraction">
                    <Card.Body>
                      <DraggableContainerMemo droppableId="PLACE" data={place} />
                    </Card.Body>
                  </section>
                </Col>

                <Col span={12}>
                  <section className="container-card-attraction">
                    <Card.Body>
                      <DraggableContainerMemo 
                        droppableId="SELECTED_PLACE"
                        setInfoWindow={setInfoWindow}
                        data={itineraries[idxItinerary] && itineraries[idxItinerary].places}
                      />
                    </Card.Body>
                  </section>
                </Col>
                
                <Col span={24} style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                  <Button 
                    size="large"
                    type="primary"
                    shape="round"
                    className="float-right shadow-floating-btn m-r-16 m-b-16 btn-green-2"
                    onClick={onSubmitHandler}
                  >
                    Save
                  </Button>
                  <Tooltip 
                    placement="top" 
                    color="#545454e6" 
                    title={`${showNotes ? 'Save and close note' : `Note for ${moment(selectedTime).format('DD MMMM')}` }`} 
                  >
                    <Button 
                      size="large"
                      type="primary"
                      shape="circle"
                      className="float-right shadow-floating-btn m-r-16 m-b-16"
                      onClick={() => setShowNotes(!showNotes)}
                    >
                      {showNotes ?  <i className="fal fa-times" /> : <i className="fal fa-pencil-alt" />}
                    </Button>
                  </Tooltip>
                  <AnimatePresence>
                    {showNotes && (
                      <motion.div
                        initial={{ opacity: 0, height: "0", transition: { duration: 0.3 } }}
                        animate={{ opacity: 1, height: "100%", transition: { duration: 0.3 } }}
                        exit={{ height: "0", opacity: 0, transition: { duration: 0.3 } }}
                      >
                        <Notes
                          value=""
                          setContent={val => console.log(val)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Col>

              </Row>
            </DragDropContext>
          </NoSSR>
        </section>

      </Card>
    </Col>
  )
}

export default LeftSideItinerary
