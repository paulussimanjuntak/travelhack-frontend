import { useRouter } from 'next/router'

import Header from 'components/Header'
import Footer from 'components/Footer'

import AuthLayout from 'components/Auth/Layout'

const Layout = ({ children }) => {
  const router = useRouter()

  const isAuth = router.pathname.startsWith('/auth')
  const isItineraty = router.pathname.startsWith('/itinerary/[id]')
  const isItineratyDetail = router.pathname.startsWith('/itinerary/view/[id]')

  let layout =  <> <Header /> {children} <Footer /> </>
  if(isAuth) layout = <AuthLayout> {children} </AuthLayout>
  if(isItineraty || isItineratyDetail) layout = <> {children} </>

  return layout
}

export default Layout
