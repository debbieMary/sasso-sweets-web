import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUser, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cloudHero from '../../assets/cloud-hero.png'
import './Testimonials.css'

const testimonials = [
  { id: 1, name: 'Maria Gonzalez',  text: 'Los mejores dulces que he probado! El sabor de eucalipto me ayudo mucho con la tos.',   rating: 5 },
  { id: 2, name: 'Carlos Perez',    text: 'Excelente calidad y sabor autentico. Me recuerdan a mi infancia en Bolivia.',             rating: 5 },
  { id: 3, name: 'Ana Rodriguez',   text: 'Los dulces de coco son mis favoritos. Perfectos para compartir en familia.',              rating: 5 },
  { id: 4, name: 'Roberto Sanchez', text: 'Producto boliviano de primera. Los recomiendo al 100%.',                                  rating: 5 },
]

const len = testimonials.length

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">"</div>
      <div className="avatar"><FaUser /></div>
      <div className="stars">
        {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="star" />)}
      </div>
      <p className="testimonial-text">{t.text}</p>
      <h4 className="testimonial-name">{t.name}</h4>
    </div>
  )
}

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx(i => (i + 1) % len) }, 4000)
    return () => clearInterval(t)
  }, [])

  const prev = () => { setDir(-1); setIdx(i => (i - 1 + len) % len) }
  const next = () => { setDir(1);  setIdx(i => (i + 1) % len) }

  const a = testimonials[idx]
  const b = testimonials[(idx + 1) % len]

  return (
    <section className="testimonials-section">
      <img src={cloudHero} alt="" className="ts-cloud ts-cloud-tl" />
      <img src={cloudHero} alt="" className="ts-cloud ts-cloud-tr" />
      <img src={cloudHero} alt="" className="ts-cloud ts-cloud-bl" />
      <img src={cloudHero} alt="" className="ts-cloud ts-cloud-br" />

      <div className="section-header">
        <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
        <p className="section-subtitle">Testimonios reales de personas que aman Sasso Sweets</p>
      </div>

      <div className="ts-slider">
        <button className="ts-arrow ts-prev" onClick={prev}><FaChevronLeft /></button>

        <div className="ts-track">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className="ts-pair"
              custom={dir}
              variants={{
                enter:  d => ({ opacity: 0, x: d * 80 }),
                center: { opacity: 1, x: 0 },
                exit:   d => ({ opacity: 0, x: d * -80 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard t={a} />
              <TestimonialCard t={b} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="ts-arrow ts-next" onClick={next}><FaChevronRight /></button>
      </div>

      <div className="ts-dots">
        {testimonials.map((_, i) => (
          <button key={i} className={`ts-dot ${i === idx ? 'active' : ''}`}
            onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
