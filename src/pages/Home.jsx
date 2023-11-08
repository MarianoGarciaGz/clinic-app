import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import CuadroGrande from '../components/atoms/CuadroGrande'
import Carrusel from '../components/atoms/Carrusel'
import ComponentsClinic from '../components/atoms/ComponentsClinic'
import TiposLayout from '../components/atoms/TiposLayout'
import imagen1 from '../components/atoms/Images/carrusel1.jpg'
import imagen2 from '../components/atoms/Images/carrusel2.jpg'
import imagen3 from '../components/atoms/Images/carrusel3.jpg'

const Home = () => {
	return (
		<div>
			<Header></Header>

			<Carrusel img1={imagen1} img2={imagen2} img3={imagen3}></Carrusel>

			<ComponentsClinic></ComponentsClinic>

			<Heading title="Reserva ahora mismo, es hora de sentirse bella"></Heading>

			<CuadroGrande></CuadroGrande>

			<Heading title="Contamos con diferentes tipos de tratamiento"></Heading>

			<TiposLayout></TiposLayout>

			<Footer></Footer>
		</div>
	)
}

export default Home
