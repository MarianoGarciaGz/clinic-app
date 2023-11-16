import React from 'react';
import ImgElegir from './ImgElegir';
import VerticalLineElegir from './VerticalLineElegir';
import ContentConfirmacion from './ContentConfirmacion';
import confirmacion from './Images/confirmacion.png'

function ConfirmacionCita({}) {
  return (
    <div className="app-container-elegir">
    <div className="container-elegir">
        <ImgElegir imageUrl={confirmacion}></ImgElegir>
        <VerticalLineElegir></VerticalLineElegir>
        <ContentConfirmacion concepto="Confirmacion"></ContentConfirmacion>
        <VerticalLineElegir></VerticalLineElegir>
    </div>
    
</div>
  );
}

export default ConfirmacionCita;