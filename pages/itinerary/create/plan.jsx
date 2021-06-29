import { useState } from 'react'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { Row, Col, Form, Input, Select, DatePicker, Button } from 'antd'

import { formItinerary } from 'formdata/itinerary'

import moment from 'moment'
import Container from 'react-bootstrap/Container'

const destinations = [
  {value: "bali", label: "Bali", loc: { lat: -8.684942, lng: 115.216097 }},
  {value: "jawa", label: "Jawa", loc: { lat: -7.493196, lng: 110.923984 }},
  {value: "kalimantan", label: "Kalimantan", loc: { lat: -0.331972, lng: 113.780541 }},
  {value: "sumatra", label: "Sumatra", loc: { lat: -0.722182, lng: 101.814918 }},
  {value: "kupang", label: "Kupang", loc: { lat: -10.180453, lng: 123.592619 }},
]

const CreatePlan = () => {
  const router = useRouter()
  const [itinerary, setItinerary] = useState(formItinerary)

  const { name, destination, lat, lng, start, end } = itinerary

  const onChangeHandler = e => {
    const name = e.target.name
    const value = e.target.value
    const data = {
      ...itinerary,
      [name]: {
        ...itinerary[name], value: value, isValid: true, message: null
      }
    }
    setItinerary(data)
  }

  const onDestinationChangeHandler = e => {
    let val = JSON.parse(e)
    const data = {
      ...itinerary,
      destination: { value: val.label, isValid: true, message: null },
      lat: { value: val.loc.lat, isValid: true, message: null },
      lng: { value: val.loc.lng, isValid: true, message: null }
    }
    setItinerary(data)
  }

  const onDateChangeHandler = (_, dateStrings) => {
    const data = {
      ...itinerary,
      start: { value: dateStrings[0], isValid: true, message: null },
      end: { value: dateStrings[1], isValid: true, message: null },
    }
    setItinerary(data)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    const data = {
      itinerary_name: name.value,
      destination: destination.value,
      lat: lat.value,
      lng: lng.value,
      start: start.value,
      end: end.value
    }
    setCookie(null, 'itinerary', JSON.stringify(data), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.replace('/itinerary/32173218')
  }

  return (
    <>
      <Container className="mt-5">
        <Row justify="center">
          <Col xxl={14} xl={16} lg={20} md={22} sm={22} xs={24}>
            <h1 className="display-4 text-center fs-35 mb-4 font-weight-normal">Create a new itinerary</h1>

            <Row justify="center">
              <Col xxl={14} xl={16} lg={20} md={22} sm={22} xs={24}>

                <Form name="create_itinerary" layout="vertical">
                  <Form.Item 
                    label="Itinerary Name"
                    className="m-b-10"
                  >
                    <Input 
                      size="large" 
                      name="name"
                      placeholder="Itinerary name" 
                      value={name.value}
                      onChange={onChangeHandler}
                    />
                  </Form.Item>

                  <Form.Item 
                    label="Destination"
                    className="m-b-10"
                  >
                    <Select 
                      allowClear
                      showSearch
                      size="large" 
                      className="w-100" 
                      placeholder="City name" 
                      value={destination.value}
                      onChange={onDestinationChangeHandler}
                    >
                      {destinations.map((des, i) => (
                        <Select.Option 
                          key={i} 
                          value={JSON.stringify(des)}
                        >
                          {des.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item 
                    label="Dates"
                    className="m-b-20"
                  >
                    <DatePicker.RangePicker 
                      size="large" 
                      className="w-100"
                      format="DD MMMM YYYY"
                      value={[start.value !== "" && moment(start.value), end.value !== "" && moment(end.value)]}
                      onChange={onDateChangeHandler}
                    />
                  </Form.Item>

                  <Form.Item className="m-b-10">
                    <Button 
                      size="large" 
                      type="primary" 
                      className="btn-green" 
                      block
                      onClick={onSubmitHandler}
                    >Create Itinerary</Button>
                  </Form.Item>

                </Form>

              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreatePlan
