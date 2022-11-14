import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import "./navbar.css";
import BlogIcon from "/home.png";
import LoginIcon from "/login.png";

export const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <li>
                        <Link to="/Blogs"><img src={BlogIcon} alt="blog_icon" className="nav-logo" /></Link>
                    </li>
                    <li>
                        <Link to="/Ingresar"><img src={LoginIcon} alt="login_icon" className="nav-logo" /></Link>
                    </li>
                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
            </nav>
        </>
    )
}
export default Navbar