import React from 'react'
import telefono from '../Images/telefono.png'

const Contact = () => {
  return (
    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <div className="card text-center" >
            <img
              src={telefono}
              className="card-img-top mx-auto"
              alt="Imagen de ejemplo"
              style={{ width: '6em', height: '6em', objectFit: 'cover', padding: '10px' }} // Ajusta el ancho y alto según tus necesidades
            />
            <hr className="my-2" />
            <div className="card-body">
              <p className="card-text">Texto de ejemplo debajo de la línea.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <div className="card text-center" >
            <img
              src={telefono}
              className="card-img-top mx-auto"
              alt="Imagen de ejemplo"
              style={{ width: '6em', height: '6em', objectFit: 'cover', padding: '10px' }} // Ajusta el ancho y alto según tus necesidades
            />
            <hr className="my-2" />
            <div className="card-body">
              <p className="card-text">Texto de ejemplo debajo de la línea.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <div className="card text-center" >
            <img
              src={telefono}
              className="card-img-top mx-auto"
              alt="Imagen de ejemplo"
              style={{ width: '6em', height: '6em', objectFit: 'cover', padding: '10px' }} // Ajusta el ancho y alto según tus necesidades
            />
            <hr className="my-2" />
            <div className="card-body">
              <p className="card-text">Texto de ejemplo debajo de la línea.</p>
            </div>
          </div>
        </div>
      </div>

      
      
     
    </div>

   
  );
};

export default Contact;
