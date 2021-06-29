import { setCookie } from 'nookies'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Form, Input, Row, Col, Button } from 'antd'

import SocialLogin from 'components/Auth/SocialButton'
import Style from './style'

const LOGIN = "LOGIN", ASK_REGISTER = "ASK_REGISTER", REGISTER = "REGISTER", FORGOT_PASSWORD = "FORGOT_PASSWORD", RESEND_VERIFICATION = "RESEND_VERIFICATION"

const LoginContainer = ({ changeView }) => {
  const router = useRouter()

  const onSubmitHandler = e => {
    e.preventDefault()
    setCookie(null, 'isLogin', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.replace('/')
  }
  return (
    <>
      <section className="content">
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}>
          <main className="main-content-sidebar">
            <div className="auth-content">
              <h1 className="display-4 fs-35 mb-4">Sign In</h1>

              <Form name="login" layout="vertical">
                <Form.Item 
                  label="Email"
                  className="m-b-10"
                >
                  <Input 
                    size="large" 
                    name="email"
                    placeholder="Email" 
                  />
                </Form.Item>

                <Form.Item 
                  label="Password"
                  className="m-b-10"
                >
                  <Input.Password 
                    size="large" 
                    name="password"
                    placeholder="Password" 
                  />
                </Form.Item>

                <Form.Item className="m-b-10">
                  <Row justify="space-between">
                    <Col md={12}>
                      <a>Forgot password ?</a>
                    </Col>
                    <Col md={12}>
                      <a className="float-right">
                        Resend verification
                      </a>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item className="m-b-15">
                  <Button block type="primary" className="btn-green-2" size="large" onClick={onSubmitHandler}>
                    <b>Sign In</b>
                  </Button>
                </Form.Item>

                <span>Not a member?</span> <a onClick={() => changeView(ASK_REGISTER)}> Register now</a>

              </Form>

            </div>
          </main>
        </motion.div>
      </section>

      <style jsx>{Style}</style>
    </>
  )
}

export default LoginContainer
