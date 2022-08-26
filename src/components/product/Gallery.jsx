import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';
import { Paper, Box, Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-lightbox/style.css";

const Gallery = ({ product }) => {

  console.log('product in GALLERY', product)
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [key, setKey] = useState(false);

  useEffect(() => {
    if (product) {
      setIsOpen(false);
      setPhotoIndex(0);
    }
  }, [product])

  useEffect(() => { setTimeout(() => setKey(key + 1)); }, [isOpen]);

  function moveNextPhoto() {
    setPhotoIndex((photoIndex + 1) % product.images.data.length);
  }

  function movePrevPhoto() {
    setPhotoIndex((photoIndex + product.images.data.length - 1) % product.images.data.length);
  }






  const openLightBox = () => {
    console.log('photoIndex', photoIndex)
    let index = 0

    if (!index) {
      index = 0;
    }
    setIsOpen(true);
    setPhotoIndex(index);
  }

  const closeLightBox = () => {
    setIsOpen(false);
  }








  if (!product) {
    return <div></div>
  }

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Products
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {product.category.data.attributes.name}
    </Link>,
    <Typography key="3" color="text.primary">
      {product.name}
    </Typography>,
  ];

   const images = product.images.data.map(each => each.attributes).map(each => ({
    original: process.env.NEXT_PUBLIC_SERVER_URL + each.url,
    thumbnail: process.env.NEXT_PUBLIC_SERVER_URL + each.formats.thumbnail.url
  }))

  return (
    <>
      <Paper elevation="6" sx={{ padding: '0.5rem' }}>
        <Grid container >
          <Grid item xs={12}>
            <Stack spacing={2} sx={{ padding: '1rem' }}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Grid>
          <Grid item xs={12} >
            <Card style={{ position: 'relative', display: 'flex' }}>
              <ImageGallery items={images} showFullscreenButton={false}  thumbnailPosition='left' showPlayButton={false} showBullets={false} disableThumbnailScroll={true}/>
              <Box style={{ position: 'absolute', bottom: 8, right: 8, zIndex: 1000 }}>
                <IconButton variant="outlined" size="medium" color="primary" aria-label="expand image" sx={{ backgroundColor: '#fff', boxShadow: '0px 0px 15px -2px #524069' }}>
                  <OpenWithIcon onClick={openLightBox} />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Box style={{ display: 'flex', position: 'relative' }}>
        </Box>
      </Paper>
      {
        (isOpen) ?
          <LightBox
            key={key}
            mainSrc={"http://localhost:1337" + product.images.data[photoIndex].attributes.url}
            nextSrc={"http://localhost:1337" + product.images.data[(photoIndex + 1) % product.images.data.length].attributes.url}
            prevSrc={"http://localhost:1337" + product.images.data[(photoIndex + product.images.data.length - 1) % product.images.data.length].attributes.url}
            onCloseRequest={closeLightBox}
            onMovePrevRequest={moveNextPhoto}
            onMoveNextRequest={movePrevPhoto}
            reactModalStyle={{
              overlay: {
                zIndex: 1041
              },
            }
            }
          />
          : ''
      }
    </>
  )
}

export default Gallery