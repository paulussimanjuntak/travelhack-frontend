const LOGIN = "LOGIN", ASK_REGISTER = "ASK_REGISTER", REGISTER = "REGISTER", FORGOT_PASSWORD = "FORGOT_PASSWORD", RESEND_VERIFICATION = "RESEND_VERIFICATION", TRAVELER = "TRAVELER", DRIVER_TRANSLATOR = "DRIVER_TRANSLATOR"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Divider, Form, Input, Row, Col, Button, Space, Checkbox, Select, Upload } from 'antd'

import { formImage } from 'formdata/image'
import { list_language } from 'lib/list_language'
import { imagePreview, uploadButton } from 'lib/imageUploader'

import isIn from 'validator/lib/isIn'
import Style from './style'

const role_list = [{value: "driver", label: "Driver"}, {value: "translator", label: "Translator"}]

const RegisterDriverTranslator = ({ changeView }) => {
  const [role, setRole] = useState([])
  const [language, setLanguage] = useState([])
  const [loading, setLoading] = useState(false)
  const [imageList, setImageList] = useState(formImage)

  return (
    <>
      <section className="content">
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}>
          <main className="main-content-sidebar">

            <div className="auth-content">
              <h1 className="display-4 fs-30 mb-4">Register as Driver / Translator</h1>

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
                  label="Region"
                  className="m-b-10"
                >
                  <Input 
                    name="region"
                    placeholder="Region"
                  />
                </Form.Item>

                <Form.Item 
                  label="Your Role"
                  className="m-b-10"
                >
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    onChange={val => setRole(val)}
                    placeholder="Choose your role"
                    removeIcon={<i className="fal fa-times" />}
                  >
                    {role_list.map((r, i) => ( <Select.Option key={i} value={r.value}>{r.label}</Select.Option> ))}
                  </Select>
                </Form.Item>

                {isIn('translator', role) && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Form.Item 
                      label="Language"
                      className="m-b-10"
                    >
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        onChange={val => setLanguage(val)}
                        placeholder="Choose your language"
                        removeIcon={<i className="fal fa-times" />}
                      >
                        {list_language.map((v, i) => ( <Select.Option key={i} value={v.name}>{v.name}</Select.Option> ))}
                      </Select>
                    </Form.Item>
                  </motion.div>
                )}

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

                <Row gutter={[10,10]}>
                  {isIn('driver', role) && (
                    <Col>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      >
                        <Form.Item 
                          label="SIM A"
                          className="m-b-0"
                        >
                          <Upload
                            accept="image/*"
                            listType="picture-card"
                            className="img-uploader-regis"
                            onPreview={imagePreview}
                            fileList={imageList.file.value}
                          >
                            {imageList.file.value.length >= 1 ? null : uploadButton(loading)}
                          </Upload>
                        </Form.Item>
                      </motion.div>
                    </Col>
                  )}

                  {isIn('translator', role) && (
                    <Col>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      >
                        <Form.Item 
                          label="KTP"
                          className="m-b-0"
                        >
                          <Upload
                            accept="image/*"
                            listType="picture-card"
                            className="img-uploader-regis"
                            onPreview={imagePreview}
                            fileList={imageList.file.value}
                          >
                            {imageList.file.value.length >= 1 ? null : uploadButton(loading)}
                          </Upload>
                        </Form.Item>
                      </motion.div>
                    </Col>
                  )}
                </Row>

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
      <style jsx>{`
      :global(.form-p-label-0 .ant-form-item-label) {
        padding-bottom: 0;
      }
      :global(.img-uploader-regis .ant-upload.ant-upload-select-picture-card) {
        width: 90px;
        height: 90px;
        border-radius: 5px;
      }
      `}</style>
    </>
  )
}

export default RegisterDriverTranslator
