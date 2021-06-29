import Head from 'next/head'

import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'suneditor/dist/css/suneditor.min.css'

import Layout from 'components/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Smart Cities Guide</title>
        <link rel="icon" href="/static/images/map.png" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Smart Cities Guide" />
        <link rel="stylesheet" href="/static/css/global.css" />
        <link rel="stylesheet" href="/static/css/utility.min.css" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
