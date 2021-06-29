const LOGIN = "LOGIN", ASK_REGISTER = "ASK_REGISTER", REGISTER = "REGISTER", FORGOT_PASSWORD = "FORGOT_PASSWORD", RESEND_VERIFICATION = "RESEND_VERIFICATION", TRAVELER = "TRAVELER", DRIVER_TRANSLATOR = "DRIVER_TRANSLATOR"

import { motion } from 'framer-motion'
import { Divider, Form, Input, Row, Col, Button, Space } from 'antd'

import Style from './style'

const RegisterTraveler = ({ changeView }) => {
  return (
    <>
      <section className="content">
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}>
          <main className="main-content-sidebar">

            <div className="auth-content">
              <h1 className="display-4 fs-35 mb-4">Register as Travelers</h1>

              <Form name="login" layout="vertical">
                <Form.Item 
                  label="Username"
                  className="m-b-10"
                >
                  <Input 
                    name="username"
                    placeholder="Username" 
                  />
                </Form.Item>
                <Form.Item 
                  label="Email"
                  className="m-b-10"
                >
                  <Input 
                    name="email"
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item 
                  label="Phone"
                  className="m-b-10"
                >
                  <Input 
                    name="phone"
                    placeholder="Phone"
                  />
                </Form.Item>
                <Form.Item 
                  label="Password"
                  className="m-b-10"
                >
                  <Input.Password 
                    name="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item 
                  label="Confirmation Password"
                  className="m-b-10"
                >
                  <Input.Password 
                    name="confirm_password"
                    placeholder="Confirmation Password" 
                  />
                </Form.Item>

                <Form.Item name="agreement" className="m-b-10">
                  <div className="text-secondary">
                    <span>By registering, I agree to the</span>
                    <a className="text-tridatu" href="#a"> Terms and Conditions</a>
                    <span> and </span>
                    <a className="text-tridatu" href="#b"> Privacy Policy</a>
                  </div>
                </Form.Item>

                <Form.Item className="m-b-10">
                  <Button block type="primary">
                    <b>Create Account</b>
                  </Button>
                </Form.Item>

                <div className="m-b-10">
                  <span>Already have an account?</span>
                  <a onClick={() => changeView(LOGIN)}> Sign In</a>
                </div>
              </Form>

            </div>
          </main>
        </motion.div>
      </section>

      <style jsx>{Style}</style>
    </>
  )
}

export default RegisterTraveler
