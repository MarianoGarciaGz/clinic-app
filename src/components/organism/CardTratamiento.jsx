// CardTratamiento.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { cardsData } from '../atoms/data' // Importa la lista de tarjetas
import { cardsData2 } from '../atoms/data' // Importa la lista de tarjetas
import { cardsData3 } from '../atoms/data' // Importa la lista de tarjetas
import '../../assets/css/style.css'

export const CardTratamiento = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={40}
			loop={true}
			grabCursor={true}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			navigation={true}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				520: {
					slidesPerView: 2,
				},
				950: {
					slidesPerView: 3,
				},
			}}
			modules={[Pagination, Navigation]}
			className="mySwiper">
			{cardsData.map((card, index) => (
				<SwiperSlide key={index}>
					<div className="card swiper-slide">
						<div className="image-content">
							<span className="overlay"></span>
							<div className="card-image">
								<img src={card.image} alt="" className="card-img" />
							</div>
						</div>
						<div className="card-content">
							<h2 className="name">{card.name}</h2>
							<h3 className="precio">${card.precio}</h3>
							<p className="description" style={{ whiteSpace: 'pre-line' }}>
								{card.description}
							</p>
							<button className="btn btn-primary">Reservar</button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export const CardTratamientoCorporales = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={40}
			loop={true}
			grabCursor={true}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			navigation={true}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				520: {
					slidesPerView: 2,
				},
				950: {
					slidesPerView: 3,
				},
			}}
			modules={[Pagination, Navigation]}
			className="mySwiper">
			{cardsData2.map((card, index) => (
				<SwiperSlide key={index}>
					<div className="card swiper-slide">
						<div className="image-content">
							<span className="overlay"></span>
							<div className="card-image">
								<img src={card.image} alt="" className="card-img" />
							</div>
						</div>
						<div className="card-content">
							<h2 className="name">{card.name}</h2>
							<h3 className="precio">${card.precio}</h3>
							<p className="description" style={{ whiteSpace: 'pre-line' }}>
								{card.description}
							</p>
							<button className="btn btn-primary">Reservar</button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export const CardTratamientoEstetico = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={40}
			loop={true}
			grabCursor={true}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			navigation={true}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				520: {
					slidesPerView: 2,
				},
				950: {
					slidesPerView: 3,
				},
			}}
			modules={[Pagination, Navigation]}
			className="mySwiper">
			{cardsData3.map((card, index) => (
				<SwiperSlide key={index}>
					<div className="card swiper-slide">
						<div className="image-content">
							<span className="overlay"></span>
							<div className="card-image">
								<img src={card.image} alt="" className="card-img" />
							</div>
						</div>
						<div className="card-content">
							<h2 className="name">{card.name}</h2>
							<h3 className="precio">${card.precio}</h3>
							<p className="description" style={{ whiteSpace: 'pre-line' }}>
								{card.description}
							</p>
							<button className="btn btn-primary">Reservar</button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
