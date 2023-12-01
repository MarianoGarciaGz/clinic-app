import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import faciales from '../Images/faciales.jpg';
import peinados from '../Images/peinados.jpg';
import unas from '../Images/uñas.jpg';
import masajes from '../Images/masaje.jpg';

const CuadroGrande = () => {

  const imgStyles = {
    width: '100%', // Establece el ancho al 100%
    height: 'auto', // Mantén la proporción
  };

  const customButtonStyle = {
    backgroundColor: '#ffc28a', // Cambia el color de fondo a un tono más claro de naranja
    borderColor: '#ffc28a', // Cambia el color del borde si es necesario
    color: 'white', // Cambia el color del texto del botón
  };

  return (
    <Container style={{ margintop: '200em' }} className="my-4" >
      <Row>
          <Col md={3} className="orange-bg d-flex align-items-stretch justify-content-center">

          <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
            <h2></h2>
            <p>Experimenta el lujo del bienestar en nuestra clínica de masajes, donde la relajación y la salud se fusionan en una experiencia única. </p>
            {/* <p><a href="course-details.html" className="btn btn-primary btn-sm btn-pill" style={customButtonStyle}>Ver </a></p> */}
          </div>
        </Col>
        <Col md={3} style={{ padding: 0 }}><img src={faciales} style={imgStyles} alt="Facial" /></Col>
        <Col md={3} className="orange-bg d-flex align-items-stretch justify-content-center">

          <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
            <h2></h2>
            <p>Nuestros terapeutas altamente capacitados te guiarán hacia un estado de tranquilidad total, aliviando la tensión acumulada y revitalizando tu cuerpo y mente.</p>
            {/* <p><a href="course-details.html" className="btn btn-primary btn-sm btn-pill" style={customButtonStyle}>Ver </a></p> */}
          </div>
        </Col>
        <Col md={3} style={{ padding: 0 }}><img src={unas} style={imgStyles} alt="Facial" /></Col>
      </Row>
      {/* Second row */}
      <Row>
        
      <Col md={3} style={{ padding: 0 }}><img src={peinados} style={imgStyles} alt="Facial" /></Col>
        <Col md={3} className="orange-bg d-flex align-items-stretch justify-content-center">

          <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
            <h2></h2>
            <p>Descubre el placer de cuidarte a ti mismo y regálate el regalo de un masaje que no solo aliviará tus músculos, sino que también renovará tu energía.</p>
            {/* <p><a href="course-details.html" className="btn btn-primary btn-sm btn-pill" style={customButtonStyle}>Ver </a></p> */}
          </div>
        </Col>
        <Col md={3} style={{ padding: 0 }}><img src={masajes} style={imgStyles} alt="Facial" /></Col>
        <Col md={3} className="orange-bg d-flex align-items-stretch justify-content-center">

          <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
            <h2></h2>
            <p>En nuestra clínica, la serenidad y el profesionalismo se encuentran para brindarte una experiencia transformadora.</p>
            {/* <p><a href="course-details.html" className="btn btn-primary btn-sm btn-pill" style={customButtonStyle}>Ver </a></p> */}
          </div>
        </Col>
        
      </Row>
    </Container>
  );
}

export default CuadroGrande;
