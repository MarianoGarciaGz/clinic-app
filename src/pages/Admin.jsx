import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/layout/Header-admin'
import Footer from '../components/layout/Footer'
import CitasCard from '../components/organism/CitasCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '.././assets/css/Calendario.css'
import Heading from '../components/atoms/Heading'

const Admin = () => {

	//Estados
	const [selectedDate, setSelectedDate] = useState(new Date());

	const [fechaString, setFechaString] = useState('');

	const [solicitudes, setSolicitudes] = useState([]);


	//Controladores

	const onChange = (date) => {
		setSelectedDate(date);
		// Puedes realizar otras acciones relacionadas con el cambio de fecha aquí
	};

	useEffect(() => {
		const updatedFechaString = selectedDate ? selectedDate.toLocaleDateString('es-ES') : '';
		setFechaString(updatedFechaString);
	}, [selectedDate]);

	useEffect(() => {
		const obtenerSolicitudes = async () => {
			try {
				// Llama a la API obtenerSolicitudes
				const response = await fetch('http://localhost:5000/api/obtenerSolicitudesAceptadas', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (response.ok) {
					const data = await response.json();
					console.log('Solicitudes obtenidas exitosamente:');
					setSolicitudes(data);
					// Realiza cualquier otra lógica después de obtener las solicitudes exitosamente
				} else {
					console.error('Error al obtener solicitudes');
					// Maneja el error de acuerdo a tus necesidades
				}
			} catch (error) {
				console.error('Error en la solicitud:', error);
				// Maneja el error de acuerdo a tus necesidades
			}
		}; obtenerSolicitudes();
	}, []);

	return (
		<>
			<Header></Header>
			<section className="d-flex justify-content-center container">
				<Calendar onChange={onChange} value={selectedDate} className="card my-5" />
			</section>
			<Heading title={'Citas del día'}></Heading>
			<Heading title={fechaString} />
			<section className="container cards pt-5 mb-5" id="container">
			{solicitudes.map(solicitud => (
					<CitasCard
						_id={solicitud._id}
						nombres={solicitud.nombres}
						apellidos={solicitud.apellidos}
						telefono={solicitud.telefono}
						fecha={solicitud.fecha}
						hora={solicitud.hora}
						tratamiento={solicitud.tratamiento}
						comentarios={solicitud.comentarios}
					/>
				))}
			</section>
			<Footer></Footer>
		</>
	)
}

export default Admin
