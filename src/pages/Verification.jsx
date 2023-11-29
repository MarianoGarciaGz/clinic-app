import React from 'react'

const Verification = () => {
	return (
		<>
			<div>
				<dialog open className="Modal p-3">
					<h2 className="Modal-h2">Atención</h2>
					<p className="Modal-p">Hemos mandado un código de verificacion a tu correo electronico</p>
					<form method="dialog">
						<button className="btn btn-primary w-50">OK</button>
					</form>
				</dialog>
				<div className="Verificacion container d-flex justify-content-center align-items-center vh-100">
					<div className="card text-center p-3">
						<div className="card-body">
							<h1 className="Verificacion-h1 mb-3">Verificación</h1>
							<p className="Verificacion-p card-title">Introduce tu código de verificación para confirmar tu recervación.</p>
							<div className="form-group mt-3">
								<label className="Verificacion-label" htmlFor="verificationCode">
									Código de Verificación:
								</label>
								<input type="text" className="Verificacion-input form-control text-center" id="verificationCode" placeholder="1234" />
							</div>
							<button className="btn btn-primary w-100 mt-3">Aceptar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Verification
