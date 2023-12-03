import React, { useState } from 'react'
import img1 from '../Images/cb1.jpg'
import img2 from '../Images/cb2.jpg'
import img3 from '../Images/cb3.jpg'
import img4 from '../Images/cb4.jpg'
import img5 from '../Images/cb5.jpg'
import img6 from '../Images/cb6.jpg'
import img7 from '../Images/cb7.jpg'
import img8 from '../Images/cb8.jpg'
import img9 from '../Images/cb9.jpg'
import img10 from '../Images/cb10.jpg'
import logo from '../Images/logon.png'

const Gallery = () => {
	const [filter, setFilter] = useState('all')

	const handleFilter = (filterType) => {
		setFilter(filterType)
	}

	const [paragraphs, setParagraphs] = useState({
		all: 'En nuestra clínica de belleza, fusionamos la última tecnología con la atención experta de nuestros profesionales para ofrecerte una experiencia única. Desde tratamientos faciales rejuvenecedores hasta masajes relajantes, cada servicio está diseñado para proporcionarte resultados notables y una sensación de bienestar duradera. Lo que nos distingue es nuestro compromiso con la individualidad; entendemos que cada persona es única, y adaptamos nuestros servicios para satisfacer tus necesidades específicas. Nuestra clínica es un refugio donde la belleza se encuentra con la serenidad, y donde te invitamos a descubrir tu mejor versión.',
		'sala-1':
			'En esta cabina se realizan diferentes tratamientos corporales, se utilizan equipos especializados para ofrecerles un excelente servicio, y obtener un resultado espectacular. Nuestros tratamientos corporales no solo buscan embellecer, sino también revitalizar y armonizar tu bienestar general. Desde envolventes y relajantes masajes hasta avanzados procedimientos de tonificación y revitalización de la piel, cada sesión está diseñada para proporcionarte una sensación de confort y satisfacción.',
		'sala-2':
			'En esta cabina se realizan algunos otros tratamientos corporales pero nos enfocamos mas en la presoterapia y desintoxicación. Nuestro enfoque integral utiliza esta técnica avanzada, que consiste en la aplicación de presión controlada en áreas específicas del cuerpo, estimulando así la circulación sanguínea y linfática. La presoterapia no solo contribuye a reducir la retención de líquidos y la hinchazón, sino que también favorece la eliminación de toxinas acumuladas, promoviendo una sensación de ligereza y bienestar.',
		'sala-3':
			'En esta cabina se realizan los tratamientos faciales, nuestra gama de servicios faciales está diseñada para ofrecerte una experiencia única que va más allá de la simple atención cutánea. Desde limpiezas profundas que eliminan impurezas hasta tratamientos antiedad que restauran la vitalidad de tu piel, cada sesión es una fusión de ciencia y lujo diseñada para realzar tu belleza natural. ',
		'sala-4':
			'En esta cabina se realizan diferentes masajes, nuestros masajes están diseñados para transportarte a un oasis de tranquilidad, donde el estrés y la tensión se desvanecen, y el equilibrio se restaura. Ya sea que busques aliviar la tensión muscular, reducir el estrés o simplemente regalarte un momento de puro placer, nuestros terapeutas altamente capacitados utilizan técnicas especializadas para adaptar cada sesión a tus necesidades individuales. Desde masajes relajantes hasta opciones terapéuticas más específicas.',
		'sala-5':
			'En esta cabina se realizan diferentes tratamientos de láser, nos enorgullece ofrecer tecnología de vanguardia para abordar una variedad de preocupaciones estéticas, desde la eliminación del vello no deseado hasta la corrección de imperfecciones cutáneas. Con equipos de láser de última generación, nuestros tratamientos están diseñados para proporcionarte resultados efectivos y duraderos. Experimenta la libertad de una piel suave y sin vello con nuestros tratamientos de depilación láser, o rejuvenece tu piel eliminando manchas y líneas finas.',
		'sala-6':
			'En este salón se realizan diferentes aplicaciones o procedimientos de pies, manos, rostro y cabello, ofrecemos servicios excepcionales para realzar tu belleza. Desde maquillaje y peinados personalizados hasta uñas impecables con Gelish, nuestro equipo experto te garantiza un look espectacular. Además, perfeccionamos tu mirada con tratamientos especializados para cejas y pestañas, destacando tus rasgos naturales de manera única.',
	})

	const images = [
		{ category: 'sala-1', src: img1, alt: 'img' },
		{ category: 'sala-2', src: img2, alt: 'img' },
		{ category: 'sala-3', src: img3, alt: 'img' },
		{ category: 'sala-4', src: img4, alt: 'img' },
		{ category: 'sala-5', src: img5, alt: 'img' },
		{ category: 'sala-1', src: img6, alt: 'img' },
		{ category: 'sala-2', src: img7, alt: 'img' },
		{ category: 'sala-3', src: img8, alt: 'img' },
		{ category: 'sala-4', src: img9, alt: 'img' },
		{ category: 'sala-5', src: img10, alt: 'img' },
	]

	const paragraphStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		borderTop: '2px solid var(--color-secondary)', // Borde superior de color naranja
		borderBottom: '2px solid var(--color-secondary)', // Borde inferior de color naranja
		paddingTop: '10px', // Espacio superior
		paddingBottom: '10px', // Espacio inferior
	}

	const paragraphContentStyle = {
		maxWidth: '90%',
		margin: '0',
		textAlign: 'center', // Centrar el texto
	}

	return (
		<div className="container py-4">
			<ul className="nav nav-pills justify-content-center mb-4">
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 mb-2 ${filter === 'all' ? 'btn-active' : ''}`} onClick={() => handleFilter('all')}>
						Clínica
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 mb-2 ${filter === 'sala-1' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-1')}>
						Tratamientos Corporales
					</button>
				</li>
				{/* Agrega más botones para otras categorías */}
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 mb-2 ${filter === 'sala-2' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-2')}>
						Presoterapia y Desintoxicación
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 mb-2 ${filter === 'sala-3' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-3')}>
						Cabina de Faciales
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 mb-2 ${filter === 'sala-4' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-4')}>
						Cabina de Masajes
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 mb-2 ${filter === 'sala-5' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-5')}>
						Cabina de Láser
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'sala-6' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-6')}>
						Salón Rosita
					</button>
				</li>
			</ul>

			{/* Agregamos el párrafo dinámico aquí */}
			<div className="text-center mb-4">
				<div style={paragraphStyle}>
					<p style={paragraphContentStyle}>{paragraphs[filter]}</p>
				</div>
			</div>

			<div className="row">
				{images
					.filter((image) => filter === 'all' || image.category === filter)
					.map((image, index) => (
						<div className="col-md-4 mb-3" key={index}>
							<a href={image.src} data-lightbox="gallery" data-title={image.alt}>
								<img src={image.src} alt={image.alt} className="img-fluid" />
							</a>
						</div>
					))}
			</div>
		</div>
	)
}

export default Gallery
