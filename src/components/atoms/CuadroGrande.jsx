import React from 'react'


const CuadroGrande = () => {
	return (
        <div className="contenedor-cuadros">
      <div className="fila">
        <div className="cuadro">
          <div className="linea-horizontal"></div>
          <h2 className='parrafotit'>FACIALES</h2>
          <p className='parrafo'>Reservar</p>
        </div>
        <div className="cuadro">
          <img src="" alt="imagen" />
        </div>
      </div>
      <div className="fila">
        <div className="cuadro">
        <img src="" alt="imagen" />
        </div>
        <div className="cuadro">
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
        <div className="cuadro">
         <img src="" alt="imagen" />
        </div>
      </div>
      <div className="fila">
        <div className="cuadro">
        <img src="" alt="imagen" />
        </div>
        <div className="cuadro">
          <div className="linea-horizontal"></div>
          <h2 className='parrafotit'>UÑAS</h2>
          <p className='parrafo'>Reservar</p>
        </div>
      </div>
    </div>
	)
}

export default CuadroGrande