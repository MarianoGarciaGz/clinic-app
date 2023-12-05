import React, { useEffect, useRef } from 'react';
import img1 from '../Images/O1.jpg';
import img2 from '../Images/O3.jpg';
import img3 from '../Images/O6.jpg';
import logo from '../Images/logo-letters.png';

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 2000, // Cambio cada 2 segundos (2000 milisegundos)
      ride: 'carousel', // Hace que el carrusel continúe al llegar al final
      wrap: true // Vuelve al inicio después de llegar al final
    });

    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <div
      id="Carousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000" // Intervalo de cambio de imágenes: 2 segundos
      ref={carouselRef}
    >
      <div className="carousel-inner shadow-2" style={{ position: 'relative', maxHeight: '700px' }}>
        
        
        
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="Imagen 2" style={{ maxHeight: '700px' }} />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '700px' }} />
        </div>
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Imagen 3" style={{ maxHeight: '700px' }} />
        </div>
       
        <div className="Carousel-logo-container">
          <img src={logo} alt="Logo" className="Carousel-logo" style={{ height: '20em', width:'42em', backgroundColor: 'rgba(46, 187, 205, 0.5)' }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;







