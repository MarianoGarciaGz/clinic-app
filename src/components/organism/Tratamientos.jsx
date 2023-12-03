import React from 'react'
import Facial from '../Images/Faciales/Facial.png'
import Corporal from '../Images/Corporal.png'
import Estetico from '../Images/Estetico.jpg'

const Tratamientos = () => {
	const rightContentStyle = {
		backgroundColor: 'rgb(230, 218, 248)',
		padding: '20px',
		height: '40vh',
		margin: '0',
		color: 'var(--color-white)',
	}

	const leftContentStyle = {
		backgroundColor: 'rgb(230, 218, 248)',
		padding: '20px',
		height: '40vh',
		margin: '0',
		color: 'var(--color-white)',
	}

	const leftImageStyle = {
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: '40vh',
		paddingRight: '0',
	}

	const rightImageStyle = {
		backgroundImage: `url(${Facial})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: '100%',
		paddingRight: '0',
	}

	const mainContainerStyle = {
		marginLeft: '40px',
		marginRight: '40px',
	}

	return (
		<div className="mt-5" style={mainContainerStyle}>
			<div className="row m-0">
				{/* Why Choose Us Content */}
				<div className="tratamiendo-bg shadow-2 col-lg-6 order-lg-2 order-1 mb-4" style={rightContentStyle}>
					<div className="why_content">
						<div className="section_title_container">
							<div className="section_title">
								<h1 className="display-5">TRATAMIENTOS FACIALES</h1>
							</div>
						</div>
						<div className="why_text">
							<p>
								La piel es el órgano más grande del cuerpo humano. En el caso de la piel del rostro, se encuentra expuesta continuamente a factores ambientales que causan su deterioro: la contaminación de la ciudad, la luz solar, los cambios de temperatura. A
								esto se suman otras causas como el tabaco, una mala alimentación, el estrés o la falta de sueño. Para combatirlos se usan los denominados tratamientos faciales que ayudan a mejorar tanto la salud como la apariencia.
							</p>
						</div>
						{/* Agregado el botón */}
						<div className="text-center mt-5">
							<a href="#tf" className="servicios-btn btn btn-primary btn-lg mt-auto">
								Ver tratamientos
							</a>
						</div>
					</div>
				</div>

				{/* Why Choose Us Image */}
				<div className="col-lg-6 order-lg-1 order-2 p-0 mb-4">
					<div className="why_image_container" style={{ ...leftImageStyle, backgroundImage: `url(${Facial})` }}></div>
				</div>
			</div>

			<div className="row m-0">
				{/* Why Choose Us Content */}
				<div className="tratamiendo-bg shadow-2 col-lg-6 order-lg-1 order-2 mb-4" style={leftContentStyle}>
					<div className="why_content">
						<div className="section_title">
							<h1 className="display-5">TRATAMIENTOS CORPORALES</h1>
						</div>
						<div className="why_text">
							<p>
								Los tratamientos corporales son diferentes métodos de tratamiento mediante los cuales ya sea de forma individual o combinada podemos mejorar el estado general de la apariencia de nuestro cuerpo, dándole un mejor aspecto y ganando de esta forma
								autoestima y calidad de vida.
							</p>
							<p>Generalmente se opta por esta opción para mejorar la silueta o tratar los problemas de celulitis, adiposidad localizada y flacidez, aunque también son la mejor manera de liberar al cuerpo del estrés.</p>
						</div>
						{/* Agregado el botón */}
						<div className="text-center mt-5">
							<a href="#tc" className="servicios-btn btn btn-primary btn-lg mt-auto">
								Ver tratamientos
							</a>
						</div>
					</div>
				</div>
				{/* Why Choose Us Image */}
				<div className="col-lg-6 order-lg-1 order-2 p-0">
					<div className="why_image_container" style={{ ...leftImageStyle, backgroundImage: `url(${Corporal})` }}></div>
				</div>
			</div>
			<div className="row m-0">
				{/* Why Choose Us Content */}
				<div className="tratamiendo-bg shadow-2 col-lg-6 order-lg-2 order-1 mb-4" style={rightContentStyle}>
					<div className="why_content">
						<div className="section_title_container">
							<div className="section_title">
								<h1 className="display-5">TRATAMIENTOS ESTÉTICOS</h1>
							</div>
						</div>
						<div className="why_text">
							<p>
								La piel es el órgano más grande del cuerpo humano. En el caso de la piel del rostro, se encuentra expuesta continuamente a factores ambientales que causan su deterioro: la contaminación de la ciudad, la luz solar, los cambios de temperatura. A
								esto se suman otras causas como el tabaco, una mala alimentación, el estrés o la falta de sueño. Para combatirlos se usan los denominados tratamientos faciales que ayudan a mejorar tanto la salud como la apariencia.
							</p>
						</div>
						{/* Agregado el botón */}
						<div className="text-center mt-5">
							<a href="#te" className="servicios-btn btn btn-primary btn-lg mt-auto">
								Ver tratamientos
							</a>
						</div>
					</div>
				</div>

				{/* Why Choose Us Image */}
				<div className="col-lg-6 order-lg-1 order-2 p-0 mb-4">
					<div className="why_image_container" style={{ ...leftImageStyle, backgroundImage: `url(${Estetico})` }}></div>
				</div>
			</div>
		</div>
	)
}

export default Tratamientos
