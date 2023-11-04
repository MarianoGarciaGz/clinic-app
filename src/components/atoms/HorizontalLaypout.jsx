import React from 'react';
import ImageComponent from './ImageComponent';
import VerticalLineComponent from './VerticalLineComponent';
import TextComponent from './TextComponent';

function HorizontalLayout() {
  return (
    <div className="horizontal-layout">
      <ImageComponent imageUrl="imagen1.jpg" />
      <VerticalLineComponent />
      <TextComponent text="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel." />
      
      <ImageComponent imageUrl="imagen2.jpg" />
      <VerticalLineComponent />
      <TextComponent text="Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos." />
      
      <ImageComponent imageUrl="imagen3.jpg" />
      <VerticalLineComponent />
      <TextComponent text="Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel." />
    </div>
  );
}

export default HorizontalLayout;