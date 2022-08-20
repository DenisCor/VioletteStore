import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Box'



const Footer = () => {
  return (
    <footer style={{border:'2px solid white'}}>
 <Box>
  <Container maxWidth="lg">
    <Grid container spacing={5}> 
    <Grid item xs={12} sm={4}>
      <Box borderBottom={1}>
       
       <Link href="/" color="white">Contact</Link>
      </Box>
      <Box borderBottom={1}>
       
       <Link href="/" color="white">Support</Link>
      </Box>
      <Box borderBottom={1}>
       
       <Link href="/" color="white">Privacy</Link>
      </Box>
    </Grid>
    </Grid>
  </Container>
 </Box>

    </footer>
  )
}

export default Footer