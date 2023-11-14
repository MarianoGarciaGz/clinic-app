import React from "react"

const NavBar = ({ title }) => {
    return (
        <li className="Nav-li nav-item">
            <a className="Nav-a nav-link text-center mx-2" href="/">
            {title}
            </a>
        </li>
    )
}
export default NavBar