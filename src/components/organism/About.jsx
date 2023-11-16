import React from 'react'
import Heading from '../atoms/Heading'
import image1 from '../Images/escudo.png'
import image2 from '../Images/bienestar.png'
import image3 from '../Images/producto.png'

const About = () => {
	return (
		<section className="About ">
			<Heading className="About-h2" title="¿Quiénes somos?"></Heading>
			<div class="row g-4 px-5 row-cols-1 row-cols-lg-3 m-5">
				<div class="col d-flex align-items-start px-5">
					<div class="text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
						<img className="About-img" src={image1} alt="" />
					</div>
					<div>
						<h3 class="About-h3">Garantia</h3>
						<p className="About-p">Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel.</p>
					</div>
				</div>
				<div class="col d-flex align-items-start px-5">
					<div class="text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
						<img className="About-img" src={image2} alt="" />
					</div>
					<div>
						<h3 class="About-h3">Mision</h3>
						<p className="About-p">Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos.</p>
					</div>
				</div>
				<div class="col d-flex align-items-start px-5">
					<div class="text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
						<img className="About-img" src={image3} alt="" />
					</div>
					<div>
						<h3 class="About-h3">Nosotros</h3>
						<p className="About-p">Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
