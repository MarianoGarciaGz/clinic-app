import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Calendar from '../components/organism/Calendar'

const Home = () => {
	return (
		<div>
			<Header></Header>

            <Calendar></Calendar>

			<Footer></Footer>
		</div>
	)
}

export default Home
