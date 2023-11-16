import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import faciales from '../Images/faciales.jpg';
import peinados from '../Images/peinados.jpg';
import unas from '../Images/uñas.jpg';
import masajes from '../Images/masaje.jpg'

const CuadroGrande = () => {
  const cuadroStyle = {
    width: '15em', // Ancho del cuadro
    height: '15em', // Alto del cuadro
    backgroundColor: 'var(--color-secondary)', // Color de fondo del primer cuadro
    padding: '10px', // Añadir un poco de espacio alrededor del contenido
  };

  const cuadroStyle2 = {
    width: '15em', // Ancho del cuadro
    height: '15em', // Alto del cuadro
    backgroundColor: 'var(--color-terciary)', // Color de fondo del primer cuadro
    padding: '10px', // Añadir un poco de espacio alrededor del contenido
  };

  const imgStyle = {
    width: '100%', // Ancho de la imagen al 100% del cuadro
    height: '100%', // Alto de la imagen al 100% del cuadro
    objectFit: 'cover', // La imagen cubre todo el cuadro
  };

  return (
    <Container className="justify-content-center align-items-center mt-4 mb-4">
      <Row className="justify-content-center align-items-center">
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle}>
          <div className="text-center position-relative">
            <hr className="my-3 mx-auto" style={{marginTop: '-12px', width:'7em' ,borderTop: '4px solid black'}} />
            <p className="my-4" style={{fontSize:'2em', color:'black'}}>Faciales</p>
          </div>
        </Col>
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle}>
          <img
            src={faciales}
            alt="Imagen"
            style={imgStyle}
          />
        </Col>
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle2}>
          <div className="text-center position-relative">
            <hr className="my-3 mx-auto" style={{marginTop: '-12px', width:'7em' ,borderTop: '4px solid #333'}} />
            <p className="my-4" style={{fontSize:'2em', color:'black'}}>Peinados</p>
          </div>
        </Col>
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle}>
          <img
            src={peinados}
            alt="Imagen"
            style={imgStyle}
          />
        </Col>
        {/* Agrega más columnas similares según sea necesario */}
      </Row>
      {/* Agrega más filas si necesitas más cuadros */}
      <Row className="justify-content-center align-items-center">
        
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle}>
          <img
            src={masajes}
            alt="Imagen"
            style={imgStyle}
          />
        </Col>
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle2}>
          <div className="text-center position-relative">
            <hr className="my-3 mx-auto" style={{marginTop: '-12px', width:'7em' ,borderTop: '4px solid #333'}} />
            <p className="my-4" style={{fontSize:'2em', color:'black'}}>Masajes</p>
          </div>
        </Col>
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle}>
          <img
            src={unas}
            alt="Imagen"
            style={imgStyle}
          />
        </Col>
        <Col xs={3} className="border p-0 d-flex justify-content-center align-items-center" style={cuadroStyle}>
          <div className="text-center position-relative">
            <hr className="my-3 mx-auto" style={{marginTop: '-12px', width:'7em' ,borderTop: '4px solid #333'}} />
            <p className="my-4" style={{fontSize:'2em', color:'black'}}>Uñas</p>
          </div>
        </Col>
        {/* Agrega más columnas similares según sea necesario */}
      </Row>
    </Container>
  );
}

export default CuadroGrande;


