import React from 'react'
import ubicacion from '../Images/ubicacion.png'
import maps from '../Images/maps.png'

const Contacto = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* <div className="col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
            <div className="card text-center p-3 custom-border-contacto">
              
              <img src={ubicacion} className="card-img-top mx-auto mt-3 img-contacto" alt="Imagen 3" />
              <hr className="my-3 custom-border-contacto" />
              <div className="card-body">
                <p className="card-text">Thomas Alba Edison #335</p>
              </div>
            </div>
          </div> */}
  
        <div className="col-md-8 col-lg-6 d-flex align-items-center justify-content-center mb-4">
        <div className="card text-center p-3 custom-border-contacto">
            {/* Contenido del segundo div */}
            <a href="https://maps.app.goo.gl/tA2SEiB1oexSFoEq6" target="_blank" rel="noopener noreferrer">
            <img src={maps} className="card-img-top mx-auto mt-3" alt="Ubicación en Google Maps" />
            </a>
            <hr className="my-3 custom-border-contacto" />
        </div>
        </div>

        </div>
      </div>
    );
  };
  
  
  
  

export default Contacto