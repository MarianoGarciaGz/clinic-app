import React from 'react'

const Navlink = ({ title }) => {
    return (
        <li className="Nav-li nav-item">
            <a className="Nav-a nav-link text-center" href="#contact">
                {title}
            </a>
        </li>
    )
}

export default Navlink
