import React from 'react';
import IconoComponent from './IconoComponent';
import TitleComponent from './TitleComponent';
import TextTipos from './TextTipos';

function TiposLayout() {
  return (
    <div className="horizontaltipos-layout">
      <div className="contenttipos-container">
        <IconoComponent imageUrl="imagen1.jpg" />
        <TitleComponent title="Título 1" />
        <TextTipos text="Texto 1" />
      </div>

      <div className="contenttipos-container">
        <TitleComponent title="Título 2" />
        <TextTipos text="Texto 2" />
        <IconoComponent imageUrl="imagen2.jpg" />
      </div>

      <div className="contenttipos-container">
        <IconoComponent imageUrl="imagen3.jpg" />
        <TitleComponent title="Título 3" />
        <TextTipos text="Texto 3" />
      </div>
    </div>
  );
}

export default TiposLayout;
