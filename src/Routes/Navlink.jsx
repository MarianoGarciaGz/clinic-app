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
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Navlink
