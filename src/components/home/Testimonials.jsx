import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cloudHero from '../../assets/cloud-hero.png'
import eucaliptoImg from '../../assets/products/eucaliptoFoto.jpeg'
import anisImg from '../../assets/products/Anis.jpeg'
import cocoImg from '../../assets/products/fotoDulcesCoco.jpeg'
import cocaImg from '../../assets/products/cocaFoto.jpeg'
import './Testimonials.css'

const testimonials = [
  { id: 1, name: 'Maria Gonzalez',  text: 'Los mejores dulces que he probado! El sabor de eucalipto me ayudo mucho con la tos.',   rating: 5, image: eucaliptoImg },
  { id: 2, name: 'Carlos Perez',    text: 'Excelente calidad y sabor autentico. Me recuerdan a mi infancia en Bolivia.',             rating: 5, image: anisImg      },
  { id: 3, name: 'Ana Rodriguez',   text: 'Los dulces de coco son mis favoritos. Perfectos para compartir en familia.',              rating: 5, image: cocoImg      },
  { id: 4, name: 'Roberto Sanchez', text: 'Producto boliviano de primera. Los recomiendo al 100%.',                                  rating: 5, image: cocaImg      },
]

const len = testimonials.length

function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % len), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx(i => (i - 1 + len) % len)
  const next = () => setIdx(i => (i + 1) % len)

  const t = testimonials[idx]

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

        <div className="ts-stack">
          <AnimatePresence initial={false}>
            <motion.div
              key={idx}
              className="testimonial-card-v2"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img src={t.image} alt="" className="tc-image" />
              <div className="tc-body">
                <div className="tc-stars">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="tc-star" />)}
                </div>
                <p className="tc-text">{t.text}</p>
                <h4 className="tc-name">{t.name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="ts-arrow ts-next" onClick={next}><FaChevronRight /></button>
      </div>

      <div className="ts-dots">
        {testimonials.map((_, i) => (
          <button key={i} className={`ts-dot ${i === idx ? 'active' : ''}`}
            onClick={() => setIdx(i)} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
