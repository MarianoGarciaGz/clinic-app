import React from 'react'
import Header from '../components/layout/Header-sticky'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carrusel from '../components/organism/Carousel'
import FormReservar from '../components/organism/FormReservar'

const Home = () => {
	return (
		<>
			<Header></Header>

			<Heading title="Reserva aqui mismo"></Heading>

			<FormReservar></FormReservar>

			<Footer></Footer>
		</>
	)
}

export default Home
