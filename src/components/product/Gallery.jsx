import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';
import {Paper, Box} from '@mui/material';

const Gallery = (props) => {

  const { product, adClass = "product-gallery-vertical" } = props;
  const [ isOpen, setIsOpen ] = useState( false );
  const [ photoIndex, setPhotoIndex ] = useState( 0 );

  useEffect( () => {
      if ( product ) {
          setIsOpen( false );
          setPhotoIndex( 0 );
      }
  }, [ product ] )

  function moveNextPhoto () {
      setPhotoIndex( ( photoIndex + 1 ) % product.images.data.length );
  }

  function movePrevPhoto () {
      setPhotoIndex( ( photoIndex + product.images.data.length - 1 ) % product.images.data.length );
  }

  function openLightBox () {
      let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );

      if ( !index ) {
          index = 0;
      }
      setIsOpen( true );
      setPhotoIndex( index );
  }

  function closeLightBox () {
      setIsOpen( false );
  }


 

  if ( !product ) {
      return <div></div>
  }



  return (
    <Paper>
    <Magnifier
                            imageSrc={ "http://localhost:1337" + product.images.data[0].attributes.url }
                            imageAlt="product"
                            largeImageSrc={ "http://localhost:1337" + product.images.data[0].attributes.url } // Optional
                            dragToMove={ false }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            // id="product-zoom"
                            // className="zoom-image position-relative overflow-hidden"
                            width={ product.images.data[0].attributes.width }
                            height={ product.images.data[0].attributes.height }
                            // style={ { paddingTop: `${product.images.data[0].attributes.height / product.images.data[0].attributes.width * 100}%` } }
                        />
    </Paper>
    
  )
}

export default Gallery