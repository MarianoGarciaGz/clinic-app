import React from 'react'

const TargetTipos = ({titulo,descripccion})  => {
	return (
	    <div className="contenedor-tartip">
            <h2 className='tittarget'>{titulo}</h2>
            <p className='parrafotarget'>{descripccion}</p>
            <img className="imgtarget" src="url_de_la_imagen.jpg" alt="icono" />
        </div>
	)
}

export default TargetTipos