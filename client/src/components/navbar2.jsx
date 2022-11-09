import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from "/assets/Logoy.png";
import "../styles/navbar.css";

const Navbar2 = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-logo'>
          <Link to="/info">
            <img src={logo} alt="logo" height="165px" />
          </Link>
        </div>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/tutores' className='ingresar'>
            <li>Tutores</li>
          </Link>
          <Link to='/libros' className='registrarse'>
            <li>Libros</li>
          </Link>
          <Link to='/info' className='info'>
            <li>Info</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar2