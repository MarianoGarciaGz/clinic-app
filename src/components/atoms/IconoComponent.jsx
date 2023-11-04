import React from 'react';

function IconoComponent({ imageUrl }) {
  return (
    <div className="icono-component">
      <img src={imageUrl} alt="Imagen" />
    </div>
  );
}

export default IconoComponent;
