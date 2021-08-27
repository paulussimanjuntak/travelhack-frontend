import { Row, Col, Input, Select, DatePicker, Button, Divider } from 'antd'

import Link from 'next/link'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'

import MapStyle from 'components/Home/styleMap'
import ItineraryCardOther from 'components/Card/ItineraryCardOther'
import formatNumber from 'lib/formatNumber'

const destinations = [
  {value: "bali", label: "Bali"},
  {value: "jawa", label: "Jawa"},
  {value: "kalimantan", label: "Kalimantan"},
  {value: "sumatra", label: "Sumatra"},
  {value: "kupang", label: "Kupang"},
]

const pricingList = [
  {
    title: 'Starter',
    price: 0,
    bg: 'pricing-starter',
    itinerary: 3,
    pdf: false,
    driver: false,
    translator: false,
    img: '/static/images/pricing-starter.png'
  },
  {
    title: 'Basic',
    price: 100000,
    bg: 'pricing-basic',
    itinerary: 20,
    pdf: true,
    driver: true,
    translator: false,
    img: '/static/images/pricing-basic.png'
  },
  {
    title: 'Unlimited',
    price: 250000,
    bg: 'pricing-unlimited',
    itinerary: 'Unlimited',
    pdf: true,
    driver: true,
    translator: true,
    img: '/static/images/pricing-unlimited.png'
  },
]

const popular_itineraries_list = [
  { 
    title: 'Plan to sumba',
    name: 'Albert Hugo',
    image: 'https://api.balihotproperty.com/static/regions/1e4daef319cb45f78473249fa18823b6.jpeg'
  },
  {
    title: 'West Bali',
    name: 'Albert Hugo',
    image: 'https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
  },
  {
    title: 'Nusa Penida',
    name: 'Loise Smith',
    image: 'https://api.balihotproperty.com/static/regions/494823ea89c641c28b308f06a92eea3a.jpeg',
  },
  {
    title: 'Liburan ke bali',
    name: 'Rio Victoria',
    image: 'https://api.balihotproperty.com/static/regions/cecb308bddca4cb1a6e89b0ae5520f63.jpeg',
  },
  {
    title: 'North Bali',
    name: 'Albert Hugo',
    image: 'https://api.balihotproperty.com/static/regions/c3f792521ab2453ba870e7e72c3b93b4.jpeg'
  },
]

const Home = () => {
  return (
    <>
      <Container fluid className="bg-gradient-1" style={{ marginTop: '-89px' }}>
        <Container className="p-t-89 h-100vh d-flex flex-column justify-content-around">
          <Row gutter={[16,16]} align="middle">
            <Col span={12}>
              <h1 className="display-3 text-uppercase font-weight-normal text-green-0">explore plan and enjoy</h1>
              <p className="text-green-0-50">
                Build, organize, and map your itineraries with Travelhack is the easiest way to plan your trip, this is designed for vacations & road trips.
              </p>
            </Col>
            <Col span={12}>
              <div className="home-image">
                <Image
                  width="550"
                  height="550"
                  src="/static/images/trip.svg"
                  alt="trip"
                />
              </div>
            </Col>
            <Col span={18}>
              <Card className="border-0 bg-transparent card-itenerary">
                <Card.Body className="p-2">
                  <Card.Body className="bg-white-60 bor-rad-4px">
                    <Row gutter={[10,10]}>
                      <Col xxl={8} xl={8} lg={8}>
                        <p className="mb-0 fs-18 text-green-0">Itenerary Name</p>
                        <p className="text-green-0-50 small mb-2">
                          Name your awesome itenerary
                        </p>
                        <Input size="large" placeholder="Itenerary Name" />
                      </Col>
                      <Col xxl={8} xl={8} lg={8}>
                        <p className="mb-0 fs-18 text-green-0">Destination</p>
                        <p className="text-green-0-50 small mb-2">
                          Choose your place for your holiday
                        </p>
                        <Select size="large" className="w-100" placeholder="Destination" allowClear>
                          {destinations.map((destination, i) => (
                            <Select.Option key={i} value={destination.value}>{destination.label}</Select.Option>
                          ))}
                        </Select>
                      </Col>
                      <Col xxl={8} xl={8} lg={8}>
                        <p className="mb-0 fs-18 text-green-0">Dates</p>
                        <p className="text-green-0-50 small mb-2">
                          Choose your best days for your awesome trip
                        </p>
                        <DatePicker.RangePicker size="large" className="w-100" />
                      </Col>

                      <Col span={24}>
                        <Button size="large" type="primary" className="btn-green" block>Create Now</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <br/> <br/>

      <Container className="my-5">
        <Row gutter={[16,16]}>
          <Col span={12}>
            <Card className="border-0">
              <Card.Body>
                <div className="w-100">
                  <div className="LandingPageMapAnimation__aspectRatio position-relative overflow-hidden LandingPageMapAnimation__animate">
                    <div className="LandingPageMapAnimation__container">
                      <img alt="" src="/static/images/maps-home/item0.png" className="LandingPageMapAnimation__item0" />
                      <img alt="" src="/static/images/maps-home/item1.png" className="LandingPageMapAnimation__item1" />
                      <img alt="" src="/static/images/maps-home/item0.png" className="LandingPageMapAnimation__item2" />
                      <img alt="" src="/static/images/maps-home/item1.png" className="LandingPageMapAnimation__item3" />
                      <img alt="" src="/static/images/maps-home/item2.png" className="LandingPageMapAnimation__item4" />
                      <img alt="" src="/static/images/maps-home/marker.png" className="LandingPageMapAnimation__marker0" />
                      <img alt="" src="/static/images/maps-home/marker.png" className="LandingPageMapAnimation__marker1" />
                      <img alt="" src="/static/images/maps-home/marker.png" className="LandingPageMapAnimation__marker2" />
                      <img alt="" src="/static/images/maps-home/marker.png" className="LandingPageMapAnimation__marker3" />
                      <img alt="" src="/static/images/maps-home/marker.png" className="LandingPageMapAnimation__marker4" />
                      <img alt="" src="/static/images/maps-home/marker.png" className="LandingPageMapAnimation__marker5" />
                      <img alt="" src="/static/images/maps-home/map.png" className="LandingPageMapAnimation__map" />
                      <img alt="" src="/static/images/maps-home/base.png" className="LandingPageMapAnimation__base" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col span={10}>
            <Card className="border-0">
              <Card.Body>
                <h2 className="display-4 fs-40 font-weight-normal text-green-0 mt-3">
                  Your itinerary and your map in one view
                </h2>
                <p className="lead text-green-2 fs-16">
                  No more switching between different apps, tabs, and tools to keep track of your travel plans.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row gutter={[10,10]}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Card className="border-0">
              <Card.Body className="text-center">
                <Image
                  width="240"
                  height="140"
                  src="/static/images/feature-drag.png"
                  alt="trip"
                  quality="100"
                />
                <h5 className="mt-2 text-green-0">Drag and drop</h5>
                <p className="text-green-0-50 px-xl-5">Make the most of your day. We’ll plan the best route to visit your must-sees.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Card className="border-0">
              <Card.Body className="text-center">
                <Image
                  width="240"
                  height="140"
                  src="/static/images/feature-optimized2.png"
                  alt="trip"
                  quality="100"
                />
                <h5 className="mt-2 text-green-0">Optimize your route</h5>
                <p className="text-green-0-50 px-xl-5">Make the most of your day. We’ll plan the best route to visit your must-sees.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Card className="border-0">
              <Card.Body className="text-center">
                <Image
                  width="240"
                  height="140"
                  src="/static/images/feature-export2.png"
                  alt="trip"
                  quality="100"
                />
                <h5 className="mt-2 text-green-0">Export your itinerary to PDF</h5>
                <p className="text-green-0-50 px-xl-5">Make the most of your day. We’ll plan the best route to visit your must-sees.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <br/> <br/>
      <svg id="wave" style={{marginTop: '-55px', marginBottom: '-45px'}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(242, 246, 251, 1)" offset="0%" /><stop stopColor="rgba(242, 246, 251, 1)" offset="100%" /></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,30L60,31.7C120,33,240,37,360,45C480,53,600,67,720,61.7C840,57,960,33,1080,33.3C1200,33,1320,57,1440,56.7C1560,57,1680,33,1800,25C1920,17,2040,23,2160,36.7C2280,50,2400,70,2520,68.3C2640,67,2760,43,2880,35C3000,27,3120,33,3240,36.7C3360,40,3480,40,3600,40C3720,40,3840,40,3960,33.3C4080,27,4200,13,4320,11.7C4440,10,4560,20,4680,25C4800,30,4920,30,5040,40C5160,50,5280,70,5400,73.3C5520,77,5640,63,5760,51.7C5880,40,6000,30,6120,23.3C6240,17,6360,13,6480,15C6600,17,6720,23,6840,23.3C6960,23,7080,17,7200,15C7320,13,7440,17,7560,15C7680,13,7800,7,7920,16.7C8040,27,8160,53,8280,60C8400,67,8520,53,8580,46.7L8640,40L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" /></svg>
      <section className="bg-pricing">
      <br/> <br/> <br/>
        <Container>
          <h2 className="display-5 font-weight-normal text-green-0 mb-2 text-center">Simple, affordable pricing</h2>
          <p className="lead text-muted text-center fs-16">Start now for free and pay as you grow.</p>
          <Row gutter={[26,26]} className="scrollable-row-itenerary">

            {pricingList.map((price,i) => (
              <Col xxl={8} xl={8} lg={8} md={10} sm={11} xs={14} key={i}>
                <Card className={`bor-rad-20px my-3 ${i == 1 ? 'border-0 shadow bg-white' : 'bg-transparent'} `}>
                  <Card.Body>
                    <Media>
                      <img
                        width={45}
                        height={45}
                        className="mr-2 bor-rad-10px"
                        src={price.img}
                        alt="pricing"
                      />
                      <Media.Body>
                        <h5 className="mb-0 fs-16">{price.title}</h5>
                        <p className="mb-0">
                          <span className="text-black-50">Rp.</span>
                          <b className="fs-18">{formatNumber(price.price)}</b> <small className="text-black-50">/ year</small>
                        </p>
                      </Media.Body>
                    </Media>

                    <Divider className="my-3" />

                    <Media className="text-black">
                      <i className="fas fa-check mr-2 align-self-center" style={{ width: '20px' }}></i>
                      <Media.Body>
                        <p className="mb-0">Save Itinerary</p>
                      </Media.Body>
                    </Media>

                    <Media className="text-black">
                      <i className="fas fa-check mr-2 align-self-center" style={{ width: '20px' }}></i>
                      <Media.Body>
                        <p className="mb-0">{price.itinerary} Itinerary</p>
                      </Media.Body>
                    </Media>

                    <Media className={`${price.pdf ? 'text-black' : 'text-muted'}`}>
                      <i className={`fas fa-${price.pdf ? 'check' : 'times'} mr-2 align-self-center`} style={{ width: '20px' }}></i>
                      <Media.Body>
                        <p className="mb-0">Export PDF</p>
                      </Media.Body>
                    </Media>

                    <Media className={`${price.driver ? 'text-black' : 'text-muted'}`}>
                      <i className={`fas fa-${price.driver ? 'check' : 'times'} mr-2 align-self-center`} style={{ width: '20px' }}></i>
                      <Media.Body>
                        <p className="mb-0">Driver</p>
                      </Media.Body>
                    </Media>

                    <Media className={`${price.translator ? 'text-black' : 'text-muted'}`}>
                      <i className={`fas fa-${price.translator ? 'check' : 'times'} mr-2 align-self-center`} style={{ width: '20px' }}></i>
                      <Media.Body>
                        <p className="mb-0">Translator</p>
                      </Media.Body>
                    </Media>

                    <Button size="large" type="primary" className={`${i == 1 ? 'btn-green-2' : 'btn-green'} mt-3`} block>Subscribe</Button>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      <br/> <br/> <br/>
      </section>

      <svg id="wave" style={{transform: 'rotate(180deg)', marginTop: '-25px'}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(242, 246, 251, 1)" offset="0%" /><stop stopColor="rgba(242, 246, 251, 1)" offset="100%" /></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,60L48,61.7C96,63,192,67,288,65C384,63,480,57,576,50C672,43,768,37,864,33.3C960,30,1056,30,1152,30C1248,30,1344,30,1440,33.3C1536,37,1632,43,1728,43.3C1824,43,1920,37,2016,28.3C2112,20,2208,10,2304,18.3C2400,27,2496,53,2592,65C2688,77,2784,73,2880,68.3C2976,63,3072,57,3168,48.3C3264,40,3360,30,3456,23.3C3552,17,3648,13,3744,13.3C3840,13,3936,17,4032,23.3C4128,30,4224,40,4320,38.3C4416,37,4512,23,4608,21.7C4704,20,4800,30,4896,30C4992,30,5088,20,5184,18.3C5280,17,5376,23,5472,21.7C5568,20,5664,10,5760,10C5856,10,5952,20,6048,31.7C6144,43,6240,57,6336,63.3C6432,70,6528,70,6624,61.7C6720,53,6816,37,6864,28.3L6912,20L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" /></svg>
      <br/> <br/> <br/>


      <section className="position-relative">
        <div className="LandingPageInner__guideBackground"></div>
        <Container>
          <h2 className="display-5 font-weight-normal text-green-0 mb-3 text-center">Popular Iteneraries</h2>
          <p className="lead text-green-2 text-center fs-16">
            Get inspired from around people of the world — with best recommendations from them.
          </p>

          <Row gutter={[16,16]} className="scrollable-row-itenerary">
            {popular_itineraries_list.map((data,i) => (
              <Col xxl={5} xl={5} lg={7} md={10} sm={11} xs={18} key={i}>
                <Link href={`/summary/${i}`}>
                  <a className="text-reset text-decoration-none">
                    <ItineraryCardOther data={data} />
                  </a>
                </Link>
              </Col>
            ))}
          </Row>

          <br />
          <div className="text-center">
            <Button type="primary" size="large" className="btn-green px-5" ghost>See all</Button>
          </div>
          <br />
        </Container>
      </section>

      <section>
        <svg id="wave" style={{transform: 'rotate(180deg)', marginTop: '-2px'}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(234, 248, 253, 1)" offset="0%" /><stop stopColor="rgba(234, 248, 253, 1)" offset="100%" /></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="#eaf8fd" d="M0,50L48,41.7C96,33,192,17,288,8.3C384,0,480,0,576,8.3C672,17,768,33,864,38.3C960,43,1056,37,1152,30C1248,23,1344,17,1440,18.3C1536,20,1632,30,1728,43.3C1824,57,1920,73,2016,70C2112,67,2208,43,2304,43.3C2400,43,2496,67,2592,75C2688,83,2784,77,2880,73.3C2976,70,3072,70,3168,70C3264,70,3360,70,3456,61.7C3552,53,3648,37,3744,25C3840,13,3936,7,4032,13.3C4128,20,4224,40,4320,50C4416,60,4512,60,4608,56.7C4704,53,4800,47,4896,51.7C4992,57,5088,73,5184,70C5280,67,5376,43,5472,40C5568,37,5664,53,5760,56.7C5856,60,5952,50,6048,41.7C6144,33,6240,27,6336,25C6432,23,6528,27,6624,35C6720,43,6816,57,6864,63.3L6912,70L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" /></svg>
        <Container className="mb-n4">
          <br/> <br/> <br/> <br/>
          <h2 className="display-5 font-weight-bold text-green-0 mb-3 text-center">Ready to plan your trip in half the time?</h2>
          <br />
          <div className="text-center">
            <Button type="primary" size="large" className="btn-green-2 px-4">Start planning a trip</Button>
          </div>
        </Container>
      </section>

      <style jsx>{`
        :global(.bg-gradient-1) {
          background: rgb(255,255,255);
          background: linear-gradient(7deg, rgba(255,255,255,1) 0%, rgba(255,254,247,1) 19%, rgba(230,247,255,1) 100%);
        }
        .home-image {
          position: absolute;
          transform: translate(20%, -40%);
        }
        :global(.card-itenerary) {
          backdrop-filter: blur(4px);
        }
        :global(.scrollable-row-itenerary) {
          overflow-y: auto;
          flex-flow: unset;
        }
        :global(.scrollable-row-itenerary::-webkit-scrollbar) {
          width: 0;  /* Remove scrollbar space */
          background: transparent;  /* Optional: just make scrollbar invisible */
        }
        :global(.img-itenerary-home) {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        :global(.card-other-itenerary .ant-card-body) {
          padding-bottom: 10px;
        }

        .bg-pricing {
          background-color: #f2f6fb;
          background-image: url("");
          background-attachment: fixed;
          background-size: cover;
        }

        :global(.pricing-starter) {
          background-color: #f5f5f5;
        }
        :global(.pricing-basic) {
          background-color: #dedede;
        }
        :global(.pricing-unlimited) {
          background-color: #f5f5f5;
        }
      `}</style>
      <style jsx>{MapStyle}</style>
    </>
  )
}

export default Home
