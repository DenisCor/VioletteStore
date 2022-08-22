import React, {useState} from 'react'
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'

const Details = ({ product }) => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [qty, setQty] = useState(1)



  const  handleQty = e  => {
    const iconName = e.target.name;
  if(iconName === "add"){
    setQty((qty) => qty + 1) 
  }
  if(iconName === "remove" && qty > 1){
    setQty((qty) => qty - 1)
  }
}

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Paper sx={{ height: '500px' }}>
      <Box sx={{ padding: '2rem'}}>
        <Typography variant="h6">
          {product.name}
        </Typography>
        <Divider/>
        <Typography variant="h5" style={{padding:'10px 0'}}>
          £{product.price.toFixed(2)}
        </Typography>
        <Typography variant="body1" style={{padding:'10px 0'}}>
        {product.short_description}
        </Typography>
        <div style={{padding:'10px 0'}}>
        Color:
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
         <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    </div>
   
    <Box style={{padding:'20px 0px'}}>
      <ButtonGroup
      disableElevation
      variant="outlined"
      aria-label="Disabled elevation buttons"
      size="small"
      sx={{padding:0}}
    >
      <Button disableRipple name="remove" onClick={(e) => handleQty(e)}>-</Button>
      {qty}
      <Button disableRipple name="add" onClick={(e) => handleQty(e)}>+</Button>
    </ButtonGroup>
    </Box>

    <Divider/>
    <Box style={{padding:'20px 0'}}>
      <Button variant="contained" startIcon={ <AddShoppingCartIcon fontSize="small"/>}>ADD TO CART</Button>
    </Box>
   
      </Box>





    </Paper>

  )
}

export default Details