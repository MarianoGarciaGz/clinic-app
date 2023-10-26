import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import NotasPagPrincipal  from '../components/atoms/NotasPagPrincipal'
import CuadroGrande from '../components/atoms/CuadroGrande'
import TargetTipos from '../components/atoms/TargetTipos'
import TargetTipos2 from '../components/atoms/TargetTipos2'

const Home = () => {
	return (
		<div>
			<Header></Header>

			<section></section>

			<NotasPagPrincipal texto="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></NotasPagPrincipal>
			<NotasPagPrincipal texto="Nuestra misión es mejorar el bienestar de nuestros clientes con servicios de la más alta calidad. Nuestros especialistas están altamente calificados en cada uno de los tratamientos que ofrecemos."></NotasPagPrincipal>
			<NotasPagPrincipal texto="Somos una de las mejores compañías en ofrecer tratamientos faciales y corporales, de la mas alta calidad, servicio y resultados además te ofrecemos productos de la mejorar la calidad del cuidado de tu piel."></NotasPagPrincipal>

			<Heading title="Reserva ahora mismo, es hora de sentirse bella"></Heading>

			<CuadroGrande></CuadroGrande>
			
			<Heading title="Contamos con diferentes tipos de tratamiento"></Heading>
            
			<TargetTipos titulo="TRATAMIENTOS FACIALES" descripccion="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></TargetTipos>
			<TargetTipos2 titulo="TRATAMIENTOS CORPORALES" descripccion="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></TargetTipos2>
			<TargetTipos titulo="TRATAMIENTOS ESTÉTICOS" descripccion="Es una de las mejores opciones en tratamientos faciales, corporales y depilación, además te ofrecemos productos de la mejor calidad para el cuidado de tu piel."></TargetTipos>

			<Footer></Footer>
		</div>
	)
}

export default Home
