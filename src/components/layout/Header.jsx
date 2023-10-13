import React from 'react'

const Header = () => {
    return (
        <header className="Header sticky-top">
            <nav className="Header-nav Nav container navbar navbar-expand-lg">
                <div className="container-fluid">
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
                            <li className="Nav-li nav-item">
                                <a className="Nav-a nav-link" href="/about.html">
                                    Inicio
                                </a>
                            </li>
                            <li className="Nav-li nav-item">
                                <a className="Nav-a nav-link" href="/about.html">
                                    Servicios
                                </a>
                            </li>
                            <li className="Nav-li nav-item">
                                <a className="Nav-a nav-link" href="/products.html">
                                    Nosotros
                                </a>
                            </li>
                            <li className="Nav-li nav-item">
                                <a className="Nav-a nav-link" href="#contact">
                                    Contacto
                                </a>
                            </li>
                        </ul>

                        <a className="btn-primary">Solicitar cita</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
