import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import "./navbar.css";
import BlogIcon from "/home.png";
import TutorIcon from "/group.png";
import PerfilIcon from "/account_circle.png";

export const NavbarSession = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <li>
                        <Link to="/Perfil"><img src={PerfilIcon} alt="perfil_icon" className="nav-logo" /></Link>
                    </li>
                    <li>
                        <Link to="/Inicio"><img src={BlogIcon} alt="blog_icon" className="nav-logo" /></Link>
                    </li>
                    <li>
                        <Link to="/Tutores"><img src={TutorIcon} alt="tutor_icon" className="nav-logo" /></Link>
                    </li>
                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
            </nav>
        </>
    )
}
export default NavbarSession