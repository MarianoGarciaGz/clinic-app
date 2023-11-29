import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carousel from '../components/organism/Carousel'
import Gallery from '../components/organism/GalleryClinic'
import Text from '../components/organism/DescriptionUs'
import Empleados from '../components/organism/CardSlider'


const Nosotros = () => {
	return (
		<div>
			<Header></Header>

			<Carousel></Carousel>

            <Heading title="CONOCE NUESTRAS INSTALACIONES"></Heading>

            <Text></Text>

            <Gallery></Gallery>

            

			<Footer></Footer>
		</div>
	)
}

export default Nosotros