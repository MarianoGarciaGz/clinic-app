import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/layout/Header-admin'
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

				{/* ejemplo */}
				<div className="solicitud card template-card my-3 px-3">
					<form className="card-body">
						<div className="row my-2">
							<h2 className="solicitud-h2 py-2 text-center mb-3">Mariano Ismael García Guzmán</h2>
							<p className="solicitud-p col-sm-12 col-md-6 col-lg-4 ">
								<strong className="solicitud-strong">
									Cliente: <br />{' '}
								</strong>{' '}
								Mariano Ismael García Guzmán{/* {nombres} */}
							</p>
							<p className="solicitud-p col-sm-12 col-md-6 col-lg-4 ">
								<strong className="solicitud-strong">
									Fecha: <br />{' '}
								</strong>{' '}
								14/21/23 {/* {fecha} */}
							</p>
							<p className="solicitud-p col-sm-12 col-md-6 col-lg-4 ">
								<strong className="solicitud-strong">
									Hora: <br />{' '}
								</strong>{' '}
								12:00{/* {hora} */}
							</p>
							<p className="solicitud-p col-sm-12 col-md-6 col-lg-4 ">
								<strong className="solicitud-strong">
									Tratamiento:
									<br />{' '}
								</strong>{' '}
								Masaje corporal{/* {tratamiento} */}
							</p>
							<p className="solicitud-p col-sm-12 col-md-6 col-lg-4 ">
								<strong className="solicitud-strong">
									Teléfono:
									<br />{' '}
								</strong>{' '}
								443412945{/* {telefono} */}
							</p>
							<p className="solicitud-p col-sm-12 col-md-12">
								<strong className="solicitud-strong">
									Comentarios:
									<br />{' '}
								</strong>{' '}
								{/* {comentarios} */}
							</p>
						</div>
						<div className="text-center">
							<button className="btn btn-success w-25 mx-2">Aceptar</button>
							<button className="btn btn-danger w-25 mx-2">Rechazar</button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}

export default Solicitudes
