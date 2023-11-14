import React, { useEffect, useState } from 'react'
import {Link,  NavLink } from 'react-router-dom'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY
			if (position > 10) {
				setIsScrolled(true) // Change state when scrolled
			} else {
				setIsScrolled(false) // Reset state when not scrolled
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Dynamically set the class based on scrolling
	const headerClasses = `header ${isScrolled ? 'fixed-top Header' : 'fixed-top Header--transparent'}`

	return (
		<React.Fragment>
			<header className={headerClasses}>
				<nav className="Header-nav Nav navbar navbar-expand-md px-5">
					<a className="Nav-logo navbar-brand" href="#">
						logo
					</a>
					<button
						className="navbar-toggler"
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
							<li className="Nav-li nav-item">
								<NavLink to="/" relative="path" className="Nav-a nav-link text-center mx-2">
									Inicio
								</NavLink>
							</li>
							<li className="Nav-li nav-item">
								<NavLink to="/agendar" relative="path" className="Nav-a nav-link text-center mx-2">
									Servicio
								</NavLink>
							</li>
							<li className="Nav-li nav-item">
								<NavLink to="/agendar" relative="path" className="Nav-a nav-link text-center mx-2">
									Nosotros
								</NavLink>
							</li>
							<li className="Nav-li nav-item">
								<NavLink to="/agendar" relative="path" className="Nav-a nav-link text-center mx-2">
									Contacto
								</NavLink>
							</li>
							<Link to="/agendar" className="Nav-btn btn btn-secondary px-3 ms-md-3 ms-xs-auto">
								Solicitar cita
							</Link>
						</ul>
					</div>
				</nav>
			</header>
		</React.Fragment>
	)
}

export default Header
