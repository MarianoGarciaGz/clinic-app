import React from 'react'
import faciales from '../Images/faciales.jpg';
import masajes from '../Images/masaje.jpg'
import peinados from '../Images/peinados.jpg'
import uñas from '../Images/uñas.jpg'


const CuadroGrande = () => {
  return (
    <div className="contenedor-cuadros">
      <div className="fila">
        <div className="cuadro">
          <div className="linea-horizontal"></div>
          <h2 className='parrafotit'>FACIALES</h2>
          <p className='parrafo'>Reservar</p>
        </div>
        <div className="cuadro-img">
          <img src={masajes} alt="imagen" className="imagen-cuadro" />
        </div>
      </div>
      <div className="fila">
        <div className="cuadro-img">
          <img src={faciales} alt="imagen" className="imagen-cuadro" />
        </div>
        <div className="cuadro-claro">
          <div className="linea-horizontal"></div>
          <h2 className='parrafotit'>MASAJES</h2>
          <p className='parrafo'>Reservar</p>
        </div>
      </div>
      <div className="fila">
        <div className="cuadro">
          <div className="linea-horizontal"></div>
          <h2 className='parrafotit'>PEINADOS</h2>
          <p className='parrafo'>Reservar</p>
        </div>
        <div className="cuadro-img">
          <img src={uñas} alt="imagen" className="imagen-cuadro" />
        </div>
      </div>
      <div className="fila">
        <div className="cuadro-img">
          <img src={peinados} alt="imagen" className="imagen-cuadro" />
        </div>
        <div className="cuadro-claro">
          <div className="linea-horizontal"></div>
          <h2 className='parrafotit'>UÑAS</h2>
          <p className='parrafo'>Reservar</p>
        </div>
      </div>
    </div>
  )
}


export default CuadroGrande