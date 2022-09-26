


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

import {useDispatch, useSelector} from 'react-redux'
import {addToCart, removeFromCart} from '../../store/features/cart/cartSlice'




const Cart = () => {
  const dispatch = useDispatch();


  const {cartData, totalQty, totalAmount} = useSelector((state) => state.cart);

const removeCartItem = (item) => {
  dispatch(removeFromCart(item))
}
  



  return (
    <Container sx={{ minHeight:'100vh'}}>
      <Paper sx={{ marginTop: '1rem', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffff' }}>
        <Typography variant="h5" sx={{ color: '#524069' }}>Shopping Cart</Typography>
      </Paper>
    <Grid container sx={{ height:'auto', marginTop:'1rem'}}>
   
      <Grid  xs={12}  lg={8} item>
        
          <Box sx={{marginRight:'1rem'}}>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding:'2rem'}} >Product</TableCell>
            <TableCell align="right">Colour</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {cartData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell style={{padding:'2rem'}} component="th" scope="row">
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <img src={"http://localhost:1337" + item.attributes.images.data[0].attributes.url} style={{ width: '3.5rem'}} />
                  <Typography sx={{marginLeft:'1rem' }}>{item.attributes.name}</Typography>
                </Box>
              
              </TableCell>
              <TableCell align="right">£{item.attributes.price.toFixed(2)}</TableCell>
              <TableCell align="right">
              <ButtonGroup
            disableElevation
            variant="outlined"
            aria-label="Disabled elevation buttons"
            size="small"
            sx={{ padding: 0, minWidth: '8rem', marginLeft: '0.5rem' }}
          >
            <Button disableRipple name="remove" onClick={(e) => handleQty(e)}>-</Button>
            <Typography sx={{ fontSize: '0.9rem' }} variant="subtitle2">{item.qty}</Typography>
            <Button disableRipple name="add" onClick={(e) => handleQty(e)}>+</Button>
          </ButtonGroup>
              </TableCell>
              <TableCell align="right">£{item.total.toFixed(2)}</TableCell>
              <TableCell align="right">
                <IconButton disableRipple name="testname" id="testid" size="small"  onClick={() => removeCartItem(item)}>
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




      <Grid xs={12}  lg={4} item> <Paper elevation={6}>
      <Box sx={{minHeight:'50vh', padding:'1rem', backgroundColor:'#ececec'}}>
      <Typography sx={{marginBottom:'1rem'}}>Cart Total</Typography>
        <Divider/>
        <Typography sx={{margin:'1rem 0'}}> Subtotal</Typography>
        <Divider/>
        <Typography sx={{margin:'1rem 0'}}> Shipping:</Typography>
        <Typography sx={{margin:'1rem 0'}}> Total: £{totalAmount.toFixed(2)}</Typography>
      </Box>
      </Paper></Grid>
    </Grid>
    
    
    </Container>
  )
}

export default Cart








