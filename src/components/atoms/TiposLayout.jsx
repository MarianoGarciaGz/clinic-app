import React from 'react';
import IconoTipos from './IconoTipos';
import TitleTipos from './TitleTipos';
import TextTipos from './TextTipos';

function TiposLayout() {
  return (
    <div className="tipos-layout">
      <div className="tipos-container">
        <IconoTipos imageUrl="imagen1.jpg" />
        <TitleTipos title="TRATAMIENTOS FACIALES" />
        <TextTipos text="Los procedimientos faciales son muy apreciados por aquellos que desean obtener una piel saludable y juvenil. Representan una alternativa rápida, segura y efectiva para revitalizar y revitalizar la apariencia facial, logrando una imagen hermosa y radiante, además de promover la salud cutánea." />
      </div>

      <div className="tipos-container">
        <TitleTipos title="TRATAMIENTOS CORPORALES" />
        <TextTipos text=" Los tratamientos corporales representan diversos enfoques terapéuticos que, tanto de manera individual como en combinación, permiten realzar la apariencia corporal, promoviendo así una mayor autoestima y calidad de vida." />
        <IconoTipos imageUrl="imagen2.jpg" />
      </div>

      <div className="tipos-container">
        <IconoTipos imageUrl="imagen3.jpg" />
        <TitleTipos title="TRATAMIENTOS ESTÉTICOS" />
        <TextTipos text="
Los procedimientos estéticos desempeñan un papel fundamental al eliminar imperfecciones menores y al significativamente mejorar la apariencia de nuestro rostro y otras áreas del cuerpo. Este efecto positivo resulta en un aumento de la confianza y la autoestima." />
      </div>
    </div>
  );
}

export default TiposLayout;
