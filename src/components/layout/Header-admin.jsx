import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../Images/logo.png'
import Toggler from '../../assets/img/burger.svg'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY
			if (position > 20) {
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
	const headerClasses = `header ${isScrolled ? 'sticky-top Header' : 'sticky-top Header'}`

	return (
		<React.Fragment>
			<header className={headerClasses}>
				<nav className="Header-nav Nav navbar navbar-expand-md px-5">
					<NavLink to="/" relative="path" className="Nav-a nav-link text-center mx-2">
						<img src={logo} className="Nav-toggler" alt="navbar icon" style={{ width: '3em' }} />
					</NavLink>
					<button className="Nav-btntoggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<img src={Toggler} alt="" />
					</button>
					<div className="Nav-collapse collapse navbar-collapse" id="navbarNav">
						<ul className="Nav-ul navbar-nav ms-auto center">
							<li className="Nav-li nav-item">
								<NavLink to="/admin" relative="path" className="Nav-a nav-link text-center mx-2">
									Administrador
								</NavLink>
							</li>
							<li className="Nav-li nav-item">
								<NavLink to="/solicitudes" relative="path" className="Nav-a nav-link text-center mx-2">
									Solicitudes
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</React.Fragment>
	)
}

export default Header
