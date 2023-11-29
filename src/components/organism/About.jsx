import React from 'react';
import image1 from '../Images/escudo.png';
import image2 from '../Images/bienestar.png';
import image3 from '../Images/producto.png';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={4} className="mb-5 mt-5 mr-10 ml-10 justify-content-center">
          <div className="circle-container text-center mb-2">
            <div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '80px', height: '80px', marginBottom: '5px' }}>
              <img src={image1} alt="Image 1" style={{ maxWidth: '70%', maxHeight: '70%' }} />
            </div>
          </div>
          <div className="services ftco-animate fadeInUp ftco-animated">
            <div className="text mt-2">
              <h3 style={{ fontFamily: 'var(--font-default)', color: '#ffa04d', marginBottom: '5px' }}>
                Garantía
              </h3>
              <p style={{ fontFamily: 'var(--font-default)', color: 'var(--color-black)', marginTop: '0', textAlign: 'justify' }}>
                Es una de las mejores opciones, te ofrecemos la mejor garantía. Nuestro compromiso se centra en brindarte una experiencia integral, usando las últimas tecnologías para un resultado excepcional.
              </p>
            </div>
          </div>
        </Col>
        {/* Otras columnas similares */}
        <Col md={4} className="mb-5 mt-5 mr-10 ml-10">
          <div className="circle-container text-center mb-2">
            <div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '80px', height: '80px', marginBottom: '5px' }}>
              <img src={image2} alt="Image 1" style={{ maxWidth: '70%', maxHeight: '70%' }} />
            </div>
          </div>
          <div className="services ftco-animate fadeInUp ftco-animated">
            <div className="text mt-2">
              <h3 style={{ fontFamily: 'var(--font-default)', color: '#ffa04d', marginBottom: '5px' }}>
                Misión
              </h3>
              <p style={{ fontFamily: 'var(--font-default)', color: 'var(--color-black)', marginTop: '0', textAlign: 'justify' }}>
                Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos.
              </p>
            </div>
          </div>
        </Col>
        {/* Otras columnas similares */}
        <Col md={4} className="mb-5 mt-5 mr-10 ml-10">
          <div className="circle-container text-center mb-2">
            <div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '80px', height: '80px', marginBottom: '5px' }}>
              <img src={image3} alt="Image 1" style={{ maxWidth: '70%', maxHeight: '70%' }} />
            </div>
          </div>
          <div className="services ftco-animate fadeInUp ftco-animated">
            <div className="text mt-2">
              <h3 style={{ fontFamily: 'var(--font-default)', color: '#ffa04d', marginBottom: '5px' }}>
                Nosotros
              </h3>
              <p style={{ fontFamily: 'var(--font-default)', color: 'var(--color-black)', marginTop: '0', textAlign: 'justify' }}>
                Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la más alta calidad, servicio y resultados además te ofrecemos productos para mejorar la calidad del cuidado de tu piel.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
