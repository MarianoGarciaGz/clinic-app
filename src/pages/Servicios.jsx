import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carousel from '../components/organism/Carousel'
import { CardTratamiento } from '../components/organism/CardTratamiento' // Importa el componente
import { CardTratamientoCorporales } from '../components/organism/CardTratamiento' // Importa el componente
import { CardTratamientoEstetico } from '../components/organism/CardTratamiento' // Importa el componente
import Tratamientos from '../components/organism/Tratamientos'

const Servicios = () => {
	return (
		<div>
			<Header></Header>

			<Carousel></Carousel>

			<Tratamientos></Tratamientos>

			<section className="my-5">
				<Heading title="Tratamientos faciales" id="faciales"></Heading>

				<CardTratamiento></CardTratamiento>
			</section>
			<section className="my-5">
				<Heading title="Tratamientos Corporales" id="corporales"></Heading>

				<CardTratamientoCorporales></CardTratamientoCorporales>
			</section>
			<section className="my-5">
				<Heading title="Tratamientos Estéticos" id="corporales"></Heading>

				<CardTratamientoEstetico></CardTratamientoEstetico>
			</section>

			<Footer></Footer>
		</div>
	)
}

export default Servicios
