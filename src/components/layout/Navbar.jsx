import { useState } from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/"        className="nav-link" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/catalogo" className="nav-link" onClick={() => setOpen(false)}>Catálogo</Link>
          <Link to="/about"   className="nav-link" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
