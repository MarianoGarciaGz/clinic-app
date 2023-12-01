import React from 'react'
import Header from '../components/layout/Header-sticky'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carrusel from '../components/organism/Carousel'
import FormReservar from '../components/organism/FormReservarAdmin'

const AgendarAdmin = () => {
	return (
		<>
			<Header></Header>
			<Carrusel></Carrusel>
			<Heading title="Formulario para el administrador"></Heading>

			<FormReservar></FormReservar>

			<Footer></Footer>
		</>
	)
}

export default AgendarAdmin
