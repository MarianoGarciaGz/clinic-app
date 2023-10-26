import React from 'react'
// import miImagen from './images/escudo.png';


const NotasPagPrincipal = ({texto}) => {
	return (
		<div className='contenedorespagprin'>
            <img src="escudo.png" alt="icono" className="icono" />
            <div className="linea-vertical"></div>
            <p className="parrafo">{texto}</p>
        </div>
	)
}

export default NotasPagPrincipal