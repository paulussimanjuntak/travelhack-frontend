import { Button, Image, Row, Col } from 'antd'

const GoogleLogo = '/static/images/google.svg'
const FacebookLogo = '/static/images/facebook.svg'

const SocialButton = ({ text }) => {
  return(
    <>
      <Row gutter={[15, 15]}>
        <Col lg={12} md={12} sm={12} xs={24}>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/login/google`} className="text-decoration-none text-reset">
            <Button block className="btn-google px0 btn-white" size="large">
              <Image width={18} src={GoogleLogo} preview={false} alt="GoogleLogo" />
              <span className="ml-1 fs-14 text-reset">{text} with Google</span>
            </Button>
          </a>
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/login/facebook`} className="text-decoration-none text-reset">
            <Button block className="ant-btn-blue btn-google" size="large">
              <Image width={18} src={FacebookLogo} preview={false} alt="FacebookLogo" />
              <span className="ml-1 fs-14">{text} with Facebook</span>
            </Button>
          </a>
        </Col>
      </Row>
    </>
  )
}

export default SocialButton
