import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import NotasPagPrincipal  from '../components/atoms/NotasPagPrincipal'
import CuadroGrande from '../components/atoms/CuadroGrande'
import TargetTipos from '../components/atoms/TargetTipos'
import TargetTipos2 from '../components/atoms/TargetTipos2'
import Carrusel from '../components/atoms/Carrusel'
import HorizontalLayout from '../components/atoms/HorizontalLaypout'
import TiposLayout from '../components/atoms/TiposLayout'

const Home = () => {
	return (
		<div>
			<Header></Header>

			<Carrusel></Carrusel>

			<HorizontalLayout></HorizontalLayout>

			<Heading title="Reserva ahora mismo, es hora de sentirse bella"></Heading>

			<CuadroGrande></CuadroGrande>
			
			<Heading title="Contamos con diferentes tipos de tratamiento"></Heading>
            
			<TargetTipos titulo="TRATAMIENTOS FACIALES" descripccion="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></TargetTipos>
			<TargetTipos2 titulo="TRATAMIENTOS CORPORALES" descripccion="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></TargetTipos2>
			<TargetTipos titulo="TRATAMIENTOS ESTÉTICOS" descripccion="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></TargetTipos>

			<TiposLayout></TiposLayout>

			<Footer></Footer>
		</div>
	)
}

export default Home
