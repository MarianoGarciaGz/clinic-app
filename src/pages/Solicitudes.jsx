import React from 'react'
import Header from '../components/layout/Header-sticky'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import SolicitudCard from '../components/organism/SolicitudCard'

const Solicitudes = () => {
	return (
		<>
			<Header></Header>

			<Heading title="Solicitudes de cita"></Heading>

			<section className="container py-5">
				<SolicitudCard></SolicitudCard>
			</section>

			<Footer></Footer>
		</>
	)
}

export default Solicitudes
