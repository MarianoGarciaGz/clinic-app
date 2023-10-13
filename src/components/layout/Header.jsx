import React from 'react'
import Navlink from '../atoms/Navlink'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="Header sticky-top">
            <nav className="Header-nav Nav container navbar navbar-expand-lg">
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
                    <ul className="Nav-ul navbar-nav ms-auto">
                        <Navlink title="Inicio"></Navlink>
                        <Navlink title="Servicio"></Navlink>
                        <Navlink title="Nosotros"></Navlink>
                    </ul>
                    <a className="btn-primary">Solicitar cita</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
