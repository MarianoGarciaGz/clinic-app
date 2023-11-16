import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carrusel from '../components/organism/Carousel'
import FormReservar from '../components/organism/FormReservar'

const Home = () => {
	return (
		<div>
			<Header></Header>

			<Carrusel></Carrusel>

			<Heading title="Reserva aqui mismo"></Heading>

			<FormReservar></FormReservar>

			<Footer></Footer>
		</div>
	)
}

export default Home