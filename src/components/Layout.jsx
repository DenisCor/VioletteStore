import React from 'react'
import Container from '@mui/material/Container';


const Layout = ({children}) => {
  return (
    <div>
        <Container maxWidth="lg" style={{border:'2px solid black', height:'120vh'}}>
          {children}
        </Container>
    </div>
  )
}

export default Layout