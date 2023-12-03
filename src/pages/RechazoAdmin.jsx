import React from 'react'
import { Link } from 'react-router-dom'

const Rechazo = () => {
	return (
		<>
			<div className="Verificacion container d-flex justify-content-center align-items-center vh-100">
				<div className="card text-center p-3">
					<div className="card-body">
						<h1 className="Verificacion-h1 mb-3">Error al Reservar</h1>
						<p className="Verificacion-p card-title">Error al Ingresar Reserva, Revise Datos y Disponibilidad del Día.</p>
						<Link to="/admin" relative="path" className="btn btn-primary w-100 mt-3">
							Ir al inicio
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Rechazo
