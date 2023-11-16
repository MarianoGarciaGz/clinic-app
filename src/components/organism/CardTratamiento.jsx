import React from 'react';
import fondo from '../Images/fondo.jpg';
import servicio from '../Images/servicio.jpg';

const CardTratamiento = () => {
  const containerStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '25em',
    maxWidth: '60em',
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '15px'
  };

  const containerSize = {
    maxWidth: '80em',
  };

  const transparentBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  return (
    <div className="container-fluid bg-cover d-flex justify-content-center align-items-center" style={containerStyle}>
      <div className="container d-flex justify-content-center align-items-center" style={containerSize}>
        <div className="row align-items-stretch">
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="rectangulo-con-imagen d-flex align-items-center flex-column"
              style={{
                ...transparentBackground,
                padding: '20px',
                border: '10px solid var(--color-secondary)',
                borderRadius: '15px',
                height: '100%',
                width: '25em',
              }}
            >
              <h2 className="text-center">MASAJE</h2>
              <p className="text-center">Es un tipo de medicina integral en la que un masajista frota y presiona firmemente la piel, los músculos, los tendones y los ligamentos.</p>
              <hr className='custom-border-us' style={{ width: '80%' }} />
              <div className="d-flex justify-content-around align-items-center w-100">
                <div className="text-block text-center" style={{ margin: '0', padding: '0' }}>
                  <p>Precio</p>
                  <hr className='custom-border-us' style={{ margin: '0', marginTop: '-5px' }} />
                  <p>250.00</p>
                </div>
                <div className="text-block text-center" style={{ margin: '0', padding: '0' }}>
                  <p>Duración</p>
                  <hr className='custom-border-us' style={{ margin: '0', marginTop: '-5px' }} />
                  <p>1 Hora</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="imagen-con-marco d-flex justify-content-center align-items-center"
              style={{
                border: '10px solid var(--color-secondary)',
                borderRadius: '15px',
                padding: '0',
                width: '20em',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={servicio}
                alt="Imagen con marco"
                className="img-fluid"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTratamiento;
