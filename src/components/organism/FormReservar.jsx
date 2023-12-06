import { cardsData, cardsData2, cardsData3 } from '../atoms/data';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import fecha from '../Images/fecha.png'
import hora from '../Images/hora.png'
import tratamiento from '../Images/tratamiento.png'
import comentarios from '../Images/comentarios.png'
import correo from '../Images/correo.png'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import telefono from '../Images/telefono.png'
import usuario from '../Images/usuario.png'
import fondo from '../Images/O6.jpg'

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
	const [horaTouched, setHoraTouched] = useState(false);
	const [tratamientoSeleccionado, setTratamientoSeleccionado] = useState(false)
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
			selectedDate !== '' &&
			formData.email !== ''
		) {
			if (horaSeleccionada && tratamientoSeleccionado) {
				setFormValid(true) // Habilita el botón si los campos están completos y no hay errores
			} else {
				setFormValid(false) // Deshabilita el botón si falta seleccionar hora o tratamiento
			}
		} else {
			setFormValid(false) // Deshabilita el botón si algún campo está vacío o hay errores
		}
	},[formData, telefonoError, nombresError, apellidosError, selectedDate, horaSeleccionada, tratamientoSeleccionado, emailError]);

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
				handleChangeGeneral(e);
				setHoraSeleccionada(e.target.value !== '' && e.target.value !== 'Seleccionar...'); // Actualiza el estado si se selecciona una hora
				setHoraTouched(true);
				break;
			case 'tratamiento':
				handleChangeGeneral(e)
				setTratamientoSeleccionado(e.target.value !== '' && e.target.value !== 'Seleccionar...') // Actualiza el estado si se selecciona un tratamiento
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
		// Deshabilita el formulario al momento de hacer clic en "Reservar"
		setFormSubmitted(true);
		try {
			// Enviar el correo con el código de verificación
			const responseCorreo = await fetch('http://localhost:5000/api/enviarCodigo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: formData.email,
					fecha: formData.fecha,
					hora: formData.hora,
					tratamiento: formData.tratamiento,
				}),
			});

			if (responseCorreo.ok) {
				console.log('Correo enviado con el código de verificación');

				// Almacena temporalmente los datos en sessionStorage
				const updatedFormData = {
					...formData,
					estado: 'pendiente', // Establecer el estado predeterminado
				};
				sessionStorage.setItem('formData', JSON.stringify(updatedFormData)); // Almacena los datos en sessionStorage
				navigate('/verificacion'); // Redireccionar a la página de verificación
			} else {
				console.error('Error al enviar el correo');
				navigate('/rechazo')
				// Manejar el error del envío del correo según tus necesidades
			}
		} catch (error) {
			console.error('Error en la solicitud:', error);
			// Manejar el error general según tus necesidades
		}
	};




	const filterWeekends = date => {
		const day = date.getDay();
		return day !== 0;
	};

	

	return (
		
        <div className="row justify-content-center" style={{ }}>
			<div className="col-md-6 mt-4 mb-4 position-relative" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', width:'70%', borderColor:'var(--color-secondary)', border:'5px solid var(--color-secondary)' }}>
			<div className="col-md-12 " style={{ backgroundColor: 'rgba(255, 27, 130, 0.8)'}}>
            <form className="needs-validation " noValidate onSubmit={handleSubmit} 
        >
						<div className="row g-3 mt-4" style={{marginRight:'5px', marginLeft:'5px'}}>
							<div className="col-sm-4" >
								<label htmlFor="nombres" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Nombre(s)
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={usuario} alt="correo" className="img-form" />
									</span>
									<input type="text" className={`form-control custom-border-color-orange ${nombresError ? 'is-invalid' : ''}`} id="nombres" placeholder="Nombre(s)" required="" onChange={handleChange} style={{ border:'2px solid'}}/>
									{nombresError && <div className="invalid-feedback" style={{color:'white '}}>Ingresa un nombre válido.</div>}
								</div>
							</div>

							<div className="col-sm-4">
								<label htmlFor="apellidos" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Apellidos
								</label>
								<div className="input-group has-validation">
								<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={usuario} alt="correo" className="img-form" />
									</span>
									<input type="text" style={{border:'2px solid '}} className={`form-control custom-border-color-orange ${apellidosError ? 'is-invalid' : ''}`} id="apellidos" placeholder="Apellidos" required="" onChange={handleChange} />
									{apellidosError && <div className="invalid-feedback" style={{color:'white '}}>Ingresa un apellido válido.</div>}
								</div>
							</div>

							<div className="col-sm-4">
								<label htmlFor="telefono" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Teléfono
								</label>
								<div className="input-group has-validation">
								<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={telefono} alt="correo" className="img-form" />
									</span>
									<input type="text" style={{border:'2px solid '}}  className={`form-control bg-orange custom-border-color-orange ${telefonoError ? 'is-invalid' : ''}`} id="telefono" placeholder="Teléfono" required="" onChange={handleChange} />

									{telefonoError && <div className="invalid-feedback" style={{color:'white '}}>Ingresa un teléfono válido.</div>}

									{telefonoError && <div className="invalid-feedback" style={{color:'white '}}>Ingresa un teléfono válido.</div>}

								</div>
							</div>

							<div className="col-sm-6">
							<label htmlFor="username" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
								Fecha
							</label>
							<div className="input-group has-validation">
								<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
								<img src={fecha} alt="fecha" className="img-form" />
								</span>
								<div className='form-select bg-white custom-border-color-orange style' style={{ height: '47px', borderLeftright:'0',border:'2px solid '}}>
								<DatePicker
								selected={selectedDate}
								onChange={handleChangeDate}
								className={`${selectedDate ? '' : 'is-invalid'}`}
								id="fecha"
								placeholderText="Seleccionar..."
								dateFormat="dd/MM/yy"
								required
								maxDate={maxDate}
								minDate={new Date(Date.now())}
								filterDate={filterWeekends}
								/>
								</div>
								{!selectedDate && (
								<div className="invalid-feedback" style={{color:'white '}}>Selecciona una fecha válida.</div>
								)}
							</div>
							</div>


							<div className="col-sm-6">
								<label htmlFor="username" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Hora
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={hora} alt="hora" className="img-form" />
									</span>
									<select
										className={`form-select bg-white custom-border-color-orange  ${horaSeleccionada ? '' : (horaTouched ? 'is-invalid' : '')}`} id="hora"
										style={{color:'GrayText', border:'2px solid #000000'}}
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
										<div className="invalid-feedback" style={{color:'white '}}>Selecciona una hora válida.</div>
									)}
								</div>
							</div>

							<div className="col-sm-12">
								<label htmlFor="username" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Correo (Te enviaremos un código para poder confirmar tu solicitud)
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={correo} alt="correo" className="img-form" />
									</span>
									<input
										type="email"
										style={{border:'2px solid '}}
										className={`form-select bg-white custom-border-color-orange ${emailError ? 'is-invalid' : ''}`}
										id="email"
										placeholder="Correo"
										onChange={handleChange} />
									{emailError && <div className="invalid-feedback" style={{color:'white '}}>{emailError}</div>}
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="username" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Tratamiento
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={tratamiento} alt="tratamiento" className="img-form" />
									</span>
									<select
										className={`form-select bg-white custom-border-color-orange ${tratamientoSeleccionado ? '' : (tratamientoTouched ? 'is-invalid' : '')}`}
										id="tratamiento"
										style={{color:'GrayText', border:'2px solid #000000'}}
										required onChange={handleChange}
										value={formData.tratamiento}
									>
										<option value="" >Seleccionar...</option>
										{[...cardsData, ...cardsData2, ...cardsData3].map((option, index) => (
											<option key={index} value={option.name}>
												{option.name}
											</option>
										))}
									</select>
									{tratamientoTouched && formData.tratamiento === '' && (
										<div className="invalid-feedback" style={{border:'2px solid ', color:'white'}}> Selecciona un tratamiento válido..</div>
									)}								</div>
							</div>

							<div className="col-sm-12">
								<label htmlFor="username" className="form-label" style={{color:'white', borderColor:'black', fontSize:'20px'}}>
									Comentarios (opcional)
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text bg-white custom-border-color-orange" style={{border:'2px solid '}}>
										<img src={comentarios} alt="comentarios" className="img-form" />
									</span>
									<input type="text" style={{border:'2px solid '}} className="form-control bg-white custom-border-color-orange" id="comentarios" placeholder="Comentarios..." onChange={handleChange} />
									<div className="invalid-feedback" >Escribe aquí...</div>
								</div>
							</div>
						</div>

						<div className="text-center p-3 mb-4">
							<button
								className={`btn btn-primary btn-lg-8 mt-4 w-50 ${formValid ? '' : 'disabled'}`}
								type="submit"
								style={{ backgroundColor: formValid ? '' : '#CCCCCC' }}
								disabled={formSubmitted}>
								{formSubmitted ? '¡Enviado!' : 'RESERVAR'}
							</button>
						</div>
					</form>
				</div>
			</div>
		
			</div>
	)
}

export default FormReservar