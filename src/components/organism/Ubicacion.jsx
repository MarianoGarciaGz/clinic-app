import React from 'react'
import ubicacion from '../Images/ubicacion.png'
import maps from '../Images/maps.png'

const Contacto = () => {
  const circleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-secondary)',
    marginTop: '20px',
    
  };

  const iconStyle = {
    width: '50%',
    height: 'auto',
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const textContentStyle = {
    marginLeft: '10px',
  };

  const orangeTextStyle = {
    color: 'var(--color-secondary)',
  };

  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  };

  const iframeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const iframeStyle = {
    border: '4px solid var(--color-secondary)', // Borde naranja alrededor del iframe
    width: '90%',
    height: '450px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Sombra alrededor del iframe
  };

  return (
    <div>
      <div style={circleContainerStyle}>
        <div style={circleStyle}>
          <img src={ubicacion} alt="Location Icon" style={iconStyle} />
        </div>
        <div className="text" style={textStyle}>
          <div style={textContentStyle}>
            <strong className="d-block heading" style={orangeTextStyle}>Ubicación</strong>
            <span className="excerpt">clinicabelleza@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5" style={iframeContainerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.641244446811!2d-101.17757189999999!3d19.6853053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0de5cb12b165%3A0x8739a8d512335c89!2sThomas%20Alva%20Edison%20335%2C%20Electricistas%2C%2058290%20Morelia%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1701404406253!5m2!1ses-419!2smx"
          style={iframeStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;




  
  
  
  
