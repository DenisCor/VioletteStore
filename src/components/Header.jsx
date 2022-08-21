import * as React from 'react';
import Link from "next/link";
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Container, MenuItem, Menu, InputBase, Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';





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

 const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Container maxWidth="lg">
          <Toolbar style={{marginTop:'0.5rem'}}>
          <Link href={"/"} passHref>
          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              href="/"
            >
              <img src="./logo-min.png" alt="logo" style={{ width: '60px', height: '60px', cursor:'pointer' }} />
            </Typography>
                </Link>
            <div style={{paddingRight:'10rem'}}>
              <Button
                style={{ color: 'white', fontSize: '12px' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={() => console.log('NEW ARRIVALS')}
              >
                NEW ARRIVALS
              </Button>
              <Button
                name="Jewelry"
                style={{ color: 'white', fontSize: '12px' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Jewelry
                {(anchorEl &&  anchorEl.name === 'Jewelry')? <ArrowLeftIcon/> : <ArrowDropDownIcon/>}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Earrings</MenuItem>
                <MenuItem onClick={handleClose}>Bracelets</MenuItem>
                <MenuItem onClick={handleClose}>Brooches</MenuItem>
                <MenuItem onClick={handleClose}>Jewelry Sets</MenuItem>
              </Menu>
              <Button
                name="Headpieces"
                style={{ color: 'white', fontSize: '12px' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Headpieces
                 {(anchorEl &&  anchorEl.name === 'Headpieces') ? <ArrowLeftIcon/> : <ArrowDropDownIcon/>}
              </Button>
             
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Tiaras & Crowns</MenuItem>
                <MenuItem onClick={handleClose}>Hair Vines</MenuItem>
                <MenuItem onClick={handleClose}>Hair Pins</MenuItem>
                <MenuItem onClick={handleClose}>Hair Combs</MenuItem>
              </Menu>
              <Button
                style={{ color: 'white', fontSize: '12px' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={() => console.log('SALE')}
              >
                SALE
              </Button>
              <Button
                style={{ color: 'white', fontSize: '12px' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={() => console.log('contact')}
              >
                CONTACT
              </Button>
            </div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div style={{ paddingLeft: '2rem' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                  <Link href={"/shop/wishlist"} passHref>
                  <FavoriteBorderIcon />
                </Link>
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <Link href={"/shop/checkout"} passHref>
                  <ShoppingCartIcon />
                </Link>
              </IconButton>
            </div>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header