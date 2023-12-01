
import React, { useEffect } from 'react';
import '../../assets/css/style.css';
import img from '../Images/person1.jpg';
import Swiper from 'swiper';
import 'swiper/css';

const CardTratamiento = () => {
  useEffect(() => {
    const initializeSwiper = () => {
      new Swiper('.slide-content', {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },      
      });
    };

    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.js';
    swiperScript.async = true;
    document.body.appendChild(swiperScript);

    const swiperStylesheet = document.createElement('link');
    swiperStylesheet.href = 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.css';
    swiperStylesheet.rel = 'stylesheet';
    document.head.appendChild(swiperStylesheet);

    swiperScript.onload = initializeSwiper;

    return () => {
      document.body.removeChild(swiperScript);
      document.head.removeChild(swiperStylesheet);
    };
  }, []);

  return (

    <div className='slide-container swiper'>
      <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={img} alt="" className="card-img"></img>
              </div>

            </div>
            <div className="card-content">
              <h2 className="name">David Dell</h2>
              <p className="desciption">Esto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas información</p>
              <button className="button">Reservar</button>
            </div>
          </div>
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={img} alt="" className="card-img"></img>
              </div>

            </div>
            <div className="card-content">
              <h2 className="name">David Dell</h2>
              <p className="desciption">Esto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas información</p>
              <button className="button">Reservar</button>
            </div>
          </div>
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={img} alt="" className="card-img"></img>
              </div>

            </div>
            <div className="card-content">
              <h2 className="name">David Dell</h2>
              <p className="desciption">Esto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas información</p>
              <button className="button">Reservar</button>
            </div>
          </div>
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={img} alt="" className="card-img"></img>
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">David Dell</h2>
              <p className="desciption">Esto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas informaciónEsto es una prueba no se que estoy haciendo pero funciona, jajajaja y pondre mas información</p>
              <button className="button">Reservar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-pagination"></div>

    </div>


  );
};

export default CardTratamiento;



