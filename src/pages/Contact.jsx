import { Container, Row, Col, Form } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaTruck } from 'react-icons/fa'
import cloudHero from '../assets/cloud-hero.png'
import sassoAtencion from '../assets/mascot/SassoAtencion1SinFondo.png'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
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
            <h1 className="page-title">Contáctanos</h1>
            <p className="page-subtitle">Estamos aquí para ayudarte</p>
          </motion.div>
          <motion.img
            src={sassoAtencion}
            alt="Abuelo Sasso atendiendo"
            className="ph-hero-mascot"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
          />
        </Container>
      </section>

      <motion.section
        className="contact-delivery"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="contact-delivery-inner">
          <FaTruck className="contact-delivery-icon" />
          <p className="contact-delivery-text">
            Hacemos delivery. Llena este formulario para coordinar tu pedido.
          </p>
        </Container>
      </motion.section>

      <section className="contact-content">
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tr" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-bl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-br" />
        <Container className="contact-content-inner">
          <Row className="justify-content-center">
            <Col lg={7}>
              <motion.div
                className="contact-form-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <h2 className="form-title">Envíanos un Mensaje</h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Tu nombre" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>WhatsApp / Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Tu numero de WhatsApp" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email (opcional)</Form.Label>
                    <Form.Control type="email" placeholder="tu@email.com" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="¿En qué podemos ayudarte?" />
                  </Form.Group>

                  <button type="submit" className="submit-btn">
                    Enviar Mensaje
                  </button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Contact
