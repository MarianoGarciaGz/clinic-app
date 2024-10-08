import React from 'react'
import logo from '../Images/logo.png'

const Footer = () => {
	const whatsappMessage = "Hola, estoy interesado en sus servicios. ¿Puede ayudarme?";
	const whatsappLink = `https://wa.me/4435876057?text=${encodeURIComponent(whatsappMessage)}`;
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
						<a href="https://www.facebook.com/clinicadebellezaenmorelia" target="_blank" className="my-3">
							<i className="bi bi-facebook"> </i> Facebook
						</a>
						<a href="https://www.instagram.com/clinica_de_belleza_lily/" target="_blank" className="my-3">
							<i className="bi bi-instagram"> </i> Instagram
						</a>
						<a href={whatsappLink} target="_blank" className="my-3">
							<i className="bi bi-whatsapp"> </i> WhatsApp
						</a>
					</div>
				</div>
			</div>
			<div className="text-center p-2">
				<p className="mb-0">© 2023 Clínica de Belleza Lily.</p>
			</div>
		</footer>
	)
}

export default Footer
