import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { Button, Dropdown, Avatar, Menu } from 'antd'

import Link from 'next/link'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


const accountMenu = (logoutHandler) => (
  <Menu className="d-none d-lg-block">
    <Menu.Item icon={<i className="fas fa-user" />}>
      <Link href="/account/profile" as="/account/profile">
        <a className="text-decoration-none">
          Profile
        </a>
      </Link>
    </Menu.Item>
    <Menu.Item icon={<i className="fas fa-history" />}>
      <Link href="/account/history" as="/account/history">
        <a className="text-decoration-none">
          History
        </a>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<i className="fas fa-sign-out-alt" />} onClick={logoutHandler}>
      <a className="text-decoration-none">
        Logout
      </a>
    </Menu.Item>
  </Menu>
)

const Header = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  const logoutHandler = () => {
    setCookie(null, 'isLogin', 'false', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.replace('/')
    router.reload()
  }

  useEffect(() => {
    const { isLogin } = parseCookies()
    const cData = isLogin && JSON.parse(isLogin)
    setIsLogin(cData)
  }, [])

  return (
    <>
      <Navbar expand="lg" expanded={false}>
        <Container className="p-b-8 border-bottom-navbar">
          <Navbar.Brand href={`/`} className="d-inline-flex">
            <Image
              height={45}
              width={205}
              src="/static/images/logo-label.png"
              className="d-inline-block align-top logo-navbar"
              alt="Smart Cities Guide"
            />
          </Navbar.Brand>

          <Navbar.Collapse>
            <Nav className="ml-auto align-items-center">
              <Link href="/">
                <Nav.Link className="nav-link-edit" as="a">
                  Home
                </Nav.Link>
              </Link>
              <Nav.Link className="nav-link-edit">Planners</Nav.Link>
              <Link href="/itinerary/create/plan">
                <Nav.Link className="nav-link-edit" as="a">Itineraries</Nav.Link>
              </Link>
              <Nav.Link className="nav-link-edit">About Us</Nav.Link>
              {isLogin ? (
                <Dropdown overlay={() => accountMenu(logoutHandler)} placement="bottomRight" className="ml-3">
                  <a className="text-truncate text-dark align-middle text-decoration-none">
                    <Avatar size="large" src={'https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/UkzwVZGSorE7b34M'} />
                  </a>
                </Dropdown>
              ) : (
                <Link href="/auth">
                  <Nav.Link className="nav-link-edit py-0" as="a">
                    <Button size="large" type="primary" className="btn-green px-4">Login</Button>
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
      :global(.border-bottom-navbar) {
        border-bottom: 1px solid var(--gray-5)!important;
      }
      :global(.nav-link-edit) {
        margin-left: 20px;
      }
      `}</style>
    </>
  )
}

export default Header
