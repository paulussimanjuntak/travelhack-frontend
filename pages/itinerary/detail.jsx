// tidak dipakai
import { useRef, useCallback } from 'react'
import { Row, Col, Anchor, Affix } from 'antd'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

import { libraries, GMapsOptions, mapContainerStyle } from 'lib/GMapsOptions'

import moment from 'moment'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'

moment.locale('id')
const default_center = { lat: -8.340539, lng: 115.091949 }

const ItineraryDetail = () => {
  //====== MAPS ======//
  const mapRef = useRef(null);
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API, libraries });

  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "";

  return (
    <>
      <Row gutter={[0,0]} className="itinerary-main">
        <Col xxl={13} xl={13} lg={14} md={14} sm={14} xs={14} style={{ zIndex: 1 }}>
          <Card className="rounded-0 border-0 shadow-1">

            <Affix offsetTop={0}>
              <Navbar className="border-bottom bg-white" style={{ zIndex: 0 }}>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Navbar>
            </Affix>

            <section className="itinerary-body">
              <Row gutter={[0,0]}>

                <Col xxl={3} xl={3} lg={4} md={5} sm={6} xs={6} className="border-right">
                  <Card.Body className="itinerary-body-scollable px-2">
                    <Affix offsetTop={77}>
                      <p className="text-uppercase text-center lead fs-16 font-weight-bold">Tanggal</p>
                    </Affix>
                    
                    <Anchor offsetTop={120} className="anchor-itinerary">
                      {[...Array(50)].map((_,i) => (
                        <Anchor.Link 
                          key={i} 
                          href={`#section`+i} 
                          title={
                            <div className="text-center text-uppercase">
                              <p className="mb-0">{i} {moment().add(i, 'days').format('ddd')}</p>
                              <p className="mb-0">{moment().add(i, 'days').format('DD MMM')}</p>
                            </div>
                          } 
                        />
                      ))}
                    </Anchor>

                  </Card.Body>
                </Col>

                <Col xxl={21} xl={20} lg={20} md={19} sm={18} xs={18}>
                  <Card.Body className="itinerary-body-scollable">
                    {[...Array(50)].map((_,i) => (
                      <p id={`section`+i} key={i} className="m-b-200">asddas {i}</p>
                    ))}
                  </Card.Body>
                </Col>
              </Row>
            </section>

          </Card>
        </Col>


        <Col xxl={11} xl={11} lg={10} md={10} sm={10} xs={10}>
          <Affix offsetTop={0}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={default_center}
              options={GMapsOptions}
              onLoad={onMapLoad}
              zoom={10}
            >
            </GoogleMap>
          </Affix>
        </Col>

      </Row>

      <style jsx>{`
      :global(.shadow-1) {
        box-shadow: 0 0.5rem 1.2rem rgba(0,0,0,0.35)!important;
      }
      :global(.itinerary-main) {
        min-height: 100vh;
      }
      :global(.itinerary-body) {
        height: 100%;
      }
      :global(.itinerary-body-scollable) {
        height: 100%;
      }
      :global(.anchor-itinerary .ant-anchor-ink) {
        display: none;
      }
      :global(.anchor-itinerary .ant-anchor-link) {
        padding: 7px 0;
      }

      /*GOOGLE MAPS*/
      :global(.gm-ui-hover-effect) {
        display: none !important;
      }
      :global(.gm-style-iw-d) {
        overflow: hidden !important;
      }
      :global(.gm-style .gm-style-iw-c) {
        padding: 0px;
        top: 40px;
      }
      :global(.gm-style .gm-style-iw-t::after) {
        top: 38px;
      }
      :global(.gmnoprint > div) {
        border-radius: 10px !important;
      }
      :global(.gm-control-active.gm-fullscreen-control) {
        border-radius: 10px !important;
      }
      :global(.gm-style-pbc){
        opacity: 0 !important;
      }
      /*GOOGLE MAPS*/
      `}</style>
    </>
  )
}

export default ItineraryDetail
