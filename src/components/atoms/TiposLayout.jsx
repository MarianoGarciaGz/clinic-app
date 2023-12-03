import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../Images/feliz.png'
import image2 from '../Images/tratamientos.png'
import image3 from '../Images/tecnologia.png'
import image4 from '../Images/experiencia.png'
import TitleTipos from './TitleTipos'

function TiposLayout() {
	const counterStyles = {
		textAlign: 'center',
		color: 'var(--color-black)',
		// ... Otros estilos
	}

	const centerContentStyles = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
	}

	const columnStyles = {
		marginRigth: '20rem', // Espacio entre filas
	}

	const animateNumbers = () => {
		const numbers = document.querySelectorAll('.number')
		numbers.forEach((number) => {
			const target = +number.getAttribute('data-number')
			let count = 0
			const updateCount = () => {
				const increment = target / 100
				count += increment
				if (count < target) {
					number.innerText = Math.ceil(count)
					setTimeout(updateCount, 15)
				} else {
					number.innerText = target.toLocaleString() // Formatea el número con separadores de miles
				}
			}
			updateCount()
		})
	}

	useEffect(() => {
		animateNumbers()
	}, [])

	return (
		<Container className="my-5 py-5">
			<Row>
				<Col Col md={3} className="d-flex align-items-stretch justify-content-center">
					<div className="block-18 text-center" style={counterStyles}>
						<div className="text" style={centerContentStyles}>
							<div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '120px', height: '120px', marginBottom: '5px' }}>
								<img src={image1} alt="Image 1" style={{ maxWidth: '50%', maxHeight: '50%' }} />
							</div>
							<TitleTipos title="Tenemos más de " />
							<strong className="number" data-number="3000" style={{ fontSize: '2em', color: 'black' }}>
								0
							</strong>
							<TitleTipos title="Clientes Satisfechos " />
						</div>
					</div>
				</Col>
				{/* Repite el mismo formato para las otras imágenes */}
				<Col Col md={3} className="d-flex align-items-stretch justify-content-center">
					<div className="block-18 text-center" style={counterStyles}>
						<div className="text" style={centerContentStyles}>
							<div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '120px', height: '120px', marginBottom: '5px' }}>
								<img src={image2} alt="Image 1" style={{ maxWidth: '50%', maxHeight: '50%' }} />
							</div>
							<TitleTipos title="Contamos con más de" />
							<strong className="number" data-number="1000" style={{ fontSize: '2em', color: 'black' }}>
								0
							</strong>
							<TitleTipos title="Productos de calidad" />
						</div>
					</div>
				</Col>
				<Col Col md={3} className="d-flex align-items-stretch justify-content-center">
					<div className="block-18 text-center" style={counterStyles}>
						<div className="text" style={centerContentStyles}>
							<div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '120px', height: '120px', marginBottom: '5px' }}>
								<img src={image3} alt="Image 1" style={{ maxWidth: '50%', maxHeight: '50%' }} />
							</div>
							<TitleTipos title="Contamos con más de" />
							<strong className="number" data-number="200" style={{ fontSize: '2em', color: 'black' }}>
								0
							</strong>
							<TitleTipos title="Equipos especializados" />
						</div>
					</div>
				</Col>
				<Col Col md={3} className="d-flex align-items-stretch justify-content-center">
					<div className="block-18 text-center" style={counterStyles}>
						<div className="text" style={centerContentStyles}>
							<div className="circle" style={{ backgroundColor: '#ffa04d', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '120px', height: '120px', marginBottom: '5px' }}>
								<img src={image4} alt="Image 1" style={{ maxWidth: '50%', maxHeight: '50%' }} />
							</div>
							<TitleTipos title="Tenemos más de " />
							<strong className="number" data-number="20" style={{ fontSize: '2em', color: 'black' }}>
								0
							</strong>
							<TitleTipos title="Años de experiencia " />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default TiposLayout
