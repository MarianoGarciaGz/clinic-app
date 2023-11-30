import React from 'react'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verification = () => {

	const navigate = useNavigate();
	const [verificationCode, setVerificationCode] = useState('');

  const handleVerification = async () => {
    try {
      // Enviar el código de verificación al backend
      const response = await fetch('http://localhost:5000/api/verificarCodigo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verificationCode }), // Envía el código de verificación al backend
      });

	  if (response.ok) {
		console.log('Código de verificación válido');
  
		// Recuperar los datos almacenados en sessionStorage
		const storedFormData = sessionStorage.getItem('formData');
		const formData = storedFormData ? JSON.parse(storedFormData) : null;
  
		
		if (formData) {
		  const responseInsert = await fetch('http://localhost:5000/api/insertarDatos', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...formData, verificationCode }), 
		  });
  
		  if (responseInsert.ok) {
			console.log('Datos insertados exitosamente');
			
			navigate('/aceptacion'); 
		  } else {
			console.error('Error al insertar datos');
		  }
		} else {
		  console.error('No se encontraron datos para insertar');
		}
	  } else {
		console.error('Código de verificación inválido');
	  }
	} catch (error) {
	  console.error('Error en la solicitud:', error);
	}
  };

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };


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
							<p className="Verificacion-p card-title">Introduce tu código de verificación para confirmar tu reservación.</p>
							<div className="form-group mt-3">
        <label className="Verificacion-label" htmlFor="verificationCode">
          Código de Verificación:
        </label>
        <input
          type="text"
          className="Verificacion-input form-control text-center"
          id="verificationCode"
          placeholder="1234"
          value={verificationCode}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary w-100 mt-3" onClick={handleVerification}>
        Aceptar
      </button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Verification
