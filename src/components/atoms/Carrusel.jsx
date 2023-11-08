import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carrusel extends React.Component {
  render() {
    const { img1, img2, img3 } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const containerStyle = {
      width: '100%', // Establece el ancho al 100% para ajustarse al ancho de la página
    };

    const imageStyle = {
      width: '100%', // Establece el ancho al 100% para ajustarse al ancho de la página
      height: '40rem', // Establece la altura en 10 píxeles
      objectFit: 'cover', // Evita que la imagen se corte y se ajusta al contenedor
    };

    return (
      <div style={containerStyle}>
        
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Imagen 1" style={imageStyle} />
          </div>
          <div>
            <img src={img2} alt="Imagen 2" style={imageStyle} />
          </div>
          <div>
            <img src={img3} alt="Imagen 3" style={imageStyle} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carrusel;

