import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';
import {Paper, Box, Button} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import "react-image-lightbox/style.css";

const Gallery = ({product}) => {

  console.log('product in GALLERY', product)
  const [ isOpen, setIsOpen ] = useState( false );
  const [ photoIndex, setPhotoIndex ] = useState( 0 );
  const [key, setKey] = useState(false);

  useEffect( () => {
      if (product ) {
          setIsOpen( false );
          setPhotoIndex( 0 );
      }
  }, [ product ] )

  useEffect(() => { setTimeout(() => setKey(key + 1)); }, [isOpen]);

  function moveNextPhoto () {
      setPhotoIndex( ( photoIndex + 1 ) % product.images.data.length );
  }

  function movePrevPhoto () {
      setPhotoIndex( ( photoIndex + product.images.data.length - 1 ) % product.images.data.length );
  }






  const openLightBox = () => {
    console.log('photoIndex',photoIndex)
      let index = 0

      if ( !index ) {
          index = 0;
      }
      setIsOpen( true );
      setPhotoIndex( index );
  }

  const closeLightBox = () => {
      setIsOpen( false );
  }






 

  if ( !product ) {
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

console.log('product', product)
  return (
<>
    <Paper elevation="6" sx={{padding:'1rem'}}>
       <Stack spacing={2} sx={{padding:'1rem 0.5rem'}}>
       <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
       </Stack>
       <Box style={{display:'flex', position:'relative'}}>
       <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', marginRight:'1rem'}}>
                             {
                            product.images.data.map( ( item, index ) =>
                                <div  key={ product.id + '-' + index } onClick={() => console.log('clicked')} style={{padding:'0'}}>
                                    <div>
                                        <img style={{ height:'5.6rem', cursor:'pointer'}} src={ "http://localhost:1337" + product.images.data[ index ].attributes.url } alt="product back" />
                                    </div>
                                </div>
                            )
                        }
                        </div>
              <Magnifier
                  imageSrc={"http://localhost:1337" + product.images.data[0].attributes.url}
                  imageAlt="product"
                  largeImageSrc={"http://localhost:1337" + product.images.data[0].attributes.url} // Optional
                  dragToMove={false}
                  mouseActivation="hover"
                  cursorStyleActive="crosshair"
                  // id="product-zoom"
                  // className="zoom-image position-relative overflow-hidden"
                  width={product.images.data[0].attributes.width / 2}
                  height={product.images.data[0].attributes.height / 2}

                   
              // style={ { paddingTop: `${product.images.data[0].attributes.height / product.images.data[0].attributes.width * 100}%` } }
              
              />
                       
         <IconButton variant="outlined" size="medium" color="primary" aria-label="add to shopping cart"  sx={{position:'absolute', left:'29rem', bottom:'0.4rem', zIndex:'49',  backgroundColor:'#fff', boxShadow:'0px 0px 15px -2px #524069'}}>
        <OpenWithIcon onClick={ openLightBox }/>
      </IconButton>                
       </Box>




    </Paper>
    {
                (isOpen) ?
                    <LightBox
                    key={key}
                        mainSrc={ "http://localhost:1337" + product.images.data[photoIndex].attributes.url  }
                        nextSrc={ "http://localhost:1337" + product.images.data[ ( photoIndex + 1 ) % product.images.data.length ].attributes.url }
                        prevSrc={ "http://localhost:1337" + product.images.data[ ( photoIndex + product.images.data.length - 1 ) % product.images.data.length ].attributes.url }
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ moveNextPhoto }
                        onMoveNextRequest={ movePrevPhoto }
                        reactModalStyle={ {
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