import React from 'react'
import Heading from '../atoms/Heading'
import image1 from '../Images/escudo.png'
import image2 from '../Images/bienestar.png'
import image3 from '../Images/producto.png'

const About = () => {
	return (
		<section className="About text-center py-5">
			<div class="row">
				<div class="col-lg-4 col-md-12 px-5">
					<img className="About-img m-auto" src={image1} alt="" />
					<h3 class="About-h3 hyphens-none mt-3">Garantia</h3>
					<p className="About-p hyphens-none">Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel.</p>
				</div>
				<div class="col-lg-4 col-md-12 px-5">
					<img className="About-img m-auto" src={image2} alt="" />
					<h3 class="About-h3 hyphens-none mt-3">Mision</h3>
					<p className="About-p hyphens-none">Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos.</p>
				</div>
				<div class="col-lg-4 col-md-12 px-5">
					<img className="About-img m-auto" src={image3} alt="" />
					<h3 class="About-h3 hyphens-none mt-3">Nosotros</h3>
					<p className="About-p hyphens-none">Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel.</p>
				</div>
			</div>
		</section>
	)
}

export default About
