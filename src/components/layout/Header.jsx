import React from 'react'
import Navlink from '../atoms/Navlink'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
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
                    aria-label="Toggle navigation"
                >
                    {/* <img src={Toggler} className="Nav-toggler" alt="navbar icon" /> */}
                </button>
                <div className="Nav-collapse collapse navbar-collapse" id="navbarNav">
                    <ul className="Nav-ul navbar-nav ms-auto center">
                        <Navlink title="Inicio"></Navlink>
                        <Navlink title="Servicio"></Navlink>
                        <Navlink title="Nosotros"></Navlink>
                        <Navlink title="Contacto"></Navlink>
                        <a className="btn px-3 ms-md-3 ms-xs-auto">Solicitar cita</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
