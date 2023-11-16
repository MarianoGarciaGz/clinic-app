import React from 'react';
import Heading from '../atoms/Heading';
import image1 from '../Images/escudo.png';
import image2 from '../Images/bienestar.png';
import image3 from '../Images/producto.png';

const About = () => {
  return (
    <section className="About">
      <Heading className="About-h2" title="¿Quiénes somos?" />
      <div className="row g-4 px-5 row-cols-1 row-cols-lg-3 m-5">
        <div className="col d-flex align-items-start px-5">
          <div className="text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
            <img className="About-img" src={image1} alt=""/>
          </div>
          <div className="vertical-line mx-3 align-self-stretch"></div>
          <div className="d-flex flex-column justify-content-start">
            <h3 className="About-h3">GARANTÍA</h3>
            <p className="About-p text-justify">
              Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel.
            </p>
          </div>
        </div>
        {/* Repite la misma estructura para los otros elementos */}
		<div className="col d-flex align-items-start px-5">
          <div className="text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
            <img className="About-img" src={image2} alt=""/>
          </div>
          <div className="vertical-line mx-3 align-self-stretch"></div>
          <div className="d-flex flex-column justify-content-start">
            <h3 className="About-h3">MISIÓN</h3>
            <p className="About-p text-justify">
			Mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos.
            </p>
          </div>
        </div>
		<div className="col d-flex align-items-start px-5">
          <div className="text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
            <img className="About-img" src={image3} alt=""/>
          </div>
          <div className="vertical-line mx-3 align-self-stretch"></div>
          <div className="d-flex flex-column justify-content-start">
            <h3 className="About-h3">CALIDAD</h3>
            <p className="About-p text-justify">
              
			Ofrecemos tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel.
            </p>
          </div>
        </div>
        {/* ... */}
      </div>
    </section>
  );
};

export default About;
