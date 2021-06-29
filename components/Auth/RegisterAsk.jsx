const TRAVELER = "TRAVELER", DRIVER_TRANSLATOR = "DRIVER_TRANSLATOR"

import { motion } from 'framer-motion'
import { Divider, Form, Input, Row, Col, Button, Space } from 'antd'

import Image from 'next/image'
import Card from 'react-bootstrap/Card'

import Style from './style'

const RegisterAsk = ({ changeView }) => {
  return (
    <>
      <section className="content">
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}>
          <main className="main-content-sidebar">

            <div className="auth-content">
              <h1 className="display-4 fs-35 mb-4">Register as</h1>

              <Row gutter={[10,10]}>
                <Col span={12}>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    onClick={() => changeView(TRAVELER)}
                    className="w-100 border-0 shadow text-center bor-rad-15px hover-pointer card user-select-none"
                  >
                    <Card.Body>
                      <Image
                        width="60"
                        height="60"
                        src="/static/images/traveller.png"
                        alt="Normal User"
                      />
                      <p className="mb-0 text-muted">Travelers</p>
                    </Card.Body>
                  </motion.div>
                </Col>

                <Col span={12}>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    onClick={() => changeView(DRIVER_TRANSLATOR)}
                    className="w-100 border-0 shadow text-center bor-rad-15px hover-pointer card user-select-none"
                  >
                    <Card.Body>
                      <Image
                        width="60"
                        height="60"
                        src="/static/images/translator.png"
                        alt="Normal User"
                      />
                      <p className="mb-0 text-muted">Driver / Translator</p>
                    </Card.Body>
                  </motion.div>
                </Col>
              </Row>

            </div>

          </main>
        </motion.div>
      </section>

      <style jsx>{Style}</style>
    </>
  )
}

export default RegisterAsk
