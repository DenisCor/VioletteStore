import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';

import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../../store/features/wishlist/wishlistSlice'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.02, 1.02, 1)",
      boxShadow: "0px 0px 10px 0.5px #524069"
    },
  },
  iconBtn: {
    width: '2rem',
    height: '2rem',
    "&:hover": {
      backgroundColor: '#d5cce0'
    }
  }
});

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { wishlistData } = useSelector((state) => state.wishlist)
  const isProductInWishlist = wishlistData.some(each => each.attributes.name === product.attributes.name)
  const [favorite, setFavorite] = useState(isProductInWishlist)
  const classes = useStyles();


  const handleFavorites = () => {
    setFavorite(!favorite)
    if (!favorite) {
      return dispatch(addToWishlist({ product }))
    }
    dispatch(removeFromWishlist(product))
  }


  return (
    <Card sx={{ padding: '0.5rem', position: 'relative' }} className={classes.root}>
      <CardActionArea >
        <Link href={`/product/${product.attributes.slug}`}>
          <CardMedia
            component="img"
            height="250"
            image={process.env.NEXT_PUBLIC_SERVER_URL + product.attributes.images.data[0].attributes.url}
            alt="green iguana"
          />
        </Link>
        <Box style={{ position: 'absolute', top: 8, right: 8, zIndex: 1000 }}>
          <IconButton onClick={() => handleFavorites()} className={classes.iconBtn} size="small" color="primary" aria-label="expand image" sx={{ backgroundColor: '#fff', boxShadow: '0px 0px 15px -2px #524069' }}>
            {isProductInWishlist ? <Favorite/> : <FavoriteBorder />}
          </IconButton>
        </Box>
        <CardContent>
          <Divider />
          <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: '500', color: '#524069' }}>
            {product.attributes.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: '500', color: '#524069' }}>
            Price: £{product.attributes.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardProduct;
