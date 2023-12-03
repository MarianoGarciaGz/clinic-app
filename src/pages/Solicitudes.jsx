import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/layout/Header-admin'
import Heading from '../components/atoms/Heading'
import SolicitudCard from '../components/organism/SolicitudCard'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Solicitudes = () => {
    const navigate = useNavigate();

    const [solicitudes, setSolicitudes] = useState([]);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = Cookies.get('tokenSesion');
                if (!token) {
                    console.error('Token no encontrado');
                    navigate('/login');
                    return;
                } else {
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
                    }
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                navigate('/login');
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {

        const obtenerSolicitudes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/obtenerSolicitudes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.ok) {
                    const data = await response.json()
                    console.log('Solicitudes obtenidas exitosamente:')
                    setSolicitudes(data)
                    // Realiza cualquier otra lógica después de obtener las solicitudes exitosamente
                } else {
                    console.error('Error al obtener solicitudes')
                    // Maneja el error de acuerdo a tus necesidades
                }
            } catch (error) {
                console.error('Error en la solicitud:', error)
                // Maneja el error de acuerdo a tus necesidades
            }
        }
        obtenerSolicitudes()
    }, [])



    return (
        <>
            <Header></Header>

            <Heading title="Solicitudes de cita"></Heading>

            <section className="container py-5">
                {solicitudes.map((solicitud) => (
                    <SolicitudCard 
                    _id={solicitud._id} 
                    nombres={solicitud.nombres} 
                    apellidos={solicitud.apellidos} 
                    telefono={solicitud.telefono} 
                    fecha={solicitud.fecha} 
                    hora={solicitud.hora} 
                    tratamiento={solicitud.tratamiento} 
                    comentarios={solicitud.comentarios} />
                ))}
            </section>
        </>
    )
}

export default Solicitudes
