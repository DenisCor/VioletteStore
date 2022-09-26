import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import { IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useDispatch, useSelector } from 'react-redux'
import {clearWishlist, addToWishlist, removeFromWishlist  } from '../../store/features/wishlist/wishlistSlice'


const Wishlist = () => {
  const dispatch = useDispatch();


  const { wishlistData} = useSelector((state) => state.wishlist);

  const removeWishlistItem= (item) => {
    dispatch(removeFromWishlist(item))
  }

console.log('wishlistData+++++++++++++++++++++++++++++++++++++++++',wishlistData)

  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Paper sx={{ marginTop: '1rem', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffff' }}>
        <Typography variant="h5" sx={{ color: '#524069' }}>Wishlist</Typography>
      </Paper>
      <Grid container sx={{ height: 'auto', marginTop: '1rem' }}>
        <Grid xs={12} lg={12} item>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: '2rem' }} >Product</TableCell>
                    <TableCell align="right">Colour</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Stock Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody >
                  {wishlistData.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{ padding: '2rem' }} component="th" scope="row">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <img src={"http://localhost:1337" + item.attributes.images.data[0].attributes.url} style={{ width: '3.5rem' }} />
                          <Typography sx={{ marginLeft: '1rem' }}>{item.attributes.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">Silver</TableCell>
                      <TableCell align="right">£{item.attributes.price.toFixed(2)}</TableCell>
                      <TableCell align="right">
                        <Typography sx={{ color: 'red' }}>Out of Stock</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button onClick={() => console.log('add to cart')} variant="outlined" startIcon={<AddShoppingCartIcon fontSize="small" />}>
                          <Typography sx={{ fontSize: '0.8rem', padding: '0.3rem 1.4rem' }} variant="subtitle2">Add To Cart</Typography>
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton disableRipple name="testname" id="testid" size="small" onClick={() => removeWishlistItem(item)}>
                          <CloseIcon fontSize="small" sx={{ cursor: 'pointer' }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Wishlist