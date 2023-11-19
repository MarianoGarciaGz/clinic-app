import React from 'react'
import Header from '../components/layout/Header'
import Carousel from '../components/organism/Carousel'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import CuadroGrande from '../components/atoms/CuadroGrande'
import TiposLayout from '../components/atoms/TiposLayout'
import About from '../components/organism/About'

const Home = () => {
	return (
		<>
			<Header></Header>

			<Carousel></Carousel>

			<Heading title="¿Quiénes somos?"></Heading>

			<About></About>

			<Heading title="Reserva ahora mismo, es hora de sentirse bella"></Heading>

			<CuadroGrande></CuadroGrande>

			<Heading title="Contamos con diferentes tipos de tratamiento"></Heading>

			<TiposLayout></TiposLayout>

			<Footer></Footer>
		</>
	)
}

export default Home
