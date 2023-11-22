import React from 'react'

const SolicitudCard = ({ id, cliente, fecha, hora, tratamiento, telefono, comentarios }) => {
	return (
		<div class="card template-card px-3">
			<form class="card-body">
				<div className="row my-2">
					<p className="col-sm-4">
						<strong>Cliente: </strong> {cliente}
					</p>
					<p className="col-sm-4">
						<strong>Fecha: </strong> {fecha}
					</p>
					<p className="col-sm-4">
						<strong>Hora: </strong> {hora}
					</p>
					<p className="col-sm-4">
						<strong>Tratamiento:</strong> {tratamiento}
					</p>
					<p className="col-sm-4">
						<strong>Teléfono:</strong> {telefono}
					</p>
					<p className="col-sm-4">
						<strong>Comentarios:</strong> {comentarios}
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
