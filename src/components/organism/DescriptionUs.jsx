import React from 'react'
import img1 from '../Images/cb1.jpg'

const DescriptionUs = () => {
	const containerStyle = {
		position: 'relative',
		height: '200px', // Altura del contenedor principal
	}

	const backgroundStyle = {
		backgroundImage: `url(${img1})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100%',
		filter: 'brightness(0.5)',
	}

	const overlayStyle = {
		backgroundColor: '#ffc400aa',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
		boxSizing: 'border-box',
	}

	const textStyle = {
		width: '80%', // Ancho del texto
		height: '80%', // Altura del texto
		overflow: 'auto', // Agrega desplazamiento si el contenido es grande
		color: 'var(--color-white)', // Cambia el color del texto a negro
		textAlign: 'center', // Centra el texto
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}

	return (
		<div style={containerStyle}>
			{/* Div con imagen de fondo */}
			<div style={backgroundStyle}></div>

			{/* Div con texto y fondo naranja transparente (superpuesto) */}
			<div style={overlayStyle}>
				<div style={textStyle}>
					Nuestras instalaciones están cuidadosamente diseñadas para ofrecer una experiencia excepcional en cada visita a nuestra clínica de belleza. Cada rincón ha sido creado pensando en tu comodidad y bienestar. Desde espacios modernos y acogedores hasta
					equipos de última generación, nos aseguramos de que cada detalle contribuya a proporcionarte el ambiente perfecto para disfrutar de tratamientos y servicios que realzarán tu belleza y renovarán tu confianza.
				</div>
			</div>
		</div>
	)
}

export default DescriptionUs
