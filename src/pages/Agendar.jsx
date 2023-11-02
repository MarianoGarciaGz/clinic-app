import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carrusel from '../components/atoms/Carrusel'
import ElegirTratamiento from '../components/atoms/ElegirTratamiento'
import ConfirmacionCita from '../components/atoms/ConfirmacionCita'

const Home = () => {
	return (
		<div>
			<Header></Header>

			<Carrusel></Carrusel>

			<Heading title="Reserva aqui mismo"></Heading>

			<ElegirTratamiento></ElegirTratamiento>

			<Heading title="Confirmación de la Cita"></Heading>

			<ConfirmacionCita></ConfirmacionCita>

			<Footer></Footer>
		</div>
	)
}

export default Home