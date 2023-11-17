import React from 'react'
import telefono from '../Images/whatsapp.png'
import correo from '../Images/correo.png'
import dias from '../Images/calendario.png'
import hora from '../Images/horario.png'

const Contact = () => {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center my-4">
				{' '}
				{/* Agrega la clase my-4 para espaciado vertical */}
				<div className="col-md-3 mb-4">
					<div className="card text-center p-3">
						{/* Contenido de la primera tarjeta */}
						<img src={telefono} className="card-img-top mx-auto mt-3 img-contacto" alt="Imagen 3" />
						<hr className="my-3" />
						<div className="card-body">
							<p className="card-text">443 3873 3234</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 mb-4">
					<div className="card text-center p-3">
						{/* Contenido de la segunda tarjeta */}
						<img src={dias} className="card-img-top mx-auto mt-3 img-contacto" alt="Imagen 3" />
						<hr className="my-3" />
						<div className="card-body">
							<p className="card-text">Lunes a Sábado</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 mb-4">
					<div className="card text-center p-3">
						{/* Contenido de la segunda tarjeta */}
						<img src={hora} className="card-img-top mx-auto mt-3 img-contacto" alt="Imagen 3" />
						<hr className="my-3" />
						<div className="card-body">
							<p className="card-text">8:00 a 20:00</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 mb-4">
					<div className="card text-center p-3">
						<img src={correo} className="card-img-top mx-auto mt-3 img-contacto " alt="Imagen 3" />
						<hr className="my-3" />
						<div className="card-body">
							<p className="card-text">clinicabelleza@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
