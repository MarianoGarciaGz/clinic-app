import React from 'react';
import ImgElegir from './ImgElegir';
import VerticalLineElegir from './VerticalLineElegir';
import ContentElegir from './ContentElegir';
import HorizontalLineElegir from './HorizontalLineElegir';
import Heading from './Heading';
import ContentSeleccionar from './ContentSeleccionar';

function ElegirTratamiento() {
  return (
    <div className="app-container-elegir">
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            {/* <ContentElegir concepto="Tratamiento"></ContentElegir> */}
            <ContentSeleccionar concepto="Tratamiento"></ContentSeleccionar>
            <VerticalLineElegir ></VerticalLineElegir>
        </div>
            <HorizontalLineElegir></HorizontalLineElegir>
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir concepto="Fecha"></ContentElegir>

            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir concepto="Hora"></ContentElegir>
            
        </div>
            <HorizontalLineElegir></HorizontalLineElegir>
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir concepto="Nombre"></ContentElegir>

            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir concepto="Apellido"></ContentElegir>

            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir concepto="Teléfono"></ContentElegir>
            
        </div>
            <HorizontalLineElegir></HorizontalLineElegir>
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir concepto="Comentarios"></ContentElegir>
        </div>
       
    </div>
  );
}

export default ElegirTratamiento;