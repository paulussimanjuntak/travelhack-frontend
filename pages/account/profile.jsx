import { Row, Col } from 'antd'

import Container from 'react-bootstrap/Container'

const Profile = () => {
  return (
    <>
      <Container>
        <Row gutter={[10,10]}>
          <Col span={6} className="border-right">
            Menu
          </Col>
          <Col span={18}>
            utama
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
