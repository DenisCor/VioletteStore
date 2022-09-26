import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';


const Contact = () => {
  return (
    <Container sx={{ minHeight:'100vh'}}>
    <Paper sx={{ marginTop: '1rem', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
<Typography variant="h5" sx={{ color: '#524069' }}>Contact</Typography>
</Paper>
</Container>
  )
}

export default Contact