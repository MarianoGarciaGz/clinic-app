import React from 'react';

function IconoTipos({ imageUrl }) {
  return (
    <div className="image-component-tipos">
      <img src={imageUrl} alt="Imagen" className='tam-img'/>
    </div>
  );
}

export default IconoTipos;
