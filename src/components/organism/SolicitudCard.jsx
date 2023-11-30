import React from 'react'

const SolicitudCard = ({ _id, nombres, fecha, hora, tratamiento, telefono, comentarios }) => {


	const handleButtonClickAceptar = async () => {
		try {

			const endpoint = `/api/actualizarEstado/aceptar/${_id}`;
			const response = await fetch(`http://localhost:5000${endpoint}`, {
				method: 'PUT',
			});

			if (response.ok) {
				const data = await response.json();
				console.log('Estado actualizado:', data);
			} else {
				console.error('Error al actualizar el estado', _id);
				// Manejar el error de acuerdo a tus necesidades
			}

		} catch (error) {
			console.error('Error en la solicitud Aceptar:', error);
			// Manejar el error de acuerdo a tus necesidades
		}
	};

	const handleButtonClickRechazar = async () => {
		try {
			const confirmation = window.confirm("¿Seguro que desea rechazar esta solicitud?");
	
			if (confirmation) {
				const endpoint = `/api/actualizarEstado/rechazar/${_id}`;
				const response = await fetch(`http://localhost:5000${endpoint}`, {
					method: 'PUT',
				});
	
				if (response.ok) {
					const data = await response.json();
					console.log('Estado actualizado a rechazado:', data);
				} else {
					console.error('Error al rechazar la solicitud', _id);
					// Manejar el error de acuerdo a tus necesidades
				}
			} else {
				console.log('Rechazo cancelado');
				// Puedes hacer algo si el rechazo es cancelado
			}
		} catch (error) {
			console.error('Error en la solicitud Rechazar:', error);
			// Manejar el error de acuerdo a tus necesidades
		}
	}

	return (
		<div className="card template-card px-3">
			<form className="card-body">
				<div className="row my-2">

					<p className="col-sm-4">
						<strong>Cliente: </strong> {nombres}
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
					<button className="btn btn-success w-25 mx-2" onClick={() => handleButtonClickAceptar()}>Aceptar</button>
					<button className="btn btn-danger w-25 mx-2" onClick={() => handleButtonClickRechazar()}>Rechazar</button>
				</div>
			</form>
		</div>
	)
}

export default SolicitudCard
