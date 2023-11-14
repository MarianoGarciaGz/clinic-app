import React from 'react'
import {Link,  NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<React.Fragment>
			<header className="Header sticky-top">
				<nav className="Header-nav Nav navbar navbar-expand-md px-5">
					<a className="Nav-logo navbar-brand" href="#">
						logo
					</a>
					<button
						className="Nav-btn navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						{/* <img src={Toggler} className="Nav-toggler" alt="navbar icon" /> */}
					</button>
					<div className="Nav-collapse collapse navbar-collapse" id="navbarNav">
						<ul className="Nav-ul navbar-nav ms-auto center">
							<li className="Nav-li nav-item"><NavLink to='/' relative='path' className="Nav-a nav-link text-center mx-2">Inicio</NavLink></li>
							<li className="Nav-li nav-item"><NavLink to='/agendar' relative='path' className="Nav-a nav-link text-center mx-2">Servicio</NavLink></li>
							<li className="Nav-li nav-item"><NavLink to='/agendar' relative='path' className="Nav-a nav-link text-center mx-2">Nosotros</NavLink></li>
							<li className="Nav-li nav-item"><NavLink to='/agendar' relative='path' className="Nav-a nav-link text-center mx-2">Contacto</NavLink></li>
							<Link to='/agendar' className="btn px-3 ms-md-3 ms-xs-auto">Solicitar cita</Link>
						</ul>
					</div>
				</nav>
			</header>
		</React.Fragment>
	)
}

export default Header
