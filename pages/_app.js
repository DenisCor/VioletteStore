import Helmet from "react-helmet";
import Header from '../src/components/Header'
import Layout from '../src/components/Layout'
import Footer from '../src/components/Footer'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Helmet>
        <title>Violette Store</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Molla React Template" />
        <meta name="description" content=" VioletteStore, Scotland UK - Shop Wedding Accessories & Jewellery, Gift Ideas and more"
        />
      </Helmet>
      <Header/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Footer/> */}
    </>
  );
}

export default MyApp
