import React from 'react';
import IconoComClinic from './IconoComClinic';
import VerticalLineClinic from './VerticalLineClinic';
import TextClinic from './TextClinic';
import image1 from './Images/escudo.png';
import image2 from './Images/bienestar.png';
import image3 from './Images/producto.png';


function ComponentsClinic() {
  return (
    <div className="horizontal-layout">
      <IconoComClinic imageUrl={image1} />
      <VerticalLineClinic />
      <TextClinic text="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel." />
      
      <IconoComClinic imageUrl={image2} />
      <VerticalLineClinic/>
      <TextClinic text="Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos." />
      
      <IconoComClinic imageUrl={image3} />
      <VerticalLineClinic/>
      <TextClinic text="Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel." />
    </div>
  );
}

export default ComponentsClinic;