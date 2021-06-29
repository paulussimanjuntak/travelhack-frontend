import { Row, Col, Divider } from 'antd'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#ffffff" fillOpacity={1} d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,165.3C840,171,960,213,1080,229.3C1200,245,1320,235,1380,229.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" /></svg>
      </div>
      <div className="footer-bg">
        <Container>
          <Row gutter={[10,10]} justify="center" className="text-center">
            <Col span={24}>
              <Image src="/static/images/logo.png" height={54} width={208} alt="Smart Cities Guide" />
              <br /> <br /> <br />
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <h3 className="text-green-1 bold h3">Short History</h3>
              <p className="text-green-0 font-weight-light">
                Aliquam dictum dapibus neque at elementum. Ut id suscipit risus, vel luctus dolor. Nullam fermentum rhoncus ultrices. Integer ut aliquam ipsum, vel sollicitudin erat. Vestibulum dui felis, sagittis vitae magna ac, finibus nisi.
              </p>
            </Col>

            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="footer__contact">
              <h3 className="text-green-1 bold h3">Contact</h3>
              <p className="font-weight-light">
                <i className="fas fa-map-marker-alt"></i> Taman Giri, Jl. Jalan No.84
              </p>
              <p className="font-weight-light">
                <i className="fas fa-phone"></i> Phone: (0361) 144 527 93
              </p>
              <p className="font-weight-light">
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:citiesguide@gmail.com">citiesguide@gmail.com</a>
              </p>
            </Col>

            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="footer__social">
              <h3 className="text-green-1 bold h3">Follow us</h3>
              <p>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.google.com" target="_blank">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </p>
            </Col>
          </Row>

          <Divider />

          <p className="text-center mb-5 pb-4 text-green-0 font-weight-light">All right reserved @citiesguide</p>
        </Container>
      </div>

      <style global jsx>{`
        .footer__top { padding: 60px 0; background: #021927; text-align: left; color: white;}
        .footer__top h3 { padding-bottom: 10px; color: #fff; }
        .footer__about img.footer__logo { max-width: 250px; margin-top: 0; margin-bottom: 18px; }
        .footer__about p a { color: #aaa !important;}
        .footer__contact p { word-wrap: break-word;}
        .footer__contact i { padding-right: 10px; font-size: 18px; color: var(--green-0); }
        .footer__contact p a { color: var(--green-0)!important; }
        .footer__social a { display: inline-block; margin-right: 20px; margin-bottom: 8px; color: var(--green-0)!important; border: 0; }
        .footer__social a:hover, .footer__social a:focus { color: var(--green-2)!important; border: 0; }
        .footer__social i { font-size: 24px; vertical-align: middle; }
        .footer__copyright p { margin: 0; padding: 0.5rem 0; }
        .footer__copyright a { color: #fff; border: 0; }
        .footer__copyright a:hover, .footer__copyright a:focus { color: #aaa; border: 0; }

        .footer-bg {
          background: #ECF9FF;
        }
      `}</style>
    </>
  )
}

export default Footer
