import React from 'react'
import logo from '../Images/logo.png'

const Footer = () => {
	return (
		<footer className="Footer py-3 pt-5">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-md-4 col-lg-2 col-xl-2 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Ubicación</h6>
						<p>
							Thomas Alva Edison #335, Col. Electrisistas <br />
							Morelia, Michoacán
						</p>
					</div>
					<div className="col-md-4 col-lg-2 col-xl-2 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Horario</h6>
						<p>
							Lunes a Sábado
							<br />
							8:00 a 20:00
						</p>
					</div>
					<div className="col-md-4 col-lg-4 col-xl-4 mb-4 d-flex justify-content-center">
						<img src={logo} alt="Centered Image" className="img-fluid" style={{ width: '100px', height: '100px' }} />
					</div>
					<div className="col-md-4 col-lg-2 col-xl-2 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Teléfono</h6>
						<p>443 587 6057</p>
					</div>
					<div className="col-md-4 col-lg-2 col-xl-2 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Redes Sociales</h6>
						<a href="https://www.facebook.com/SeguridadMafer" className="my-3">
							<i className="bi bi-facebook"> </i> Facebook
						</a>
						<a href="https://www.youtube.com/@seguridadmafer3800" className="my-3">
							<i className="bi bi-instagram"> </i> Instagram
						</a>
						<a href="" className="my-3">
							<i className="bi bi-whatsapp"> </i> WhatsApp
						</a>
					</div>
				</div>
			</div>
			<div className="text-center p-2">
				<p className="mb-0">© 2023 Clínica de Belleza Lily.</p>
				<a className="text-reset fw-bold" href="/privacy.html">
					Todos los derechos reservados. Consulta nuestro Aviso de Privacidad.
				</a>
			</div>
		</footer>
	)
}

export default Footer
