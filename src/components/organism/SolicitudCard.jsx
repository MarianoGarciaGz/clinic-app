import React from 'react'

const SolicitudCard = () => {
	return (
		<div class="card template-card px-3">
			<div class="card-body">
				<div className="row my-2">
					<p className="col-sm-4">
						<strong>Cliente: </strong>
					</p>
					<p className="col-sm-4">
						<strong>Fecha: </strong>
					</p>
					<p className="col-sm-4">
						<strong>Hora: </strong>
					</p>
					<p className="col-sm-4">
						<strong>Tratamiento:</strong>
					</p>
					<p className="col-sm-4">
						<strong>Teléfono:</strong>
					</p>
					<p className="col-sm-4">
						<strong>Comentarios:</strong>
					</p>
				</div>
				<div className="text-center">
					<button className="btn btn-success w-25 mx-2">Aceptar</button>
					<button className="btn btn-danger w-25 mx-2">Rechazar</button>
				</div>
			</div>
		</div>
	)
}

export default SolicitudCard
