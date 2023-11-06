import React from 'react'
import Navlink from '../atoms/Navlink'

const Footer = () => {
	return (
		<footer class="Footer -center text-lg-start">
			<div class="d-flex justify-content-center p-3 border-bottom">
				<a href="https://www.facebook.com/SeguridadMafer" class="mx-3">
					<i class="bi bi-facebook"></i>
				</a>
				<a href="https://www.youtube.com/@seguridadmafer3800" class="mx-3">
					<i class="bi bi-youtube"></i>
				</a>
				<a href="" class="mx-3">
					<i class="bi bi-whatsapp"></i>
				</a>
			</div>

			<section class="">
				<div class="container text-center text-md-start mt-5">
					<div class="row mt-3">
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 class="text-uppercase fw-bold">Company name</h6>
							<hr class="mb-4 mt-0 d-inline-block mx-auto" />
							<p>
								Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
								amet, consectetur adipisicing elit.
							</p>
						</div>
						<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 class="text-uppercase fw-bold">Products</h6>
							<hr class="mb-4 mt-0 d-inline-block mx-auto" />
							<p>
								<a href="#!" class="">
									MDBootstrap
								</a>
							</p>
							<p>
								<a href="#!" class="">
									MDWordPress
								</a>
							</p>
							<p>
								<a href="#!" class="">
									BrandFlow
								</a>
							</p>
							<p>
								<a href="#!" class="">
									Bootstrap Angular
								</a>
							</p>
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
							<a
								href="https://goo.gl/maps/twiGS85aafvF8adc8"
								target="_blank"
								className="btn btn-primary px-4 me-md-2">
								Como llegar
							</a>
						</div>
					</div>
				</div>
			</section>
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
