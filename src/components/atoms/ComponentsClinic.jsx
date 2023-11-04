import React from 'react';
import IconoComClinic from './IconoComClinic';
import VerticalLineClinic from './VerticalLineClinic';
import TextClinic from './TextClinic';

function ComponentsClinic() {
  return (
    <div className="horizontal-layout">
      <IconoComClinic imageUrl="./assets/img/escudo.png" />
      <VerticalLineClinic />
      <TextClinic text="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel." />
      
      <IconoComClinic imageUrl="imagen2.jpg" />
      <VerticalLineClinic/>
      <TextClinic text="Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos." />
      
      <IconoComClinic imageUrl="imagen3.jpg" />
      <VerticalLineClinic/>
      <TextClinic text="Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel." />
    </div>
  );
}

export default ComponentsClinic;