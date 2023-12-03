import React from 'react'

const CitasCard = ({ _id, nombres, fecha, hora, tratamiento, telefono, comentarios }) => {
	const handleButtonClick = async (action) => {
		try {
			if (action === 'rechazar') {
				const confirmation = window.confirm('¿Seguro que desea rechazar esta solicitud?')

				if (confirmation) {
					const endpoint = `/api/actualizarEstado/rechazar/${_id}`
					const response = await fetch(`http://localhost:5000${endpoint}`, {
						method: 'PUT',
					})

					if (response.ok) {
						const data = await response.json()
						console.log('Estado actualizado a rechazado:', data)
						// Redirigir a la ruta correspondiente después de la actualización
					} else {
						console.error('Error al rechazar la solicitud', _id)
					}
				} else {
					console.log('Rechazo cancelado')
				}
			} else {
				console.error('Acción no válida')
			}
		} catch (error) {
			console.error('Error en la solicitud:', error)
		}
	}

	const partesFecha = fecha.split('/')
	const diaReserva = parseInt(partesFecha[0], 10)
	const mesReserva = parseInt(partesFecha[1], 10) - 1
	const anioReserva = parseInt(partesFecha[2], 10)
	const fechaReserva = new Date(anioReserva, mesReserva, diaReserva)

	// Obtener la fecha actual
	const currentDate = new Date()
	currentDate.setHours(0, 0, 0, 0) // Establecer la hora actual a las 00:00:00

	// Comprobar si la fecha de reserva es posterior o igual al día actual
	const isFechaFutura = fechaReserva >= currentDate

	return (
		<div className="card template-card p-3 col-sm-12 col-md-6 col-lg-4 mb-3">
			<form className="card-body">
				<h2 className="solicitud-h2 py-2 text-center mb-3">{nombres}</h2>
				<p className="solicitud-p">
					<strong className="solicitud-strong"> Nombre:</strong> {nombres}
				</p>
				<p className="solicitud-p">
					<strong className="solicitud-strong"> Tratamiento:</strong> {tratamiento}
				</p>
				<p className="solicitud-p">
					<strong className="solicitud-strong"> Hora: </strong> {hora}
				</p>
				<p className="solicitud-p">
					<strong className="solicitud-strong"> Telefono:</strong> {telefono}
				</p>
				<p className="solicitud-p">
					<strong className="solicitud-strong"> Comentarios:</strong> {comentarios}
				</p>

				{isFechaFutura && (
					<button className="btn btn-danger w-100" onClick={() => handleButtonClick('rechazar')}>
						Remover
					</button>
				)}
			</form>
		</div>
	)
}

export default CitasCard
