import React, { useEffect, useState } from 'react'
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
import { styled } from '@mui/material/styles';
import { colors } from '../../../utils/constants'


import { addToCart, removeFromCart } from '../../../store/features/cart/cartSlice'
import {addToWishlist} from '../../../store/features/wishlist/wishlistSlice'
import { useDispatch } from 'react-redux';


const BpIcon = styled('span')(({ theme, color }) => ({
  borderRadius: '50%',
  width: 30,
  height: 30,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: color,
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  // 'input:hover ~ &': {
  //   backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  // },
  // 'input:disabled ~ &': {
  //   boxShadow: 'none',
  //   background:
  //     theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  // },
}));

const BpCheckedIcon = styled('span')(({ theme, color }) => ({
  borderRadius: '50%',
  border: '2px solid #8b73aa',
  width: 30,
  height: 30,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: color,
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  // 'input:hover ~ &': {
  //   backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  // },
  // 'input:disabled ~ &': {
  //   boxShadow: 'none',
  //   background:
  //     theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  // },
}));

const Details = ({ product, onCartClick, onWishlistClick, handleQty, setQty, qty }) => {
  const dispatch = useDispatch();

 const [selectedColor, setSelectedColor] = useState()



useEffect(() => {
  handleColorChange(product.attributes.variants[0])
},[])
  //------------------------------------------------------------



  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const handleColorChange = (variant) => {
    setQty(1)
    setSelectedColor(variant)
    const color = colors.map(color => {
      if(color.name === variant.color_name){
        color.checked = true
      }else{
        color.checked = false
      }
    })

    

  }
  //------------------------------------------------------------

console.log('selectedColor',selectedColor)

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

          {product.attributes.variants.map(variant => {
            const color = colors.find(color => color.name === variant.color_name)
          
            return <>
              <Radio
                checked={color.checked}
                sx={{
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }}
                disableRipple
                checkedIcon={<BpCheckedIcon color={color.hex} />}
                icon={<BpIcon color={color.hex} />}
                onClick={() => handleColorChange(variant)}
              />
            </>
          }
          )}
        </Box>








        <Box style={{ padding: '20px 0px', display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '0.9rem' }}>Qty:</Typography>
          <ButtonGroup
            disableElevation
            variant="outlined"
            aria-label="Disabled elevation buttons"
            size="small"
            sx={{ padding: 0, minWidth: '8rem', marginLeft: '0.5rem' }}
          >
            <Button disableRipple name="remove" onClick={(e) => handleQty(e, selectedColor)}>-</Button>
            <Typography sx={{ fontSize: '0.9rem' }} variant="subtitle2">{qty}</Typography>
            <Button disableRipple name="add" onClick={(e) => handleQty(e,selectedColor)}>+</Button>
          </ButtonGroup>
        </Box>

        <Divider sx={{ paddingTop: '1rem' }} />

        <Box style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Button onClick={() => onCartClick()} variant="outlined" startIcon={<AddShoppingCartIcon fontSize="small" />}>
            <Typography sx={{ fontSize: '0.8rem', padding: '0.3rem 1.4rem' }} variant="subtitle2">Add To Cart</Typography>
          </Button>
          <Box sx={{marginRight:'5rem'}}>
          <ButtonGroup sx={{ display: 'flex', alignItems: 'center' }} size="small" onClick={() => onWishlistClick()}>
            <FavoriteBorderIcon sx={{ fontSize: '1rem', marginRight: '5px' }} />
            <Typography sx={{ fontSize: '0.8rem' }} variant="subtitle2">Add to wishlist</Typography>
          </ButtonGroup>
          </Box>

        </Box>
        <Divider />
        <Typography sx={{ paddingTop: '1rem', fontSize: '0.9rem' }}>Category: {product.attributes.category.data.attributes.name}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '1rem' }}>
          <LocalShippingIcon fontSize="small" color="action" />
          <Typography sx={{ fontSize: '0.9rem', paddingLeft: '5px' }}>FREE UK SHIPPING</Typography>
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