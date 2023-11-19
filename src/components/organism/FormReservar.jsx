import React from 'react'
import usuario from '../Images/usuario.png'
import fecha from '../Images/fecha.png'
import hora from '../Images/hora.png'
import tratamiento from '../Images/tratamiento.png'
import comentarios from '../Images/comentarios.png'
import telefono from '../Images/telefono.png'

const FormReservar = () => {
	return (
		<div className="card py-5 container my-5">
			<div className="row justify-content-center ">
				<div className="col-md-7 col-lg-8">
					<form className="needs-validation" noValidate>
						<div class="row g-3">
							<div class="col-sm-6">
								<label for="username" class="form-label">
									Nombre(s)
								</label>
								<div class="input-group has-validation ">
									<span class="input-group-text">
										<img src={usuario} alt="nombre" className="img-form" />
									</span>
									<input type="text" class="form-control" id="nombres" placeholder="Nombre(s)" required="" />
									<div class="invalid-feedback">Ingresa un nombre válido.</div>
								</div>
							</div>

							<div class="col-sm-6">
								<label for="username" class="form-label">
									Apellidos
								</label>
								<div class="input-group has-validation ">
									<span class="input-group-text">
										<img src={usuario} alt="apellidos" className="img-form" />
									</span>
									<input type="text" class="form-control" id="apellidos" placeholder="Apellidos" required="" />
									<div class="invalid-feedback">Ingresa un apellido válido.</div>
								</div>
							</div>

							<div className="col-sm-6">
								<label htmlFor="username" className="form-label">
									Fecha
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text">
										<img src={fecha} alt="fecha" className="img-form" />
									</span>
									<input className="form-select" id="fecha" type="date" required></input>
									<div className="invalid-feedback">Selecciona una fecha válida.</div>
								</div>
							</div>

							<div className="col-sm-6">
								<label htmlFor="username" className="form-label">
									Hora
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text">
										<img src={hora} alt="hora" className="img-form" />
									</span>
									<select className="form-select" id="hora" required>
										<option value="">Seleccionar...</option>
										<option>14:00</option>
										<option>15:00</option>
									</select>
									<div className="invalid-feedback">Selecciona una fecha válida.</div>
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="username" className="form-label">
									Tratamiento
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text">
										<img src={tratamiento} alt="tratamiento" className="img-form" />
									</span>
									<select className="form-select" id="tratamiento" required>
										<option value="">Seleccionar...</option>
										<option>Masaje Corporal</option>
										<option>Maquillaje</option>
										<option>Peinado</option>
										<option>Laser</option>
									</select>
									<div className="invalid-feedback">Selecciona una hora válida.</div>
								</div>
							</div>

							<div className="col-sm-12">
								<label htmlFor="username" className="form-label">
									Comentarios
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text">
										<img src={comentarios} alt="comentarios" className="img-form" />
									</span>
									<input type="text" className="form-control" id="comentarios" placeholder="Comentarios..." />
									<div className="invalid-feedback">Escribe aquí...</div>
								</div>
							</div>
						</div>

						<div className="text-center">
							<button className="btn btn-primary mt-4 w-50" type="submit">
								Reservar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default FormReservar
