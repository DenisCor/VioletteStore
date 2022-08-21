import React from 'react'
import Container from '@mui/material/Container';


const Layout = ({children}) => {
  return (
    <div>
        <Container maxWidth="lg" style={{minHeight:'100vh'}}>
          {children}
        </Container>
    </div>
  )
}

export default Layout