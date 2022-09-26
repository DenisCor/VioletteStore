


import Helmet from "react-helmet";
import Header from '../src/components/navbar/Header';
import Layout from '../src/components/Layout';
import Footer from '../src/components/footer/Footer';

import {ApolloProvider} from '@apollo/client';
import apolloClient from "../server/apollo-client";

import {ThemeProvider} from '@mui/material';
import theme from '../src/theme/theme'

// import { useStore } from 'react-redux'
import { Provider } from "react-redux";


import {store} from "../store/store.js";



import '../styles/globals.css'


const Violette = ({ Component, pageProps }) => {



  return (
    <Provider store={store}>
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
  </Provider>
  );
}

export default Violette;


