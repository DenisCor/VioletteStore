import * as React from 'react';
import Link from "next/link";
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, MenuItem, Menu, InputBase, Typography, IconButton, Toolbar, Box, AppBar, useMediaQuery } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Badge from '@mui/material/Badge';
import Image from "next/image"
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import DrawerComp from '../mobile/Drawer'
import Divider from '@mui/material/Divider';

import {useSelector} from 'react-redux'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -7,
    top: 13,
    // border: `2px solid #524069`,
    color: 'white',
    backgroundColor: '#524069',
    padding: '0 4px',
  },
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const useStyles = makeStyles({
  menuBtnStyle:{
    color: '#524069',
    fontSize: '0.8rem' ,
      position: 'relative',
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-3px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: '#524069',
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      },
  },
  menuStyle:{
  fontFamily:'Poppins',
  color:'red'
  },
  menuItem:{
    fontFamily:'Poppins',
    fontSize:'13px',
    margin:'0.5rem 1.2rem',
    color:'#524069',
    position: 'relative',
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-3px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: '#524069',
        visibility: 'hidden',
        transition: 'all 0.2s ease-in-out'
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      },
    },   
});






const Header = () => {
  const {cartData, totalQty, totalAmount} = useSelector((state) => state.cart);

  console.log('++++++++++++ cartData ++++++++++++', cartData)
  console.log('++++++++++++ totalQty ++++++++++++', totalQty)
  console.log('++++++++++++ totalAmount ++++++++++++', totalAmount)


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))






  
  return (
    <AppBar position="static" sx={{ background: '#fff'}} >
     
        <Toolbar>
          

<Container maxWidth="lg" sx={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>

            {!isMatch ? <Link href={"/"} passHref>
            <a>
                <Image src="/logo.png" width="50" height="50" style={{ cursor: 'pointer' }} />
            </a>
              
              </Link> : <DrawerComp/>}
              
     









         
            {!isMatch    ?   <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              
                <Box>
                  <Button
                      style={{ backgroundColor: 'transparent' }}
                    className={classes.menuBtnStyle}
                    onClick={() => console.log('NEW ARRIVALS')}
                  >
                    NEW ARRIVALS
                  </Button>

                  
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    className={classes.menuBtnStyle}
                    name="Jewelry"
                    onClick={handleClick}
                    endIcon={(anchorEl && anchorEl.name === 'Jewelry') ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
                  >
                    Jewelry
                  </Button>
                  <Menu
                  variant="menu"
                  className={classes.menuStyle}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>EARRINGS</MenuItem>
                    <MenuItem  onClick={handleClose}>BRACELETS</MenuItem>
                    <MenuItem onClick={handleClose}>BROOCHES</MenuItem>
                    <MenuItem onClick={handleClose}>JEWELRY SETS</MenuItem>
                  </Menu>
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    name="Headpieces"
                    className={classes.menuBtnStyle}
                    onClick={handleClick}
                    endIcon={(anchorEl && anchorEl.name === 'Headpieces') ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
                  >
                    Headpieces
                  </Button>
                  <Menu
                  variant="menu"
                  className={classes.menuStyle}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                   <MenuItem style={{ backgroundColor: 'transparent' }} onClick={handleClose}>EARRINGS</MenuItem>
                    <MenuItem style={{ backgroundColor: 'transparent' }}  onClick={handleClose}>BRACELETS</MenuItem>
                    <MenuItem style={{ backgroundColor: 'transparent' }}  onClick={handleClose}>BROOCHES</MenuItem>
                    <MenuItem style={{ backgroundColor: 'transparent' }} onClick={handleClose}>JEWELRY SETS</MenuItem>
                  </Menu>
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    className={classes.menuBtnStyle}
                    onClick={() => console.log('SALE')}
                  >
                    SALE
                  </Button>
                 

                  <Link href={"/contact"} passHref>
                  <Button 
                    style={{ backgroundColor: 'transparent' }}
                    className={classes.menuBtnStyle}
                    onClick={() => console.log('contact')}
                  >
                    CONTACT
                  </Button>
                  </Link>


                </Box>
                <Box sx={{marginLeft:'3rem'}}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: '#524069', fontSize: '1.1rem' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      sx={{ fontFamily: 'Assistant' }}
                      style={{ color: '#524069', border: '1px solid #524069', padding: '0px', fontFamily: 'Poppins', fontSize: '14px' }}
                    />
                  </Search>
                </Box>




                <Box sx={{display:'flex', alignItems:'center', marginLeft:'8rem'}}>
                <IconButton
                  size="small"
                  style={{ color: '#524069', margin:'0'}}
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <Link href={"/shop/wishlist"} passHref>
                    <FavoriteBorderIcon />
                  </Link>
                </IconButton>
                <IconButton
                  size="small"
                  style={{ color: '#524069' }}
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                
                  <Link href={"/shop/cart"} passHref>
                    <StyledBadge badgeContent={totalQty} >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </Link>
                </IconButton>
              </Box>
              </Box> : ''}
              
     





       


              

</Container>






       






    
        </Toolbar>
    
    </AppBar>
  );
}

export default Header