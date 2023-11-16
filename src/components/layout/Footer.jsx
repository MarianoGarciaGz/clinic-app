import React from 'react'

const Footer = () => {
	return (
		<footer class="Footer -center text-lg-start py-3">
			<div class="container text-center text-md-start mt-5">
				<div class="row mt-3">
					<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Ubicación</h6>
						<p>
							Thomas Alva Edison #335, Col. Electrisistas <br></br>
							Morelia, Michoacán
						</p>
						<p>443 312 44 73</p>
						<h6 className="fw-bold">Horario</h6>
						<p>
							Lunes a Viernes: 9:00 am - 6:00 pm <br></br>
							Sabado: 9:00 am - 2:00 pm
						</p>
						<a href="https://goo.gl/maps/twiGS85aafvF8adc8" target="_blank" className="btn btn-secondary px-4 me-md-2">
							Como llegar
						</a>
					</div>
					<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
						<h6 class="text-uppercase fw-bold">Useful links</h6>
						<hr class="mb-4 mt-0 d-inline-block mx-auto" />
						<p>
							<a href="#!" class="">
								Your Account
							</a>
						</p>
						<p>
							<a href="#!" class="">
								Become an Affiliate
							</a>
						</p>
						<p>
							<a href="#!" class="">
								Shipping Rates
							</a>
						</p>
						<p>
							<a href="#!" class="">
								Help
							</a>
						</p>
					</div>
					<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-0">
						<a href="https://www.facebook.com/SeguridadMafer" class="my-5">
							<i class="bi bi-facebook"> </i>Facebook
						</a>
						<a href="https://www.youtube.com/@seguridadmafer3800" class="my-5">
							<i class="bi bi-instagram"> </i>
							Instagram
						</a>
						<a href="" class="my-5">
							<i class="bi bi-whatsapp"> </i>
							WhatsApp
						</a>
					</div>
				</div>
			</div>
			<div className="text-center p-4">
				<p className="mb-0">© 2023 Clínica de Belleza Lily.</p>
				<a className="text-reset fw-bold" href="/privacy.html">
					Todos los derechos reservados. Consulta nuestro Aviso de Privacidad.
				</a>
			</div>
		</footer>
	)
}

export default Footer
