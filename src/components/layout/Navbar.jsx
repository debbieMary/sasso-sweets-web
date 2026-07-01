import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import sassoLogo from '../../assets/sassoLogoNegro.png'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sasso-navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo" onClick={() => setOpen(false)}>
          <div className="brand-logo-container">
            <img src={sassoLogo} alt="Sasso Sweets" className="brand-logo-img" />
          </div>
        </Link>

        <button
          className={`nav-toggler ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/"        end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>Inicio</NavLink>
          <NavLink to="/catalogo" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>Catálogo</NavLink>
          <NavLink to="/about"   className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>Nosotros</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
