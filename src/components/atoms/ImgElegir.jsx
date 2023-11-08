import React from 'react';

function ImgElegir({ imageUrl }) {
  return (
    <div className="image-elegir">
      <img src={imageUrl} alt="Imagen" className="image-elegir-img" />
    </div>
  );
}


export default ImgElegir;