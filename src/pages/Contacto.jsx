import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Contact from '../components/organism/Contact'
import Heading from '../components/atoms/Heading'
import Carousel from '../components/organism/Carousel'
import Ubicacion from '../components/organism/Ubicacion'

const Contacto = () => {
	return (
		<div>
			<Header></Header>

			<Carousel></Carousel>

            <Heading title="AQUI TIENES NUESTRA INFORMACIÓN DE CONTACTO"></Heading>

            <Contact></Contact>

			<Heading title="UBICACIÓN DE NUESTRA CLÍNICA"></Heading>

			<Ubicacion></Ubicacion>

			<Footer></Footer>
		</div>
	)
}

export default Contacto