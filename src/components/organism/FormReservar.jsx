import React from 'react'
import usuario from '../Images/usuario.png'
import fecha from '../Images/fecha.png'
import hora from '../Images/hora.png'
import tratamiento from '../Images/tratamiento.png'
import comentarios from '../Images/comentarios.png'
import correo from '../Images/correo.png'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import telefono from '../Images/telefono.png'

const FormReservar = () => {
	// Obtén la fecha actual
	const currentDate = new Date()
	// Suma x días a la fecha actual (en este caso, x sería 7 días)
	const maxDate = new Date(currentDate)
	maxDate.setDate(currentDate.getDate() + 7)

	//Estados
	const [telefonoError, setTelefonoError] = useState(false)
	const [nombresError, setNombresError] = useState(false)
	const [apellidosError, setApellidosError] = useState(false)
	const [horaSeleccionada, setHoraSeleccionada] = useState(false)
	const [tratamientoSeleccionado, setTratamientoSeleccionado] = useState(false)
	const [formValid, setFormValid] = useState(false)
	const [selectedDate, setSelectedDate] = useState(null)
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

	//Manejadores de Estados
	const handleChangeDate = (date) => {
		setSelectedDate(date)
	}

	useEffect(() => {
		const fechaString = selectedDate ? selectedDate.toLocaleDateString('es-ES') : ''

		setFormData({
			...formData,
			fecha: fechaString,
		})
	}, [selectedDate])

	const handleChange = (e) => {
		if (e.target.id === 'telefono') {
			const regex = /^[0-9]*$/
			if (regex.test(e.target.value) || e.target.value === '') {
				if (e.target.value.length <= 10) {
					setFormData({
						...formData,
						[e.target.id]: e.target.value,
					})
					setTelefonoError(false)
				} else {
					setTelefonoError(true)
				}
			} else {
				setTelefonoError(true)
			}
		} else if (e.target.id === 'apellidos' || e.target.id === 'nombres') {
			const regex = /^[A-Za-zÁÉÍÓÚÜáéíóúü\s]+$/
			if (regex.test(e.target.value) || e.target.value === '') {
				setFormData({
					...formData,
					[e.target.id]: e.target.value,
				})
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
		} else if (e.target.id === 'fecha') {
			setFormData({
				...formData,
				[e.target.id]: e.target.value,
			})
		} else if (e.target.id === 'email') {
			setFormData({
				...formData,
				[e.target.id]: e.target.value,
			})
		} else if (e.target.id === 'comentarios') {
			setFormData({
				...formData,
				[e.target.id]: e.target.value,
			})
		} else if (e.target.id === 'hora') {
			setFormData({
				...formData,
				[e.target.id]: e.target.value,
			})
			setHoraSeleccionada(e.target.value !== '') // Actualiza el estado si se selecciona una hora
		} else if (e.target.id === 'tratamiento') {
			setFormData({
				...formData,
				[e.target.id]: e.target.value,
			})
			setTratamientoSeleccionado(e.target.value !== '') // Actualiza el estado si se selecciona un tratamiento
		}

		if (
			formData.nombres !== '' &&
			formData.apellidos !== '' &&
			formData.telefono !== '' &&
			!telefonoError &&
			!nombresError &&
			!apellidosError
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
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const updatedFormData = {
				...formData,
				estado: 'pendiente', // Establecer el estado predeterminado
			}

			// Llama a la API insertaDatos con los datos actualizados
			const response = await fetch('http://localhost:5000/api/insertarDatos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedFormData),
			})

			if (response.ok) {
				console.log('Datos insertados exitosamente')
				// Realiza cualquier otra lógica después de la inserción exitosa
			} else {
				console.error('Error al insertar datos')
				// Maneja el error de acuerdo a tus necesidades
			}
		} catch (error) {
			console.error('Error en la solicitud:', error)
			// Maneja el error de acuerdo a tus necesidades
		}
	}

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
									<select className={`form-select bg-white custom-border-color-orange ${horaSeleccionada ? '' : 'is-invalid'}`} id="hora" required onChange={handleChange}>
										<option value="">Seleccionar...</option>
										<option>14:00</option>
										<option>15:00</option>
									</select>
									<div className="invalid-feedback">Selecciona una hora válida.</div>
								</div>
							</div>

							<div className="col-sm-12">
								<label htmlFor="username" className="form-label">
									Correo
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange">
										<img src={correo} alt="correo" className="img-form" />
									</span>
									<input type="email" className="form-control bg-white custom-border-color-orange" id="email" placeholder="Correo" onChange={handleChange} />
									<div className="invalid-feedback">Escribe tu email aquí...</div>
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
									<select className={`form-select bg-white custom-border-color-orange ${tratamientoSeleccionado ? '' : 'is-invalid'}`} id="tratamiento" required onChange={handleChange}>
										<option value="">Seleccionar...</option>
										<option>Masaje Corporal</option>
										<option>Maquillaje</option>
										<option>Peinado</option>
										<option>Laser</option>
									</select>
									<div className="invalid-feedback">Selecciona un tratamiento válido.</div>
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
							<button className={`btn btn-primary btn-lg-8 mt-4 w-50 ${formValid ? '' : 'disabled'}`} type="submit" style={{ backgroundColor: formValid ? '' : '#CCCCCC' }} disabled={!formValid}>
								RESERVAR
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default FormReservar
