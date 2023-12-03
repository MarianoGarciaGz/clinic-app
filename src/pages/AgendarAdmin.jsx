import React from 'react'
import Header from '../components/layout/Header-admin'
import Footer from '../components/layout/Footer'
import Heading from '../components/atoms/Heading'
import Carrusel from '../components/organism/Carousel'
import FormReservar from '../components/organism/FormReservarAdmin'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const AgendarAdmin = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
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
    }, []);

	return (
		<>
			<Header></Header>
			<Heading title="Formulario para el administrador"></Heading>
			<FormReservar></FormReservar>
			<Footer></Footer>
		</>
	)
}

export default AgendarAdmin
