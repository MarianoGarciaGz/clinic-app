import React from 'react';
import ImgElegir from './ImgElegir';
import VerticalLineElegir from './VerticalLineElegir';
import ContentElegir from './ContentElegir';

function ConfirmacionCita({}) {
  return (
    <div className="app-container-elegir">
    <div className="container-elegir">
        <ImgElegir imageUrl="hola.png"></ImgElegir>
        <VerticalLineElegir></VerticalLineElegir>
        <ContentElegir tratamiento="Confirmacion"></ContentElegir>
        <VerticalLineElegir></VerticalLineElegir>
    </div>
</div>
  );
}

export default ConfirmacionCita;