import React from 'react'
import { useNavigate } from 'react-router-dom';



const SolicitudCard = ({ _id, nombres, fecha, hora, tratamiento, telefono, comentarios }) =>  {
	const history = useNavigate();
	console.log(_id);
	const handleButtonClick = async (action) => {
		try {
		  if (action === 'aceptar') {
			const endpoint = `/api/actualizarEstado/${_id}/aceptar`;
			const response = await fetch(`http://localhost:5000${endpoint}`, {
			  method: 'PUT',
			});
	  
			if (response.ok) {
			  const data = await response.json();
			  console.log('Estado actualizado:', data);
			  // Redirigir a la ruta correspondiente después de la actualización
			  history('/ruta-para-aceptar');
			} else {
			  console.error('Error al actualizar el estado', _id);
			  // Manejar el error de acuerdo a tus necesidades
			}
		  } else if (action === 'rechazar') {
			const endpoint = `/api/actualizarEstado/${_id}/rechazar`;
			const response = await fetch(`http://localhost:5000${endpoint}`, {
			  method: 'PUT',
			});
	  
			if (response.ok) {
			  const data = await response.json();
			  console.log('Estado actualizado a rechazado:', data);
			  // Redirigir a la ruta correspondiente después de la actualización
			  history('/ruta-para-rechazar');
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
					<button className="btn btn-success w-25 mx-2" onClick={() => handleButtonClick('aceptar')}>Aceptar</button>
					<button className="btn btn-danger w-25 mx-2" onClick={() => handleButtonClick('rechazar')}>Rechazar</button>
				</div>
			</form>
		</div>
	)
}

export default SolicitudCard
