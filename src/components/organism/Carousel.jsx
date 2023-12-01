import React from 'react'
import img1 from '../Images/carrusel1.jpg'
import img2 from '../Images/carrusel2.jpg'
import img3 from '../Images/carrusel3.jpg'
import logo from '../Images/logo.png'

const Carousel = () => {
	return (
		<div id="Carousel carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
			<div className="Carousel-imgs carousel-inner">
				<div className="Carousel-img carousel-item active">
					<img src={img1} className="d-block w-100" alt="..." />
				</div>
				<div className="Carousel-img carousel-item">
					<img src={img2} className="d-block w-100" alt="..." />
				</div>
				<div className="Carousel-img carousel-item">
					<img src={img3} className="d-block w-100" alt="..." />
				</div>
				<img src={logo} alt="logo" className="Carousel-logo" />
			</div>
		</div>
	)
}

export default Carousel
