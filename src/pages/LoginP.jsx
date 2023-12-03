import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../components/layout/Header-special'
import Footer from '../components/layout/Footer'

const LoginP = () => {
	const [email, setEmail] = useState([])
	const [password, setPassword] = useState([])

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			// Aquí deberías realizar la lógica de inicio de sesión, por ejemplo, utilizando fetch para enviar los datos al backend
			// Si el inicio de sesión es exitoso, puedes redirigir al usuario a la página deseada
			const response = await fetch('http://localhost:5000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})

			if (response.ok) {
				// Si el inicio de sesión es exitoso, obtén el token
				const { token } = await response.json()

				// Almacena el token en el almacenamiento local (puedes usar cookies también)
				localStorage.setItem('token', token)
				const tempToken = token
				Cookies.set('tokenSesion', tempToken, { expires: 1 })
				// Redirige a la página deseada
				navigate('/admin')
			} else {
				console.error('Error en el inicio de sesión front')
			}
		} catch (error) {
			console.error('Error al hacer consulta:', error)
			// Maneja el error de acuerdo a tus necesidades
		}
	}

	return (
		<div>
			<Header></Header>
			<div className="Verificacion container d-flex justify-content-center align-items-center vh-100">
				<div className="card text-center p-3">
					<div className="card-body">
						<h1 className="Verificacion-h1 mb-3">Inicio de Sesión</h1>
						<p className="Verificacion-p card-title">Llena los datos para inicio de Sesión</p>
						<div className="form-group mt-3">
							<form onSubmit={handleSubmit}>
								<label className="Verificacion-label" htmlFor="verificationCode">
									Correo
								</label>

								<input type="email" className="Verificacion-input form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
								<label className="Verificacion-label" htmlFor="verificationCode">
									Contraseña
								</label>
								<input type="password" className="Verificacion-input form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

								<button className="btn btn-primary w-100 mt-3" type="submit">
									Ingresar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginP
