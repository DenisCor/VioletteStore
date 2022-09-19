import Head from 'next/head'
import Image from 'next/image'
import Container from '@mui/material/Container';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import OpenWithIcon from '@mui/icons-material/OpenWith';

import { useQuery, gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../server/queries';

import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { categoryNames, sortByNames } from '../utils/constants';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';


import FormControl from '@mui/material/FormControl';

import FormLabel from '@mui/material/FormLabel';

import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles';
import Filters from '../src/components/filters/Filters';

import CardProduct from '../src/components/card/CardProduct';







const Home = () => {
  const { data, error, loading } = useQuery(GET_PRODUCTS)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const resProducts = data.products.data.map(each => each.attributes)
      setProducts(resProducts);
    }
  }, [data])
  console.log('products', products)

  console.log('data', data)





  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



  //===========================STYLE==============================

  const bannerBoxStyle = {
    padding: 0,
    margin: 0,
    maxWidth: '100vw',
    height: 'auto'
  };
  const bannerTypoStyle = {
    position: 'absolute',
    top: '15%', left: '30%',
    fontSize: '4.5rem',
    fontFamily: 'Segoe UI',
    fontWeight: '300'
  };
  const bannerBtnStyle = {
    position: 'absolute',
    top: '30%',
    left: '60%',
    padding: '0.6rem 2.5rem'
  };
  const bannerImgStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '35vh',
    marginTop: '3px'
  };
  //----------------------
  const mainContainerStyle = {
    marginTop: '0.5rem',
    minHeight: '100vh'
  };
  const mainBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '400px'
  };
  const gridStyle={
    display: 'flex',
   justifyContent: 'center' 
  };
  const loadMoreBoxStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  };
  const loadMoreTypoStyle = {
    fontSize: '0.8rem',
    padding: '0.3rem 1.4rem'
  };


  //================================================================

  return (
    <>
      {/* // Banner Image */}
      <Box sx={bannerBoxStyle}>
        <Typography sx={bannerTypoStyle}> Jewellery for any occasion</Typography>
        <Button sx={bannerBtnStyle} variant="contained">SHOP NOW</Button>
        {/* <Image src="/vvv4.jpg" width='100vw' height='60vh' style={{objectFit:'cover'}} /> */}
        <img src="/vvv4.jpg" style={bannerImgStyle} />
      </Box>
      <Container maxWidth="lg" sx={mainContainerStyle}>
        {loading ? <Box sx={mainBoxStyle}>
          <CircularProgress />
        </Box> :
          <>
            <Filters />
            <Grid container spacing={2}>
              {products.map((product) => (
                <React.Fragment key={product.name} >
                  <Grid item lg={3} md={4} sm={6} xs={12} sx={gridStyle}>
                    <CardProduct product={product} />
                  </Grid>
                </React.Fragment>))}
              <Box sx={loadMoreBoxStyle}>
                <Button variant="contained">
                  <Typography sx={loadMoreTypoStyle} variant="subtitle2">LOAD MORE</Typography>
                </Button>
              </Box>
            </Grid>
          </>
        }
      </Container>
    </>
  )
}

export default Home;
