import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../components/layout/Header-special';
import Footer from '../components/layout/Footer';

const LoginP = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = () => {
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Mostrar advertencia solo si hay contenido en el campo de correo electrónico
    setEmailError(!!e.target.value && !isEmailValid());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid()) {
      console.error('Formato de email no válido');
      return;
    }

    try {
      // Resto del código de manejo de inicio de sesión...
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        const tempToken = token;
        Cookies.set('tokenSesion', tempToken, { expires: 1 });
        navigate('/admin');
      } else {
        console.error('Error en el inicio de sesión front');
      }
    } catch (error) {
      console.error('Error al hacer consulta:', error);
      // Maneja el error de acuerdo a tus necesidades
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="Verificacion container d-flex justify-content-center align-items-center vh-100">
        <div className="card text-center p-3">
          <div className="card-body">
            <h1 className="Verificacion-h1 mb-3">Inicio de Sesión</h1>
            <p className="Verificacion-p card-title">
              Llena los datos para inicio de Sesión
            </p>
            <div className="form-group mt-3">
              <form onSubmit={handleSubmit}>
                <label className="Verificacion-label" htmlFor="verificationCode">
                  Correo
                </label>
                <input
                  type="email"
                  className={`Verificacion-input form-control ${
                    emailError ? 'is-invalid' : ''
                  }`}
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <div className="invalid-feedback">Formato de email no válido</div>
                )}
                <label className="Verificacion-label" htmlFor="verificationCode">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="Verificacion-input form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-primary w-100 mt-3" type="submit">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginP;
