import React, { useState } from 'react'
import { Box, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Radio from '@mui/material/Radio';
import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



const Details = ({ product,onCartClick }) => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [qty, setQty] = useState(1);

  
//------------------------------------------------------------
  const handleQty = e => {
    const iconName = e.target.name;
    if (iconName === "add") {
      setQty((qty) => qty + 1)
    }
    if (iconName === "remove" && qty > 1) {
      setQty((qty) => qty - 1)
    }
  }


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  //------------------------------------------------------------



  //******INFO******
  //address product.name error wich shows up sometimes

  return (
    <Paper elevation={6} sx={{ padding: '1rem', minHeight: '38.1rem' }}>
      <Box>
        <Typography variant="h6" sx={{ padding: '0.5rem 0' }}>
          {product.attributes.name}
        </Typography>
        <Divider />
        <Typography variant="h5" style={{ padding: '10px 0' }}>
          £{product.attributes.price.toFixed(2)}
        </Typography>

        <Typography variant="body1" sx={{ padding: '10px 0', fontSize: '14px' }}>
          {product.attributes.short_description}
        </Typography>
        <Box style={{ padding: '10px 0' }}>
          Colour:
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
        </Box>

        <Box style={{ padding: '20px 0px', display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '0.9rem' }}>Qty:</Typography>
          {/* <ButtonGroup
            disableElevation
            variant="outlined"
            aria-label="Disabled elevation buttons"
            size="small"
            sx={{ padding: 0, minWidth: '8rem', marginLeft: '0.5rem' }}
          >
            <Button disableRipple name="remove" onClick={(e) => handleQty(e)}>-</Button>
            <Typography sx={{ fontSize: '0.9rem' }} variant="subtitle2">{qty}</Typography>
            <Button disableRipple name="add" onClick={(e) => handleQty(e)}>+</Button>
          </ButtonGroup> */}
        </Box>

        <Divider sx={{ paddingTop: '1rem' }} />

        <Box style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '6rem' }}>
          <Button variant="outlined" startIcon={<AddShoppingCartIcon fontSize="small" onClick={() => onCartClick()}/>}>
            <Typography sx={{ fontSize: '0.8rem', padding: '0.3rem 1.4rem' }} variant="subtitle2">Add To Cart</Typography>
          </Button>


          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FavoriteBorderIcon sx={{ fontSize: '0.8rem', marginRight: '5px' }} />
            <Typography sx={{ fontSize: '0.9rem' }} variant="subtitle2">Add to wishlist</Typography>
          </Box>
        </Box>
        <Divider />
        <Typography sx={{ paddingTop: '1rem', fontSize: '0.9rem' }}>Category: {product.attributes.category.data.attributes.name}</Typography>
        <Box sx={{display:'flex', alignItems:'center', paddingTop:'1rem'}}>
          <LocalShippingIcon fontSize="small" color="action"/>
        <Typography sx={{ fontSize: '0.9rem', paddingLeft:'5px' }}>FREE UK SHIPPING</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '2rem', marginTop: '1rem' }}>
          <Typography sx={{ paddingRight: '8px', fontSize: '0.9rem' }}>Share:</Typography>
          <IconButton size="small" sx={{ border: '1px solid', marginRight: '0.3rem' }}>
            <FacebookIcon fontSize="1" />
          </IconButton>
          <IconButton size="small" sx={{ border: '1px solid', marginRight: '0.3rem' }}>
            <TwitterIcon fontSize="1" />
          </IconButton>
          <IconButton size="small" sx={{ border: '1px solid', marginRight: '0.3rem' }}>
            <InstagramIcon fontSize="1" />
          </IconButton>
          <IconButton size="small" sx={{ border: '1px solid', marginRight: '0.3rem' }}>
            <PinterestIcon fontSize="1" />
          </IconButton>
        </Box>
    
        
      </Box>
    </Paper>
  )
}

export default Details