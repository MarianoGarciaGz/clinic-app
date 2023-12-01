import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carousel from '../components/organism/Carousel'
import Card from '../components/organism/CardTratamiento'


const Servicios = () => {
	return (
		<div>
			<Header></Header>

			<Carousel></Carousel>

			<Heading title="Tratamientos faciales" id="faciales"></Heading>

			<Card></Card>

			

			<Footer></Footer>
		</div>
	)
}

export default Servicios