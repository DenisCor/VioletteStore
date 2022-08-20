import * as React from 'react';
import { makeStyles } from "@material-ui/core";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@material-ui/core/Grid'
import Container from '@mui/material/Container';



const useStyles = makeStyles((theme) => ({
  serviceInfo: {
    lineHeight: "9px",
    paddingRight: theme.spacing(1),
    width: "65%",
  },
}))

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




 const SearchAppBar = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar style={{marginTop:'0.5rem'}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              href="/"
            >
              <img src="./logo.png" alt="logo" style={{ width: '60px', height: '60px' }} />
            </Typography>

            <Typography
              variant="body"
              noWrap
              component="div"
              sx={{ flexGrow: 0.2, display: { xs: 'none', sm: 'block' } }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="body"
              noWrap
              component="div"
              sx={{ flexGrow: 0.2, display: { xs: 'none', sm: 'block' } }}
            >
              JEWELRY
            </Typography>
            <Typography
              variant="body"
              noWrap
              component="div"
              sx={{ flexGrow: 0.2, display: { xs: 'none', sm: 'block' } }}
            >
              HEADPIECES
            </Typography>
            <Typography
              variant="body"
              noWrap
              component="div"
              sx={{ flexGrow: 0.2, display: { xs: 'none', sm: 'block' } }}
            >
              SALE
            </Typography>
            <Typography
              variant="body"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              CONTACT
            </Typography>

            

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
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </div>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar