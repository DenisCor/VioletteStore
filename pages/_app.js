import Helmet from "react-helmet";
import Header from '../src/components/Header'
import Layout from '../src/components/Layout'
import Footer from '../src/components/Footer'
import {ThemeProvider, createTheme} from '@mui/material'
import {ApolloProvider} from '@apollo/client'
import apolloClient from "../server/apollo-client";
import '../styles/globals.css'


const Violette = ({ Component, pageProps }) => {



  const theme = createTheme({
    palette:{
      primary: {
      main:'#524069',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif'
    ].join(','),
  },

});


  return (
    <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
      <Helmet>
        <title>Violette Store</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <meta name="keywords" content="Molla React Template" />
        <meta name="description" content=" VioletteStore, Scotland UK - Shop Wedding Accessories & Jewellery, Gift Ideas and more"
        />
      </Helmet>
      <Header/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </ThemeProvider>
    </ApolloProvider>
  
  );
}

export default Violette
