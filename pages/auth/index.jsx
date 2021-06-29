import { useState } from 'react'
import { Row, Col } from 'antd'
import { AnimatePresence } from 'framer-motion'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import Login from 'components/Auth/Login'
import RegisterAsk from 'components/Auth/RegisterAsk'
import RegisterTraveler from 'components/Auth/RegisterTraveler'
import RegisterDriverTranslator from 'components/Auth/RegisterDriverTranslator'

const LOGIN = "LOGIN", ASK_REGISTER = "ASK_REGISTER", REGISTER = "REGISTER", FORGOT_PASSWORD = "FORGOT_PASSWORD", RESEND_VERIFICATION = "RESEND_VERIFICATION", TRAVELER = "TRAVELER", DRIVER_TRANSLATOR = "DRIVER_TRANSLATOR"

const Auth = () => {
  const [active, setActive] = useState(LOGIN)
  return (
    <>
      <Container className="d-flex flex-column justify-content-center">
        <Row justify="center">
          <Col xxl={14} xl={16} lg={20} md={22} sm={22} xs={24}>

            <Card className="border-0">
              <Card.Body>

                <AnimatePresence exitBeforeEnter>
                  {active === LOGIN && (
                    <Login changeView={setActive} />
                  )}
                  {active === ASK_REGISTER && (
                    <RegisterAsk changeView={setActive} />
                  )}
                  {active === TRAVELER && (
                    <RegisterTraveler changeView={setActive} />
                  )}
                  {active === DRIVER_TRANSLATOR && (
                    <RegisterDriverTranslator changeView={setActive} />
                  )}
                </AnimatePresence>

              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

      <style jsx>{`
      `}</style>
    </>
  )
}

export default Auth
