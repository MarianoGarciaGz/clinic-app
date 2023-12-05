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

			<Heading title="Visita nuestros tipos de tratamientos" id="corporales"></Heading>

			<Tratamientos></Tratamientos>

			<section id="tf" className="py-5">
				<Heading title="Tratamientos faciales" id="faciales"></Heading>
				<div className=" px-5">
					<CardTratamiento></CardTratamiento>
				</div>
			</section>
			<section id="tc" className="pt-5 pb-1">
				<Heading title="Tratamientos Corporales" id="corporales"></Heading>
				<div className=" px-5">
					<CardTratamientoCorporales></CardTratamientoCorporales>
				</div>
			</section>
			<section id="te" className="py-5">
				<Heading title="Tratamientos Estéticos" id="corporales"></Heading>
				<div className=" px-5">
					<CardTratamientoEstetico></CardTratamientoEstetico>
				</div>
			</section>

			<Footer></Footer>
		</div>
	)
}

export default Servicios
