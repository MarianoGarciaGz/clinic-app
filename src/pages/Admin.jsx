import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header-admin'
import Footer from '../components/layout/Footer'
import CitasCard from '../components/organism/CitasCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '.././assets/css/Calendario.css'
import Heading from '../components/atoms/Heading'

const Admin = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const [fechaString, setFechaString] = useState('');
	
	const onChange = (date) => {
		setSelectedDate(date);
		// Puedes realizar otras acciones relacionadas con el cambio de fecha aquí
	};

	useEffect(() => {
		const updatedFechaString = selectedDate ? selectedDate.toLocaleDateString('es-ES') : '';
		setFechaString(updatedFechaString);
	}, [selectedDate]);


	return (
		<>
			<Header></Header>
			<section className="d-flex justify-content-center container">
				<Calendar onChange={onChange} value={selectedDate} className="card my-5" />
			</section>
			<Heading title={'Citas del día'}></Heading>
			<Heading title={fechaString} />
			<Footer></Footer>
		</>
	)
}

export default Admin
