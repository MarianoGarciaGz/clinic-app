import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carousel from '../components/organism/Carousel'
import { CardTratamiento } from '../components/organism/CardTratamiento'; // Importa el componente
import { CardTratamientoCorporales } from '../components/organism/CardTratamiento'; // Importa el componente
import { CardTratamientoEstetico } from '../components/organism/CardTratamiento'; // Importa el componente
import Tratamientos from '../components/organism/Tratamientos'

const Servicios = () => {
	return (
		<div>
			<Header></Header>			

			<Carousel></Carousel>

			<Tratamientos></Tratamientos>

			<Heading title="Tratamientos faciales" id="faciales"></Heading>

			<CardTratamiento></CardTratamiento>

			<Heading title="Tratamientos Corporales" id="corporales"></Heading>

			<CardTratamientoCorporales></CardTratamientoCorporales>

			<Heading title="Tratamientos Estéticos" id="corporales"></Heading>

			<CardTratamientoEstetico></CardTratamientoEstetico>

			<Footer></Footer>
		</div>
	)
}

export default Servicios