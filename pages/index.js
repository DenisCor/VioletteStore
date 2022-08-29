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




const useStyles = makeStyles({
  root: {
    maxWidth: 260,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)",
    boxShadow: "0px 0px 10px 0.5px #524069" },
  },
  iconBtn:{
    width:'2rem',
    height:'2rem',
  
    "&:hover": { backgroundColor:'#d5cce0'
  }}
});




function valuetext(value) {
  return `${value}£`;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {

  const { data, error, loading } = useQuery(GET_PRODUCTS)
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([0, 100]);




  useEffect(() => {
    if (data) {
      const resProducts = data.products.data.map(each => each.attributes)
      setProducts(resProducts);
    }
  }, [data])






  console.log('products', products)

  //=====================================================================================================================

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const classes = useStyles();
  return (
    <>

      <Container maxWidth="lg" style={{ marginTop: '100px' }}>
        {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '400px' }}>
          <CircularProgress />
        </Box> :
          <>
            <Accordion sx={{ padding: '0.2rem', marginBottom: '1rem' }}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Button variant="outlined">Filters</Button>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item lg={3} xs={12}>
                    <Typography>
                      Category:
                    </Typography>
                    <FormGroup>
                      {categoryNames.map(cat => (
                        <>
                          <FormControlLabel control={<Checkbox checked={cat.checked} size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{cat.name}</Typography>} />
                        </>
                      ))}
                    </FormGroup>
                  </Grid>
                  <Grid item lg={3} xs={12}>
                    <Typography>
                      Sort By:
                    </Typography>
                    <FormGroup>
                      {sortByNames.map(cat => (
                        <>
                          <FormControlLabel control={<Checkbox checked={cat.checked} size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{cat.name}</Typography>} />
                        </>
                      ))}
                    </FormGroup>
                  </Grid>
                  <Grid item lg={3} xs={12}>
                    <Typography>
                      Colour:
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">Silver</Typography>} />
                      <FormControlLabel value="male" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">Gold</Typography>} />
                      <FormControlLabel value="other" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">Rose gold</Typography>} />
                    </RadioGroup>
                  </Grid>
                  <Grid item lg={3} xs={12}>
                    <Typography>
                      Price:
                    </Typography>
                    <Box sx={{ width: 250 }}>
                      <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Grid container spacing={2}>
              {products.map((product) => (
                <>
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: 345, padding: '0.5rem', position: 'relative' }} className={classes.root}>
                      <CardActionArea>
                        <Link href={`/product/${product.slug}`}>
                          <CardMedia
                            component="img"
                            height="250"
                            image={process.env.NEXT_PUBLIC_SERVER_URL + product.images.data[0].attributes.url}
                            alt="green iguana"
                          />
                        </Link>
                        <Box style={{ position: 'absolute', top: 8, right: 8, zIndex: 1000 }}>
                          <IconButton className={classes.iconBtn} size="small" color="primary" aria-label="expand image" sx={{ backgroundColor: '#fff', boxShadow: '0px 0px 15px -2px #524069' }}>
                            <Checkbox onClick={() => console.log('wishlist')}  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                          </IconButton>
                        </Box>
                        <CardContent>
                          <Divider/>
                          <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'16px', fontWeight:'500', color:'#524069'}}>
                            {product.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px', fontWeight:'500', color:'#524069'}}>
                            Price: £{product.price.toFixed(2)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>))}



            </Grid>

          </>

        }

















      </Container>
    </>
  )
}

export default Home;
