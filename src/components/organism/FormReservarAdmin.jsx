import React from 'react'
import usuario from '../Images/usuario.png'
import { cardsData, cardsData2, cardsData3 } from '../atoms/data';
import fecha from '../Images/fecha.png'
import hora from '../Images/hora.png'
import tratamiento from '../Images/tratamiento.png'
import comentarios from '../Images/comentarios.png'
import correo from '../Images/correo.png'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import telefono from '../Images/telefono.png'
import { useNavigate } from 'react-router-dom';

const FormReservar = () => {
	// Obtén la fecha actual
	const currentDate = new Date()
	// Suma x días a la fecha actual (en este caso, x sería 7 días)
	const maxDate = new Date(currentDate)
	maxDate.setDate(currentDate.getDate() + 7)

	const [formSubmitted, setFormSubmitted] = useState(false);

	//Estados
	const [telefonoError, setTelefonoError] = useState(false)
	const [nombresError, setNombresError] = useState(false)
	const [apellidosError, setApellidosError] = useState(false)
	const [emailError, setEmailError] = useState('')

	const [selectedDate, setSelectedDate] = useState(null)
	const [horaSeleccionada, setHoraSeleccionada] = useState(false)
	const [tratamientoSeleccionado, setTratamientoSeleccionado] = useState(false)
	const [horaTouched, setHoraTouched] = useState(false);
	const [tratamientoTouched, setTratamientoTouched] = useState(false);

	const [formValid, setFormValid] = useState(false)
	const [formData, setFormData] = useState({
		nombres: '',
		apellidos: '',
		telefono: '',
		fecha: '',
		hora: '',
		email: '',
		tratamiento: '',
		comentarios: '',
		estado: '',
	})


	const navigate = useNavigate();


	useEffect(() => {
		const fechaString = selectedDate ? selectedDate.toLocaleDateString('es-ES') : ''

		setFormData({
			...formData,
			fecha: fechaString,
		})

		if (
			formData.nombres !== '' &&
			formData.apellidos !== '' &&
			formData.telefono !== '' &&
			emailError == '' &&
			!telefonoError &&
			!nombresError &&
			!apellidosError &&
			selectedDate !== ''
			// Agrega otras validaciones necesarias aquí
		) {
			if (horaSeleccionada && tratamientoSeleccionado) {
				setFormValid(true) // Habilita el botón si los campos están completos y no hay errores
			} else {
				setFormValid(false) // Deshabilita el botón si falta seleccionar hora o tratamiento
			}
		} else {
			setFormValid(false) // Deshabilita el botón si algún campo está vacío o hay errores
		}
	})

	//Manejadores de Estados
	const handleChangeDate = (date) => {
		setSelectedDate(date)
	}

	const handleChange = (e) => {
		switch (e.target.id) {
			case "telefono":
				const regexTel = /^[0-9]*$/
				if (regexTel.test(e.target.value) || e.target.value === '') {
					if (e.target.value.length == 10) {
						handleChangeGeneral(e)
						setTelefonoError(false)
					} else {
						setTelefonoError(true)
					}
				} else {
					setTelefonoError(true)
				}
				break;
			case 'apellidos':
			case 'nombres':
				const regexNomApe = /^[A-Za-zÁÉÍÓÚÜáéíóúü\s]+$/
				if (regexNomApe.test(e.target.value) || e.target.value === '') {
					handleChangeGeneral(e)
					setTelefonoError(false)
					setNombresError(false)
					setApellidosError(false)
				} else {
					if (e.target.id === 'apellidos') {
						setApellidosError(true)
						setNombresError(false)
						setTelefonoError(false)
					} else if (e.target.id === 'nombres') {
						setNombresError(true)
						setApellidosError(false)
						setTelefonoError(false)
					}
				}
				break;
			case 'email':
				handleChangeGeneral(e)

				// Validar el formato del correo electrónico usando una expresión regular
				const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
				const isValidEmail = emailRegex.test(e.target.value);

				setEmailError(isValidEmail ? '' : 'Ingresa un correo electrónico válido');

				break;
			case 'fecha':
			case 'comentarios':
				handleChangeGeneral(e)
				break;
			case 'hora':
				handleChangeGeneral(e)
				setHoraSeleccionada(e.target.value !== '') // Actualiza el estado si se selecciona una hora
				setHoraTouched(true);
				break;
			case 'tratamiento':
				handleChangeGeneral(e)
				setTratamientoSeleccionado(e.target.value !== '') // Actualiza el estado si se selecciona un tratamiento
				setTratamientoTouched(true);
				break;
		}
	}

	const handleChangeGeneral = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormSubmitted(true);

		try {
			// Enviar el correo con el código de verificación
			const responseInsert = await fetch('http://localhost:5000/api/insertarDatosAdmin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					estado: 'aceptado',
					email: 'Indefinido'
				}),
			});

			if (responseInsert.ok) {
				console.log('Datos insertados exitosamente desde Admin');

				navigate('/aceptarAdmin');
			} else {
				console.error('Error al insertar datos');
				navigate('/rechazoAdmin');
			}
		} catch (error) {
			console.error('Error en la solicitud:', error);
			// Manejar el error general según tus necesidades
		}
	};


	return (
		<div className="container mt-4 mb-4">
			<div className="row justify-content-center ">
				<div className="col-md-7 col-lg-8">
					<form className="needs-validation" noValidate onSubmit={handleSubmit}>
						<div className="row g-3">
							<div className="col-sm-4">
								<label htmlFor="nombres" className="form-label">
									Nombre(s)
								</label>
								<div className="input-group has-validation">
									{/* ... */}
									<input type="text" className={`form-control custom-border-color-orange ${nombresError ? 'is-invalid' : ''}`} id="nombres" placeholder="Nombre(s)" required="" onChange={handleChange} />
									{nombresError && <div className="invalid-feedback">Ingresa un nombre válido.</div>}
								</div>
							</div>

							<div className="col-sm-4">
								<label htmlFor="apellidos" className="form-label">
									Apellidos
								</label>
								<div className="input-group has-validation">
									{/* ... */}
									<input type="text" className={`form-control custom-border-color-orange ${apellidosError ? 'is-invalid' : ''}`} id="apellidos" placeholder="Apellidos" required="" onChange={handleChange} />
									{apellidosError && <div className="invalid-feedback">Ingresa un apellido válido.</div>}
								</div>
							</div>

							<div className="col-sm-4">
								<label htmlFor="telefono" className="form-label">
									Teléfono
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text custom-border-color-orange">
										<img src={telefono} alt="telefono" className="img-form" />
									</span>
									<input type="text" className={`form-control custom-border-color-orange ${telefonoError ? 'is-invalid' : ''}`} id="telefono" placeholder="Teléfono" required="" onChange={handleChange} />
									{telefonoError && <div className="invalid-feedback">Ingresa un teléfono válido.</div>}
								</div>
							</div>

							<div className="col-sm-6">
								<label htmlFor="username" className="form-label">
									Fecha
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange">
										<img src={fecha} alt="fecha" className="img-form" />
									</span>
									<DatePicker
										selected={selectedDate}
										onChange={handleChangeDate}
										className="form-select bg-white custom-border-color-orange"
										id="fecha"
										placeholderText="Seleccionar..."
										dateFormat="dd/MM/yy"
										required
										maxDate={maxDate}
										minDate={new Date(Date.now())}
									/>
									<div className="invalid-feedback">Selecciona una fecha válida.</div>
								</div>
							</div>

							<div className="col-sm-6">
								<label htmlFor="username" className="form-label">
									Hora
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange">
										<img src={hora} alt="hora" className="img-form" />
									</span>
									<select
										className={`form-select bg-white custom-border-color-orange ${horaSeleccionada ? '' : (horaTouched ? 'is-invalid' : '')}`} id="hora"
										required
										onChange={handleChange}
										value={formData.hora}>
										<option value="" disabled={!horaTouched}>Seleccionar...</option>
										<option>08:00</option>
										<option>09:00</option>
										<option>10:00</option>
										<option>11:00</option>
										<option>12:00</option>
										<option>13:00</option>
										<option>14:00</option>
										<option>15:00</option>
										<option>16:00</option>
										<option>17:00</option>
										<option>18:00</option>
										<option>19:00</option>
									</select>
									{horaTouched && formData.hora === '' && (
										<div className="invalid-feedback">Selecciona una hora válida.</div>
									)}
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="username" className="form-label">
									Tratamiento
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange">
										<img src={tratamiento} alt="tratamiento" className="img-form" />
									</span>
									<select
										className={`form-select bg-white custom-border-color-orange ${tratamientoSeleccionado ? '' : (tratamientoTouched ? 'is-invalid' : '')}`}
										id="tratamiento"
										required onChange={handleChange}
										value={formData.tratamiento}
									>
										<option value="">Seleccionar...</option>
										{[...cardsData, ...cardsData2, ...cardsData3].map((option, index) => (
											<option key={index} value={option.name}>
												{option.name}
											</option>
										))}
									</select>
									{tratamientoTouched && formData.tratamiento === '' && (
										<div className="invalid-feedback">Selecciona un tratamiento válido..</div>
									)}
								</div>
							</div>

							<div className="col-sm-12">
								<label htmlFor="username" className="form-label">
									Comentarios
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange">
										<img src={comentarios} alt="comentarios" className="img-form" />
									</span>
									<input type="text" className="form-control bg-white custom-border-color-orange" id="comentarios" placeholder="Comentarios..." onChange={handleChange} />
									<div className="invalid-feedback">Escribe aquí...</div>
								</div>
							</div>
						</div>

						<div className="text-center">
						<button
								className={`btn btn-primary btn-lg-8 mt-4 w-50 ${formValid ? '' : 'disabled'}`}
								type="submit"
								style={{ backgroundColor: formValid ? '' : '#CCCCCC' }}
								disabled={formSubmitted}>
								{formSubmitted ? 'RESERVADO!' : 'RESERVAR'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default FormReservar
