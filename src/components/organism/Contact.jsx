import React from 'react';
import telefono from '../Images/whatsapp.png';
import correo from '../Images/correo.png';
import dias from '../Images/calendario.png';
import hora from '../Images/horario.png';

const Contact = () => {
  const circleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px', // Tamaño del círculo
    height: '80px', // Tamaño del círculo
    borderRadius: '50%', // Hace el div redondo
    backgroundColor: 'orange', // Color de fondo naranja
    marginRight: '20px', // Espacio entre el círculo y el texto
  };

  const iconStyle = {
    width: '50%', // Ajusta el tamaño del ícono al 70% del círculo
    height: 'auto', // Altura automática para mantener la proporción
  };

  return (
    <div className="container">
      <div className="block-quick-info-2-inner">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex quick-info-2">
              <div style={circleStyle}>
                <img src={dias} alt="Location Icon" style={iconStyle} />
              </div>
              <div className="text">
                <strong className="d-block heading">Visit our Location</strong>
                <span className="excerpt">2875 Beechwood Drive</span>
              </div>
            </div>
          </div>
          {/* Resto de las columnas con imágenes */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

