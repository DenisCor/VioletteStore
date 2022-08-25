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
import DrawerComp from '../components/Drawer'
import Divider from '@mui/material/Divider';


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
    fontSize:'14px',
    margin:'0.75rem 1.2rem'
    },
    link: {
      color: 'white',
      position: 'relative',
  
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-3px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: 'red',
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      },
    },
});






const Header = () => {
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



  console.log('is MAtch', isMatch)






  return (

    <AppBar position="static" sx={{ background: '#fff' }} >
      <Container >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '3px' }} >

    
          <Grid container spacing={1} sx={{ padding: '0px', margin: '0px' }}>
          
            <Grid item xs={1} sx={{ padding: '0px', margin: '0px' }}>
              <Link href={"/"} passHref>
                <Image src="/logo.png" width="60" height="60" style={{ cursor: 'pointer' }} />
              </Link>
            </Grid>










            <Grid item xs={10} sx={{ padding: '10px 0 0 0', margin: '0px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'start', padding: '0 2rem' }}>
                <Box sx={{ paddingTop: '0.75rem' }}>
                  <Button
                      disableElevation
                      disableRipple
                    className={classes.menuBtnStyle}
                    onClick={() => console.log('NEW ARRIVALS')}
                  >
                  
                    NEW ARRIVALS
                  </Button>



                  



                  <Button
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
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Earrings</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Bracelets</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Brooches</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Jewelry Sets</MenuItem>
                  </Menu>
          





                  <Button
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
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Earrings</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Bracelets</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Brooches</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleClose}>Jewelry Sets</MenuItem>
                  </Menu>








                  <Button
                    className={classes.menuBtnStyle}
                    onClick={() => console.log('SALE')}
                  >
                    SALE
                  </Button>
                  <Button
                    className={classes.menuBtnStyle}
                    onClick={() => console.log('contact')}
                  >
                    CONTACT
                  </Button>
                </Box>
                <Box sx={{ paddingTop: '0.6rem' }}>
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
              </Box>
            </Grid>





            <Grid item xs={1} sx={{ padding: '0px', margin: '0px' }} >
              <Box sx={{ paddingTop: '10px' }} >
                <IconButton
                  size="small"
                  style={{ color: '#524069', padding: '0', margin: '2px' }}
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
                  <Link href={"/shop/checkout"} passHref>
                    <StyledBadge badgeContent={2} >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </Link>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header