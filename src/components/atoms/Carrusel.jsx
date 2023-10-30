import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carrusel extends React.Component {
    render() {
      const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Hace que el carrusel sea infinito
        speed: 500, // Velocidad de transición (en milisegundos)
        autoplay: true, // Habilita la reproducción automática
        autoplaySpeed: 3000, // Intervalo entre transiciones automáticas (en milisegundos)
        slidesToShow: 1, // Cantidad de elementos a mostrar a la vez
        slidesToScroll: 1 // Cantidad de elementos a desplazar en cada transición
      };
  
      return (
        <div>
          <h2>Carrusel Automático</h2>
          <Slider {...settings}>
            <div>
              <img src="imagen1.jpg" alt="Imagen 1" />
            </div>
            <div>
              <img src="imagen2.jpg" alt="Imagen 2" />
            </div>
            <div>
              <img src="imagen3.jpg" alt="Imagen 3" />
            </div>
          </Slider>
        </div>
      );
    }
  }
  
  export default Carrusel;