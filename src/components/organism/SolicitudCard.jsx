import React from 'react'

const SolicitudCard = ({ id, cliente, fecha, hora, tratamiento, telefono, comentarios }) => {
	return (
		<div class="solicitud card template-card my-3 px-3">
			<form class="card-body">
				<div className="row my-2">
					<h2 className="solicitud-h2 py-2 text-center mb-3">Información de la solicitud</h2>
					<p className="solicitud-p col-sm-4">
						<strong className="solicitud-strong">Cliente: </strong> {cliente}
					</p>
					<p className="solicitud-p col-sm-4">
						<strong className="solicitud-strong">Fecha: </strong> {fecha}
					</p>
					<p className="solicitud-p col-sm-4">
						<strong className="solicitud-strong">Hora: </strong> {hora}
					</p>
					<p className="solicitud-p col-sm-4">
						<strong className="solicitud-strong">Tratamiento:</strong> {tratamiento}
					</p>
					<p className="solicitud-p col-sm-4">
						<strong className="solicitud-strong">Teléfono:</strong> {telefono}
					</p>
					<p className="solicitud-p col-sm-4">
						<strong className="solicitud-strong">Comentarios:</strong> {comentarios}
					</p>
				</div>
				<div className="text-center">
					<button className="btn btn-success w-25 mx-2">Aceptar</button>
					<button className="btn btn-danger w-25 mx-2">Rechazar</button>
				</div>
			</form>
		</div>
	)
}

export default SolicitudCard
