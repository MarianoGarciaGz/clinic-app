import React, { useState } from 'react'
import Header from '../components/layout/Header-sticky'
import Footer from '../components/layout/Footer'
import CitasCard from '../components/organism/CitasCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '.././assets/css/Calendario.css'
import Heading from '../components/atoms/Heading'

const Admin = () => {
	const [date, setDate] = useState(new Date())

	const onChange = (newDate) => {
		setDate(newDate)
		// Aquí puedes hacer lo que necesites con la nueva fecha seleccionada
	}

	return (
		<>
			<Header></Header>
			<section className="d-flex justify-content-center container">
				<Calendar onChange={onChange} value={date} className="card my-5" />
			</section>
			<Heading title={'Citas del día'}></Heading>
			<section class="container cards pt-5 mb-5" id="container">
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
			</section>
			<Footer></Footer>
		</>
	)
}

export default Admin
