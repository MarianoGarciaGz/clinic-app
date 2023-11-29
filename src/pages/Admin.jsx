import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/layout/Header-admin'
import Footer from '../components/layout/Footer'
import CitasCard from '../components/organism/CitasCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '.././assets/css/Calendario.css'
import Heading from '../components/atoms/Heading'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

	const navigate = useNavigate();

	//Estados
	const [selectedDate, setSelectedDate] = useState(new Date());

	const [fechaString, setFechaString] = useState('');

	const [solicitudes, setSolicitudes] = useState([]);

    const [user, setUser] = useState(null);

	//Controladores

	const onChange = (date) => {
		setSelectedDate(date);
		// Puedes realizar otras acciones relacionadas con el cambio de fecha aquí
	};

	useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Obtener el token almacenado
                const token = Cookies.get('tokenSesion');
                // Si no hay token, redirige al usuario al inicio de sesión u otra página
                if (!token) {
                    // Puedes redirigir o realizar otras acciones según tus necesidades
                    console.error('Token no encontrado');
					navigate('/login');
                    return;
                } else {
                    // Hacer una solicitud al servidor con el token
                    const response = await fetch('http://localhost:5000/api/verifyToken', {
                        method: 'GET',
                        headers: {
                            Authorization: token,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
						console.log("Sesion Correctamente Iniciada")
                        setUser(data.user);
                    } else {
						navigate('/login');
                        console.error('Error al obtener datos de usuario');
                        // Manejar el error según tus necesidades
						
                    }
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
				navigate('/login');
            }
        };

        fetchUserData();
    }, []); // El segundo argumento [] significa que este efecto se ejecuta solo una vez al montar el componente

	useEffect(() => {
		const updatedFechaString = selectedDate ? selectedDate.toLocaleDateString('es-ES') : '';

		setFechaString(updatedFechaString);
		

		const obtenerSolicitudes = async () => {
			try {
				// Llama a la API obtenerSolicitudes
				const response = await fetch('http://localhost:5000/api/obtenerSolicitudesAceptadas/'+updatedFechaString, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (response.ok) {
					const data = await response.json();
					setSolicitudes(data);
					// Realiza cualquier otra lógica después de obtener las solicitudes exitosamente
				} else {
					console.error('Error al obtener solicitudes');
					// Maneja el error de acuerdo a tus necesidades
				}
			} catch (error) {
				console.error('Error en la solicitud:', error);
				// Maneja el error de acuerdo a tus necesidades
			}
		}; obtenerSolicitudes();
	}, [selectedDate]);

	

	return (
		<>
			<Header></Header>
			<section className="d-flex justify-content-center container">
				<Calendar onChange={onChange} value={selectedDate} className="card my-5" />
			</section>
			<Heading title={'Citas del día'}></Heading>
			<Heading title={fechaString} />
			<section className="container cards pt-5 mb-5" id="container">
				{solicitudes.map(solicitud => (
					<CitasCard
						_id={solicitud._id}
						nombres={solicitud.nombres}
						apellidos={solicitud.apellidos}
						telefono={solicitud.telefono}
						fecha={solicitud.fecha}
						hora={solicitud.hora}
						tratamiento={solicitud.tratamiento}
						comentarios={solicitud.comentarios}
					/>
				))}
			</section>
			<Footer></Footer>
		</>
	)
}

export default Admin
