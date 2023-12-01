import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carousel from '../components/organism/Carousel'
import { CardTratamiento } from '../components/organism/CardTratamiento'; // Importa el componente
import { CardTratamientoCorporales } from '../components/organism/CardTratamiento'; // Importa el componente

const Servicios = () => {
	return (
		<div>
			<Header></Header>

			<Carousel></Carousel>

			<Heading title="Tratamientos faciales" id="faciales"></Heading>

			<CardTratamiento></CardTratamiento>

			<Heading title="Tratamientos Corporales" id="corporales"></Heading>

			<CardTratamientoCorporales></CardTratamientoCorporales>

			<Footer></Footer>
		</div>
	)
}

export default Servicios