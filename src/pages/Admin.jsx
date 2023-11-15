import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CitasCard from '../components/organism/CitasCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Admin = () => {
	const [date, setDate] = useState(new Date())

	const onChange = (newDate) => {
		setDate(newDate)
		// Aquí puedes hacer lo que necesites con la nueva fecha seleccionada
	}

	return (
		<div>
			<Header></Header>

			<section className="d-flex justify-content-center container">
				<Calendar onChange={onChange} value={date} className="card mt-5" />
			</section>

			<section class="container cards pt-5 my-5" id="container">
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
				<CitasCard></CitasCard>
			</section>
			<Footer></Footer>
		</div>
	)
}

export default Admin
