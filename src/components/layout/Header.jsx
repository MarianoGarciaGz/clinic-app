import React, { useEffect, useState } from 'react'
import Navlink from '../atoms/Navlink'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY
			if (position > 0) {
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
						<Navlink title="Inicio"></Navlink>
						<Navlink title="Servicio"></Navlink>
						<Navlink title="Nosotros"></Navlink>
						<Navlink title="Contacto"></Navlink>
						<a className="Nav-btn btn px-3 ms-md-3 ms-xs-auto">Solicitar cita</a>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
