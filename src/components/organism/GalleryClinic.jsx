import React, { useState } from 'react'

/* FOTOS CABINA CORPORALES 2*/ 
import img1 from '../Images/C1.jpg'
import img2 from '../Images/C2.jpg'
import img3 from '../Images/C3.jpg'
import img4 from '../Images/C4.jpg'
import img5 from '../Images/C5.jpg'
import img6 from '../Images/C6.jpg'
import img7 from '../Images/C7.jpg'
import img8 from '../Images/C8.jpg'
import img9 from '../Images/C9.jpg'
import img10 from '../Images/C10.jpg'

/* FOTOS CABINA FACIALES*/ 
import img11 from '../Images/F1.jpg'
import img12 from '../Images/F2.jpg'
import img13 from '../Images/F3.jpg'
import img14 from '../Images/F4.jpg'
import img15 from '../Images/F5.jpg'
import img16 from '../Images/F6.jpg'
import img17 from '../Images/F7.jpg'
import img18 from '../Images/F8.jpg'
import img19 from '../Images/F9.jpg'
import img20 from '../Images/F10.jpg'

/* FOTOS CABINA LASER*/ 
import img21 from '../Images/L1.jpg'
import img22 from '../Images/L2.jpg'
import img23 from '../Images/L3.jpg'
import img24 from '../Images/L4.jpg'
import img25 from '../Images/L5.jpg'
import img26 from '../Images/L6.jpg'
import img27 from '../Images/L7.jpg'
import img28 from '../Images/L8.jpg'
import img29 from '../Images/L9.jpg'

/* FOTOS CABINA MASAJES*/ 
import img30 from '../Images/M1.jpg'
import img31 from '../Images/M2.jpg'
import img32 from '../Images/M3.jpg'
import img33 from '../Images/M4.jpg'
import img34 from '../Images/M5.jpg'
import img35 from '../Images/M6.jpg'
import img36 from '../Images/M7.jpg'
import img37 from '../Images/M8.jpg'
import img38 from '../Images/M9.jpg'
import img39 from '../Images/M10.jpg'

/*FOTOS SALON ROSITA*/
import img40 from '../Images/SR1.jpg'
import img41 from '../Images/SR2.jpg'
import img42 from '../Images/SR3.jpg'
import img43 from '../Images/SR4.jpg'
import img44 from '../Images/SR5.jpg'
import img45 from '../Images/SR6.jpg'
import img46 from '../Images/SR7.jpg'
import img47 from '../Images/SR8.jpg'
import img48 from '../Images/SR9.jpg'
import img49 from '../Images/SR10.jpg'
import img50 from '../Images/SR11.jpg'
import img51 from '../Images/SR12.jpg'

/*FOTOTS CORPORALES 1*/
import img52 from '../Images/TC1.jpg'
import img53 from '../Images/TC2.jpg'
import img54 from '../Images/TC3.jpg'
import img55 from '../Images/TC4.jpg'
import img56 from '../Images/TC5.jpg'
import img57 from '../Images/TC6.jpg'
import img58 from '../Images/TC7.jpg'
import img59 from '../Images/TC8.jpg'
import img60 from '../Images/TC9.jpg'




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
		/*CABINA TRATAMIENTOS CORPORALES*/
		{ category: 'sala-1', src: img52, alt: 'img' },
		{ category: 'sala-1', src: img54, alt: 'img' },
		{ category: 'sala-1', src: img55, alt: 'img' },
		{ category: 'sala-1', src: img56, alt: 'img' },
		{ category: 'sala-1', src: img59, alt: 'img' },
		{ category: 'sala-1', src: img60, alt: 'img' },
		{ category: 'sala-1', src: img53, alt: 'img' },
		{ category: 'sala-1', src: img57, alt: 'img' },
		{ category: 'sala-1', src: img58, alt: 'img' },
		
		/*CABINA TRATAMIENTOS CORPORALES*/
		{ category: 'sala-2', src: img2, alt: 'img' },
		{ category: 'sala-2', src: img10, alt: 'img' },
		{ category: 'sala-2', src: img8, alt: 'img' },
		{ category: 'sala-2', src: img9, alt: 'img' },
		{ category: 'sala-2', src: img1, alt: 'img' },
		{ category: 'sala-2', src: img6, alt: 'img' },
		{ category: 'sala-2', src: img7, alt: 'img' },
		{ category: 'sala-2', src: img4, alt: 'img' },
		{ category: 'sala-2', src: img9, alt: 'img' },
		
		
		/*CABINA FACIALES*/
		{ category: 'sala-3', src: img11, alt: 'img' },
		{ category: 'sala-3', src: img12, alt: 'img' },
		{ category: 'sala-3', src: img13, alt: 'img' },
		{ category: 'sala-3', src: img14, alt: 'img' },
		{ category: 'sala-3', src: img15, alt: 'img' },
		{ category: 'sala-3', src: img16, alt: 'img' },
		{ category: 'sala-3', src: img17, alt: 'img' },
		{ category: 'sala-3', src: img18, alt: 'img' },
		{ category: 'sala-3', src: img19, alt: 'img' },

		/*CABINA DE MASAJES*/
		{ category: 'sala-4', src: img30, alt: 'img' },
		{ category: 'sala-4', src: img32, alt: 'img' },
		{ category: 'sala-4', src: img33, alt: 'img' },
		{ category: 'sala-4', src: img34, alt: 'img' },
		{ category: 'sala-4', src: img35, alt: 'img' },
		{ category: 'sala-4', src: img36, alt: 'img' },
		{ category: 'sala-4', src: img37, alt: 'img' },
		{ category: 'sala-4', src: img38, alt: 'img' },
		{ category: 'sala-4', src: img39, alt: 'img' },

		/*CABINA DE LASER*/	
		{ category: 'sala-5', src: img22, alt: 'img' },
		{ category: 'sala-5', src: img28, alt: 'img' },
		{ category: 'sala-5', src: img23, alt: 'img' },
		{ category: 'sala-5', src: img24, alt: 'img' },
		{ category: 'sala-5', src: img25, alt: 'img' },
		{ category: 'sala-5', src: img26, alt: 'img' },
		{ category: 'sala-5', src: img21, alt: 'img' },
		{ category: 'sala-5', src: img29, alt: 'img' },
		{ category: 'sala-5', src: img21, alt: 'img' },

		/*SALON ROSTITA*/
		{ category: 'sala-6', src: img40, alt: 'img' },
		{ category: 'sala-6', src: img44, alt: 'img' },
		{ category: 'sala-6', src: img49, alt: 'img' },
		{ category: 'sala-6', src: img41, alt: 'img' },
		{ category: 'sala-6', src: img45, alt: 'img' },
		{ category: 'sala-6', src: img43, alt: 'img' },
		{ category: 'sala-6', src: img42, alt: 'img' },
		{ category: 'sala-6', src: img46, alt: 'img' },
		{ category: 'sala-6', src: img47, alt: 'img' },
		{ category: 'sala-6', src: img48, alt: 'img' },
		{ category: 'sala-6', src: img50, alt: 'img' },
		{ category: 'sala-6', src: img43, alt: 'img' },
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
