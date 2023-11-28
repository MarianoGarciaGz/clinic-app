import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/layout/Header-admin'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import SolicitudCard from '../components/organism/SolicitudCard'

const Solicitudes = () => {
	const [solicitudes, setSolicitudes] = useState([])

	useEffect(() => {
		const obtenerSolicitudes = async () => {
			try {
				// Llama a la API obtenerSolicitudes
				const response = await fetch('http://localhost:5000/api/obtenerSolicitudes', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				})

				if (response.ok) {
					const data = await response.json()
					console.log('Solicitudes obtenidas exitosamente:')
					setSolicitudes(data)
					// Realiza cualquier otra lógica después de obtener las solicitudes exitosamente
				} else {
					console.error('Error al obtener solicitudes')
					// Maneja el error de acuerdo a tus necesidades
				}
			} catch (error) {
				console.error('Error en la solicitud:', error)
				// Maneja el error de acuerdo a tus necesidades
			}
		}
		obtenerSolicitudes()
	}, []) // El segundo argumento [] significa que este efecto se ejecuta solo una vez al montar el componente

	return (
		<>
			<Header></Header>

			<Heading title="Solicitudes de cita"></Heading>

			<section className="container py-5">
				{solicitudes.map((solicitud) => (
					<SolicitudCard _id={solicitud._id} nombres={solicitud.nombres} apellidos={solicitud.apellidos} telefono={solicitud.telefono} fecha={solicitud.fecha} hora={solicitud.hora} tratamiento={solicitud.tratamiento} comentarios={solicitud.comentarios} />
				))}
			</section>

			<Footer></Footer>
		</>
	)
}

export default Solicitudes
