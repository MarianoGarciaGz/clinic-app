import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carrusel from '../components/atoms/Carrusel'
import ElegirTratamiento from '../components/atoms/ElegirTratamiento'
import ConfirmacionCita from '../components/atoms/ConfirmacionCita'
import imagen1 from '../components/atoms/Images/carrusel1.jpg'
import imagen2 from '../components/atoms/Images/carrusel2.jpg'
import imagen3 from '../components/atoms/Images/carrusel3.jpg'

const Home = () => {
	return (
		<div>
			<Header></Header>

			<Carrusel img1={imagen1} img2={imagen2} img3={imagen3} ></Carrusel>

			<Heading title="Reserva aqui mismo"></Heading>

			<ElegirTratamiento></ElegirTratamiento>

			<Heading title="Confirmación de la Cita"></Heading>

			<ConfirmacionCita></ConfirmacionCita>

			<Footer></Footer>
		</div>
	)
}

export default Home