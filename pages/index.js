import Head from 'next/head'
import Image from 'next/image'
import Container from '@mui/material/Container';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Container maxWidth="lg" style={{marginTop:'100px'}}>
<Grid container spacing={2}>
  <Grid item xs={3}>

  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £85.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="/e5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Evelyn Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: £125.50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  
</Grid>

    </Container>
  )
}

export default Home
