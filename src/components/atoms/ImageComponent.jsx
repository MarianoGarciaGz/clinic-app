import React from 'react';

function ImageComponent({ imageUrl }) {
  return (
    <div className="image-component">
      <img src={imageUrl} alt="Imagen" />
    </div>
  );
}

export default ImageComponent;