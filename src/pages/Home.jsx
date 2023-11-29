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

			<Heading title="Clínica de Belleza Lily"></Heading>

			<TiposLayout></TiposLayout>

			<Heading title="El camino hacia tu mejor versión comienza aquí. Únete a nosotros para un viaje de transformación."></Heading>

			<Slogan></Slogan>

			<WhyChooseUs></WhyChooseUs>

			<Heading title="Haz que tu belleza brille. Visita nuestra clínica y descubre cómo podemos realzar tu encanto natural."></Heading>

			<About></About>

			<Heading title="La elegancia se encuentra en los detalles. Descubre la diferencia en nuestra clínica, donde cada detalle cuenta."></Heading>

			<CuadroGrande></CuadroGrande>


			<Footer></Footer>
		</>
	)
}

export default Home
