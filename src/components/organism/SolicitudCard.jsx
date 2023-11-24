import React from 'react'
import { useNavigate } from 'react-router-dom';

const SolicitudCard = ({ id, nombres, fecha, hora, tratamiento, telefono, comentarios }) => {
	const history = useNavigate();
	const handleButtonClick = (action) => {
		
		// Aquí puedes redirigir a la ruta correspondiente basada en el valor de 'action'
		if (action === 'aceptar') {
		   // Redirigir a la ruta para aceptar
		   history('/ruta-para-aceptar');
		} else if (action === 'rechazar') {
		   // Redirigir a la ruta para rechazar
		   history('/ruta-para-rechazar');
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
