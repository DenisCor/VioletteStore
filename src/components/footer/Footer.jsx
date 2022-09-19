import React from 'react'
import Container from '@mui/material/Container';




const Footer = () => {
  return (
    <footer className="footer">
    <Container maxWidth="lg" style={{paddingTop:'10px', marginTop:'2rem', paddingLeft:'50px'}}>
    Copyright © 2022 Violette Store. All Rights Reserved.| <span style={{textDecoration:'underline'}}>Terms Of Use </span> | <span style={{textDecoration:'underline'}}>Privacy Policy</span>
    </Container>


    </footer>
  )
}

export default Footer