import Style from './style'
import Link from 'next/link'

const AuthLayout = ({ children }) => {
  return (
    <>
      <div id="main-container">
        <section className="auth-sidebar">
          <div className="auth-sidebar-content">
            <header>
              <h1 className="font-weight-lighter">
                <Link href="/">
                  <a className="text-reset text-decoration-none">
                    TRAVELHACK
                  </a>
                </Link>
              </h1>
              <h1 className="h1 bolder">Explore, plan, and enjoy!</h1>
            </header>
            <div className="artwork">
              <div className="artwork-image" />
              <h1 className="artwork-attribution">
                by mentimun_mentah
              </h1>
            </div>
          </div>
        </section>
        {children}
      </div>
      <style jsx>{Style}</style>
    </>
  )
}

export default AuthLayout
