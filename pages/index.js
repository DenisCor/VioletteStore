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


import { useQuery, gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../server/queries';

import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';






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

  const {data, error, loading} = useQuery(GET_PRODUCTS )

  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([0, 100]);


  useEffect(() => {
    if (data) {
      const resProducts = data.products.data.map(each => each.attributes)
      setProducts(resProducts);
    }
  }, [data])
  


  

  
console.log('products', products)


  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Container maxWidth="lg" style={{marginTop:'100px'}}>

  
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
                <FormControlLabel  control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{paddingLeft:"5px"}} variant="body2">All</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Earrings</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Bracelets</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Brooches</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Hairpieces</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Jewelry Sets</Typography>}/>
              </FormGroup>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Typography>
                Sort By:
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Default</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Newness</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Price: Low To High</Typography>}/>
                <FormControlLabel control={<Checkbox defaultChecked size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Price: High To Low</Typography>}/>
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
                <FormControlLabel value="female" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Silver</Typography>}/>
                <FormControlLabel value="male" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Gold</Typography>}/>
                <FormControlLabel value="other" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}  label={<Typography sx={{paddingLeft:"5px"}} variant="body2">Rose gold</Typography>}/>
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
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
          <CardMedia
          component="img"
          height="240"
          image= {process.env.NEXT_PUBLIC_SERVER_URL + product.images.data[0].attributes.url }
          alt="green iguana"
        />
        <CardContent>
        <Divider variant="middle" />
          <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px'}}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £{product.price.toFixed( 2 )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid> 
  </>))}
  


</Grid>








<Box sx={{ width: 500 }}>
   
    </Box>

    </Container>
  )
}

export default Home;
