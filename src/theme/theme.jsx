import {createTheme} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#524069',
      light:'#8b73aa',
      dark:'#3a2d4a',
    },
    secondary: {
      main: '#ce93d8',
      light:'',
      dark:'',
    },
    error: {
      main: '#cd323d',
      light:'#e49096',
      dark:'#99252d',
    },
  },
  shape:{
  borderRadius:0,
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif'
    ].join(','),
  },
});


export default theme;