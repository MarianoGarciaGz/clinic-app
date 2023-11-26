import React from 'react'

const CitasCard = ({ _id, nombres, fecha, hora, tratamiento, telefono, comentarios }) => {
	
	const handleButtonClick = async (action) => {
		try {
		  if (action === 'rechazar') {
			const endpoint = `/api/actualizarEstado/${_id}/rechazar`;
			const response = await fetch(`http://localhost:5000${endpoint}`, {
			  method: 'PUT',
			});
	  
			if (response.ok) {
			  const data = await response.json();
			  console.log('Estado actualizado a rechazado:', data);
			  // Redirigir a la ruta correspondiente después de la actualización
			  
			} else {
			  console.error('Error al rechazar la solicitud', _id);
			  // Manejar el error de acuerdo a tus necesidades
			}
		  } else {
			console.error('Acción no válida');
			// Manejar el error de acción no válida
		  }
		} catch (error) {
		  console.error('Error en la solicitud:', error);
		  // Manejar el error de acuerdo a tus necesidades
		}
	  };
	return (
		<div className="card template-card">
			<div className="card-body">
				<p>
					<strong> Nombre:</strong> {nombres}
				</p>
				<p>
					<strong> Tratamiento:</strong>  {tratamiento}
				</p>
				<p>
					<strong> Hora: </strong> {hora}
				</p>
				<p>
					<strong> Telefono:</strong> {telefono}
				</p>
				<p>
					<strong> Comentarios:</strong> {comentarios}
				</p>
				
				<button className="btn btn-danger w-25 mx-2" onClick={() => handleButtonClick('rechazar')}>Rechazar</button>
			</div>
		</div>
	)
}

export default CitasCard
