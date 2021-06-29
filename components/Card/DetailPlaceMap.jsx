import { Row, Col, Button, Space } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'

import Card from 'react-bootstrap/Card'

const MarkerIcon = '/static/images/marker-noborder.png'
const GoogleIcon = '/static/images/google.svg'
const GoogleMapsIcon = '/static/images/google-maps-icon.svg'

const DetailPlaceMap = ({ markerClicked, setMarkerClicked }) => {
  return (
    <>
      <AnimatePresence>
        {markerClicked.place && markerClicked.isClicked && (
          <motion.div 
            className="card position-absolute detail-card-place-map border-0 shadow-1"
            initial={{ opacity: 0, x: '-50%', y: 100 }}
            animate={{ opacity: 1, x: '-50%', y: 0}}
            exit={{ opacity: 0, x: '-50%', y: 100 }}
            transition={{ duration: ".2" }}
          >
            <Card.Header className="detail-card-place-map-header">
              <Row gutter={[0,0]}>
                <Col span={22} className="font-weight-bold">
                  <div className="d-flex flex-row mw-100 align-items-baseline">
                    <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30 }}>
                      <img src={MarkerIcon} className="mr-2" width="24" height="32" />
                      <div className="centered-idx small text-white">{markerClicked.idx && markerClicked.idx}</div>
                    </div>
                    <div className="col p-0">
                      {markerClicked.place.name}
                    </div>
                  </div>
                </Col>
                <Col span={2}>
                  <Button 
                    type="primary" 
                    shape="circle" 
                    onClick={() => setMarkerClicked({ isClicked: false, place: null })}
                    icon={<i className="fas fa-times" />} 
                    className="close-button-detail-map float-right" 
                  />
                </Col>
              </Row>
            </Card.Header>
            <div className="scrollable-card-detail-map">
              <Card.Body className="detail-card-place-map-body fs-14 pt-2">
                <div className="d-flex flex-row mw-100">
                  <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30 }}>
                    <i className="fas fa-star text-warning" />
                  </div>
                  <div className="col p-0">
                    <b className="text-warning">{markerClicked.place.rating}</b>
                    <span className="text-muted mx-1">({markerClicked.place.user_rating})</span>
                    <img style={{ marginTop: -2 }} src={GoogleIcon} width="17" height="17" />
                  </div>
                </div>

                <div className="d-flex flex-row mw-100 m-t-8">
                  <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30 }}>
                    <i className="fas fa-map-marker-alt text-muted" />
                  </div>
                  <div className="col p-0">
                    <span className="text-muted">{markerClicked.place.vicinity ? markerClicked.place.vicinity : markerClicked.place.address}</span>
                  </div>
                </div>

                {markerClicked.place.opening_hours && markerClicked.place.opening_hours.length > 0 && (
                  <div className="d-flex flex-row mw-100 m-t-8">
                    <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30 }}>
                      <i className="fas fa-clock text-muted" />
                    </div>
                    <div className="col p-0">
                      {markerClicked.place.opening_hours.map((x,i) => (
                        <p key={i} className="text-muted mb-1">
                          <span className="badge badge-pill badge-secondary badge-opening-hours mr-1">{x[0]}</span> {x}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {markerClicked.place.telp && (
                  <div className="d-flex flex-row mw-100 m-t-8">
                    <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30 }}>
                      <i className="fas fa-phone text-muted" />
                    </div>
                    <div className="col p-0">
                      <span className="text-muted">{markerClicked.place.telp}</span>
                    </div>
                  </div>
                )}

                {markerClicked.place.website && (
                  <div className="d-flex flex-row mw-100 m-t-8">
                    <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30 }}>
                      <i className="fas fa-globe text-muted" />
                    </div>
                    <div className="col p-0">
                      <span className="text-muted">
                        <a href={markerClicked.place.website} target="_blank">
                          {markerClicked.place.website}
                        </a>
                      </span>
                    </div>
                  </div>
                )}
              </Card.Body>

              <Card.Header className="detail-card-place-map-header pt-0 font-weight-bold text-muted fs-14">
                Open in:
              </Card.Header>
              <Card.Body className="detail-card-place-map-body fs-14 pt-2">
                <Space>
                  <a 
                    target="_blank" 
                    className="text-reset"
                    href={`https://www.google.com/search?q=${markerClicked.place.name}`}
                  >
                    <Button shape="round" className="btn-white font-weight-bold pl-2" icon={<img className="mr-1" style={{ marginTop: -2 }} src={GoogleIcon} width="17" height="17" />}>Google</Button>
                  </a>
                  <a 
                    target="_blank" 
                    className="text-reset"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(markerClicked.place.name)}&destination_place_id=${markerClicked.place.place_id}&travelmode=driving&dir_action=navigate`}
                  >
                    <Button shape="round" className="btn-white font-weight-bold pl-2" icon={<img style={{ marginTop: -2 }} src={GoogleMapsIcon} width="25" height="25" />}>Google Maps</Button>
                  </a>
                </Space>
              </Card.Body>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DetailPlaceMap
