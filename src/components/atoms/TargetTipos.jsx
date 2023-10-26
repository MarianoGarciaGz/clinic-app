import React from 'react'

const TargetTipos = ({titulo,descripccion})  => {
	return (
	    <div className="contenedor-tartip">
            <img className="imgtarget" src="url_de_la_imagen.jpg" alt="icono" />
            <h2 className='tittarget'>{titulo}</h2>
            <p className='parrafotarget'>{descripccion}</p>
        </div>
	)
}

export default TargetTipos