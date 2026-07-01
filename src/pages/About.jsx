import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaHistory, FaBullseye, FaHeart, FaStar, FaFlag, FaLeaf, FaHandshake } from 'react-icons/fa'
import { GiBolivia } from 'react-icons/gi'
import sassoMascot from '../assets/mascot/SassoMascota3.jpg'
import cloudHero from '../assets/cloud-hero.png'
import sassoBoliviano from '../assets/mascot/SassoBolivianoSinFondo.png'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tr" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-bl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-br" />
        <Container className="ph-hero-inner">
          <motion.div
            className="ph-hero-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="page-title">Sobre Sasso Sweets</h1>
            <p className="page-subtitle">Tradición y sabor boliviano desde el corazón</p>
          </motion.div>
          <motion.img
            src={sassoBoliviano}
            alt="Abuelo Sasso boliviano"
            className="ph-hero-mascot"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
          />
        </Container>
      </section>

      <motion.section
        className="about-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="about-banner-inner">
          <FaHeart className="about-banner-icon" />
          <p className="about-banner-text">¡Conoce más de nosotros!</p>
        </Container>
      </motion.section>

      <section className="about-content">
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tr" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-bl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-br" />
        <Container className="about-content-inner">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="content-box">
                  <h2 className="section-heading">
                    <FaHistory className="heading-icon" /> Nuestra Historia
                  </h2>
                  <p className="section-text">
                    Sasso Sweets nació del amor por los dulces tradicionales bolivianos
                    y el deseo de compartir sabores auténticos con el mundo. Nuestro
                    viejito Sasso, nuestra querida mascota, representa la sabiduría y
                    la tradición que ponemos en cada dulce que creamos.
                  </p>
                  <p className="section-text">
                    Cada caramelo es elaborado artesanalmente con ingredientes naturales
                    seleccionados cuidadosamente, manteniendo recetas tradicionales que
                    han pasado de generación en generación.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="image-container mascot-image">
                  <img src={sassoMascot} alt="Sasso Mascota" className="about-image" />
                </div>
              </Col>
            </Row>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Row className="align-items-center mb-5">
              <Col lg={6} className="order-lg-2">
                <div className="content-box">
                  <h2 className="section-heading">
                    <FaBullseye className="heading-icon" /> Nuestra Misión
                  </h2>
                  <p className="section-text">
                    Endulzar la vida de nuestros clientes con productos artesanales
                    de la más alta calidad, preservando la tradición boliviana y
                    promoviendo el bienestar a través de dulces con propiedades
                    medicinales naturales.
                  </p>
                </div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <div className="icon-display">
                  <FaBullseye className="display-icon" />
                </div>
              </Col>
            </Row>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="content-box">
                  <h2 className="section-heading">
                    <FaHeart className="heading-icon" /> Nuestros Valores
                  </h2>
                  <ul className="values-list">
                    <li><FaStar className="value-icon" /> Calidad artesanal en cada producto</li>
                    <li><GiBolivia className="value-icon" /> Orgullo boliviano y tradición</li>
                    <li><FaLeaf className="value-icon" /> Ingredientes naturales y saludables</li>
                    <li><FaHeart className="value-icon" /> Amor y dedicación en cada dulce</li>
                    <li><FaHandshake className="value-icon" /> Compromiso con nuestros clientes</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div className="icon-display">
                  <FaHeart className="display-icon" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default About
