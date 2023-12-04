import React from 'react'
import Header from '../components/layout/Header'
import Carousel from '../components/organism/Carousel'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import CuadroGrande from '../components/atoms/CuadroGrande'
import TiposLayout from '../components/atoms/TiposLayout'
import About from '../components/organism/About'
import Slogan from '../components/organism/Slogan'
import WhyChooseUs from '../components/organism/WhyChooseUs'

const Home = () => {
	return (
		<>
			<Header></Header>

			<Carousel></Carousel>

			<Heading title="El camino hacia tu mejor versión comienza aquí. Únete a nosotros para un viaje de transformación"></Heading>

			<TiposLayout></TiposLayout>

			<Heading title="Enamórate, de cuidarte"></Heading>

			<Slogan></Slogan>

			<WhyChooseUs></WhyChooseUs>

			<About></About>

			<Heading title="No te detengas hasta que te sientas orgullosa"></Heading>

			<CuadroGrande></CuadroGrande>

			<Footer></Footer>
		</>
	)
}

export default Home
