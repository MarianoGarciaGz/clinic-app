import React from 'react'
import { Link } from 'react-router-dom'

const Rechazo = () => {
	return (
		<>
			<div className="Verificacion container d-flex justify-content-center align-items-center vh-100">
				<div className="card text-center p-3">
					<div className="card-body">
						<h1 className="Verificacion-h1 mb-3">Error al Solicitar su Reserva</h1>
						<p className="Verificacion-p card-title">Por favor, intentelo de nuevo. Si el problema persiste Contactese con la Clinica de Belleza Lily.</p>
						<Link to="/" relative="path" className="btn btn-primary w-100 mt-3">
							Ir al inicio
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Rechazo
