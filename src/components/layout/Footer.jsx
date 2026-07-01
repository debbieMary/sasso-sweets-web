import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import cloudHero from '../../assets/cloud-hero.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="sasso-footer">
      <img src={cloudHero} alt="" className="footer-cloud footer-cloud-tl" />
      <img src={cloudHero} alt="" className="footer-cloud footer-cloud-tr" />

      <div className="footer-inner">
        <div className="footer-col">
          <h4 className="footer-brand">Sasso Sweets</h4>
          <p className="footer-text">Dulces artesanales bolivianos con sabores unicos que endulzan tu vida.</p>
        </div>

        <div className="footer-col">
          <h5 className="footer-subtitle">Enlaces</h5>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catalogo</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5 className="footer-subtitle">Nuestras Redes</h5>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61550235057747" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/sassosweets/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.tiktok.com/@sassosweets" target="_blank" rel="noopener noreferrer">
              <SiTiktok /> TikTok
            </a>
            <a href="https://wa.me/59169974720" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} Sasso Sweets. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
