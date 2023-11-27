import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Aceptacion = () => {
	return (
		<>
			<div className="Verificacion container d-flex justify-content-center align-items-center vh-100">
				<div className="card text-center p-3">
					<div className="card-body">
						<h1 className="Verificacion-h1 mb-3">Su recervación se ha enviado</h1>
						<p className="Verificacion-p card-title">Nuestro equipo se pondrá al contacto con usted, muchas gracias por su elección.</p>
						<Link to="/" relative="path" className="btn btn-primary w-100 mt-3">
							Ir al inicio
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Aceptacion
