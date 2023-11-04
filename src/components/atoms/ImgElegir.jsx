import React from 'react';

function ImgElegir({ imageUrl }) {
  return (
    <div className="image-elegir" >
      <img src={imageUrl} alt="Imagen" />
    </div>
  );
}

export default ImgElegir;