import React from 'react';
import ImageResizer from 'react-image-resizer';

function RedimensionarImagen(props) {
  return (
    <ImageResizer
      src={props.src}
      width={props.width}
      height={props.height}
      quality={props.quality}
      alt={props.alt}
      style={props.style}
    />
  );
}

export default RedimensionarImagen;