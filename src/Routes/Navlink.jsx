import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Agendar from '../pages/Agendar'
import Contacto from '../pages/Contacto'
import Admin from '../pages/Admin'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Solicitudes from '../pages/Solicitudes'
import Verification from '../pages/Verification'
import Aceptacion from '../pages/Aceptacion'
import Login_prueba from '../pages/LoginP'
import Rechazo from '../pages/Rechazo'
import AgendarAdmin from '../pages/AgendarAdmin'
import AceptarAdmin from '../pages/AceptacionAdmin'
import RechazarAdmin from '../pages/RechazoAdmin'


const Navlink = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="agendar" element={<Agendar />} />
					<Route path="contacto" element={<Contacto />} />
					<Route path="admin" element={<Admin />} />
					<Route path="nosotros" element={<Nosotros />} />
					<Route path="servicios" element={<Servicios />} />
					<Route path="solicitudes" element={<Solicitudes />} />
					<Route path="verificacion" element={<Verification />} />
					<Route path="aceptacion" element={<Aceptacion />} />
					<Route path="login" element={<Login_prueba />} />
					<Route path="rechazo" element={<Rechazo />} />
					<Route path="agendarAdmin" element={<AgendarAdmin />} />
					<Route path="aceptarAdmin" element={<AceptarAdmin />} />
					<Route path="rechazoAdmin" element={<RechazarAdmin />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Navlink
