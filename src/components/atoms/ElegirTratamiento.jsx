import React from 'react';
import ImgElegir from './ImgElegir';
import VerticalLineElegir from './VerticalLineElegir';
import ContentElegir from './ContentElegir';
import HorizontalLineElegir from './HorizontalLineElegir';
import Heading from './Heading';

function ElegirTratamiento() {
  return (
    <div className="app-container-elegir">
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Tratamiento"></ContentElegir>
            <VerticalLineElegir></VerticalLineElegir>
        </div>
        <HorizontalLineElegir></HorizontalLineElegir>
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Fecha"></ContentElegir>

            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Hora"></ContentElegir>
            
        </div>
        <HorizontalLineElegir></HorizontalLineElegir>
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Nombre"></ContentElegir>

            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Apellido"></ContentElegir>

            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Teléfono"></ContentElegir>
            
        </div>
       <HorizontalLineElegir></HorizontalLineElegir>
        <div className="container-elegir">
            <ImgElegir imageUrl="hola.png"></ImgElegir>
            <VerticalLineElegir></VerticalLineElegir>
            <ContentElegir tratamiento="Comentarios"></ContentElegir>
        </div>
       
    </div>
  );
}

export default ElegirTratamiento;