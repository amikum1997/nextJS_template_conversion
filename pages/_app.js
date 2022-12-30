import '../styles/global.css'
import Head from 'next/head'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Orbitor,business,company,agency,modern,bootstrap4,tech,software" />
        <meta name="author" content="themefisher.com" />

        <title>Pintar Sharma</title>

        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />

        <link rel="stylesheet" href="./plugins/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./plugins/icofont/icofont.min.css" />

        <link rel="stylesheet" href="./plugins/slick-carousel/slick/slick.css" />
        <link rel="stylesheet" href="./plugins/slick-carousel/slick/slick-theme.css" />
        <link rel="stylesheet" href="css/style.css"></link>
      </Head>
      <Component {...pageProps} />
      <Head>
        <script src="./plugins/jquery/jquery.js"></script>
        <script src="./plugins/bootstrap/js/popper.js"></script>
        <script src="./plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="./plugins/counterup/jquery.easing.js"></script>
        <script src="./plugins/slick-carousel/slick/slick.min.js"></script>
        <script src="./plugins/counterup/jquery.waypoints.min.js"></script>

        <script src="./plugins/shuffle/shuffle.min.js"></script>
        <script src="./plugins/counterup/jquery.counterup.min.js"></script>
        <script src="./plugins/google-map/map.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"></script>

        <script src="./js/script.js"></script>
        <script src="./js/contact.js"></script>
      </Head>
    </Fragment>
  )
}
