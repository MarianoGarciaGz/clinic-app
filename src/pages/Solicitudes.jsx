import React from 'react'
import Header from '../components/layout/Header-admin'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import SolicitudCard from '../components/organism/SolicitudCard'

const Solicitudes = () => {
	const solicitudData = {
		cliente: 'Juan Perez',
		fecha: '2023-11-20',
		hora: '15:00',
		tratamiento: 'Tratamiento X',
		telefono: '123-456-7890',
		comentarios: 'Comentarios adicionales',
	}

	return (
		<>
			<Header></Header>

			<Heading title="Solicitudes de cita"></Heading>

			<section className="container py-5">
				<SolicitudCard {...solicitudData} />
				<SolicitudCard {...solicitudData} />
				<SolicitudCard {...solicitudData} />
			</section>

			<Footer></Footer>
		</>
	)
}

export default Solicitudes
