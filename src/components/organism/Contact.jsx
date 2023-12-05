import React from 'react'
import telefono from '../Images/whatsapp.png'
import correo from '../Images/correo.png'
import dias from '../Images/calendario.png'
import hora from '../Images/horario.png'

const Contact = () => {
	const circleStyle = {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '80px',
		height: '80px',
		borderRadius: '50%',
		backgroundColor: 'var(--color-secondary)',

		marginTop: '20px',
		marginBottom: '20px',
	}

	const iconStyle = {
		width: '50%',
		height: 'auto',
	}

	const textStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}

	const textContentStyle = {
		marginLeft: '10px', // Ajusta el espacio entre el círculo y el texto
	}

	

	return (
		<div className="container my-5">
			<div className="block-quick-info-2-inner">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
						<div className="d-flex quick-info-2">
							<div style={circleStyle}>
								<img src={telefono} alt="Location Icon" style={iconStyle} />
							</div>
							<div className="text" style={textStyle}>
								<div style={textContentStyle}>
									<strong className="d-block heading" style={{color:'var(--color-secondary)', fontSize:'22px'}}>
										Teléfono
									</strong>
									<span className="excerpt" style={{fontSize:'20px'}}>443 3873 2934</span>
								</div>
							</div>
						</div>
					</div>
					{/* Resto de las columnas con imágenes */}
					<div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
						<div className="d-flex quick-info-2">
							<div style={circleStyle}>
								<img src={dias} alt="Location Icon" style={iconStyle} />
							</div>
							<div className="text" style={textStyle}>
								<div style={textContentStyle}>
									<strong className="d-block heading" style={{color:'var(--color-secondary)', fontSize:'22px'}}>
										Días
									</strong>
									<span className="excerpt" style={{fontSize:'20px'}}>Lunes a Sábado</span>
								</div>
							</div>
						</div>
					</div>
					{/* Resto de las columnas con imágenes */}
					<div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
						<div className="d-flex quick-info-2">
							<div style={circleStyle}>
								<img src={hora} alt="Location Icon" style={iconStyle} />
							</div>
							<div className="text" style={textStyle}>
								<div style={textContentStyle}>
									<strong className="d-block heading" style={{color:'var(--color-secondary)', fontSize:'22px'}}>
										Horario
									</strong>
									<span className="excerpt" style={{fontSize:'20px'}}>8:00 a 19:00 hrs</span>
								</div>
							</div>
						</div>
					</div>
					{/* Resto de las columnas con imágenes */}
					<div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
						<div className="d-flex quick-info-2">
							<div style={circleStyle}>
								<img src={correo} alt="Location Icon" style={iconStyle} />
							</div>
							<div className="text" style={textStyle}>
								<div style={textContentStyle}>
									<strong className="d-block heading" style={{color:'var(--color-secondary)', fontSize:'22px'}}>
										Correo
									</strong>
									<span className="excerpt" style={{fontSize:'20px'}}>clinicabelleza@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
					{/* Resto de las columnas con imágenes */}
					{/* Resto de las columnas con imágenes */}
				</div>
			</div>
		</div>
	)
}

export default Contact
