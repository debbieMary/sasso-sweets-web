import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaChild } from 'react-icons/fa'
import { GiWrappedSweet } from 'react-icons/gi'
import fabriquita from '../../assets/fabriquita.png'
import cloudHero from '../../assets/cloud-hero.png'
import './Collections.css'

const categoryKeyMap = {
  Medicinales: 'Medicinales',
  Kids: 'Kids',
  'Degustación': 'Degustacion',
}

const collections = [
  {
    id: 1,
    name: 'Medicinales',
    tagline: 'Dulzura que sana',
    paragraphs: [
      'Cuidamos de ti con nuestra selección de dulces naturales, especialmente formulados para aliviar malestares de la garganta y equilibrar el sistema digestivo.',
      'Elaborados con ingredientes 100% naturales, son una opción deliciosa y saludable para mejorar tu bienestar.',
    ],
    color: '#5bbfa0',
    Icon: FaLeaf,
    top: '38%',
    left: '10%',
    popDir: 'right',
  },
  {
    id: 2,
    name: 'Kids',
    tagline: 'Para los consentidos del hogar',
    paragraphs: [
      'El abuelo Sasso, comprometido con el bienestar de los más pequeños, ha lanzado la línea Sasso Kids.',
      'Esta nueva colección combina tradición y cuidado, ofreciendo productos deliciosos que los consentidos del hogar disfrutarán con cada bocado.',
    ],
    color: '#e07898',
    Icon: FaChild,
    top: '25%',
    left: '50%',
    popDir: 'right',
  },
  {
    id: 3,
    name: 'Degustación',
    tagline: 'Una experiencia única',
    paragraphs: [
      'Nuestra línea de degustación ofrece dulces exclusivos que transforman cada momento en una experiencia única.',
      'Diseñados con esmero, invitan a explorar una variedad de sabores y texturas que deleitan el paladar.',
      'Perfectos para compartir en ocasiones especiales o para consentirse en un momento de antojo.',
    ],
    color: '#9b7fdb',
    Icon: GiWrappedSweet,
    top: '38%',
    left: '90%',
    popDir: 'left',
  },
]

function Collections() {
  const [active, setActive] = useState(null)
  const [flipped, setFlipped] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(null)

  const handleHotspot = (id) => {
    if (active === id) { setActive(null); setFlipped(null) }
    else { setActive(id); setFlipped(null) }
  }

  return (
    <section className="collections-section" onClick={() => { setActive(null); setFlipped(null) }}>

      {/* Nubes */}
      <img src={cloudHero} alt="" className="col-cloud col-cloud-tl" />
      <img src={cloudHero} alt="" className="col-cloud col-cloud-tr" />
      <img src={cloudHero} alt="" className="col-cloud col-cloud-bl" />
      <img src={cloudHero} alt="" className="col-cloud col-cloud-br" />

      {/* Fabriquita con hotspots */}
      <div className="collections-scene">
        <motion.img
          src={fabriquita}
          alt="Fabrica de Sassito"
          className="scene-fabriquita"
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {collections.map((col) => (
          <div
            key={col.id}
            className="hotspot-wrap"
            style={{ top: col.top, left: col.left }}
            onClick={(e) => { e.stopPropagation(); handleHotspot(col.id) }}
          >
            <motion.button
              className={`hotspot-btn ${active === col.id ? 'is-active' : ''}`}
              style={{ '--accent': col.color }}
              whileHover={{ scale: 1.18 }}
              animate={{ scale: active === col.id ? 0.9 : 1 }}
              transition={{ duration: 0.18 }}
            >
              <span className="hotspot-ring" style={{ borderColor: col.color }} />
              <span className="hotspot-plus" style={{ color: col.color }}>
                {active === col.id ? '×' : '+'}
              </span>
            </motion.button>

            <AnimatePresence>
              {active === col.id && (
                <motion.div
                  className={`col-card pop-${col.popDir}`}
                  initial={{ opacity: 0, scale: 0.88, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 8 }}
                  transition={{ duration: 0.22 }}
                  onClick={(e) => { e.stopPropagation(); setFlipped(flipped === col.id ? null : col.id) }}
                >
                  <div className={`col-flip-card ${flipped === col.id ? 'is-flipped' : ''}`}>

                    {/* Frente */}
                    <div className="col-flip-front" style={{ background: col.color }}>
                      <div className="col-card-stripes" />
                      <div className="col-card-icon-wrap">
                        <col.Icon className="col-card-icon" />
                      </div>
                      <h3 className="col-card-name">{col.name}</h3>
                      <p className="col-card-tagline">{col.tagline}</p>
                      <span className="col-flip-hint">Toca para ver mas</span>
                    </div>

                    {/* Reverso */}
                    <div className="col-flip-back" style={{ background: col.color }}>
                      <div className="col-card-stripes" />
                      {col.paragraphs.map((p, j) => (
                        <p key={j} className="col-flip-desc">{p}</p>
                      ))}
                      <Link
                        to={`/catalogo?categoria=${categoryKeyMap[col.name]}`}
                        className="col-card-btn col-card-btn-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver coleccion
                      </Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Acordeon mobile */}
      <div className="col-mobile-accordion">
        <img src={fabriquita} alt="Fabrica de Sassito" className="col-mob-fabriquita" />
        {collections.map((col) => (
          <div key={col.id} className="col-mob-item"
            onClick={() => setMobileOpen(mobileOpen === col.id ? null : col.id)}>
            <div className="col-mob-head" style={{ background: col.color }}>
              <div className="col-card-stripes" />
              <div className="col-mob-left">
                <div className="col-card-icon-wrap">
                  <col.Icon className="col-card-icon" />
                </div>
                <div>
                  <h3 className="col-card-name">{col.name}</h3>
                  <p className="col-card-tagline">{col.tagline}</p>
                </div>
              </div>
              <span className="col-mob-arrow">{mobileOpen === col.id ? '▲' : '▼'}</span>
            </div>
            <AnimatePresence initial={false}>
              {mobileOpen === col.id && (
                <motion.div className="col-mob-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  {col.paragraphs.map((p, j) => (
                    <p key={j} className="col-mob-paragraph">{p}</p>
                  ))}
                  <Link
                    to={`/catalogo?categoria=${categoryKeyMap[col.name]}`}
                    className="col-mob-btn"
                    style={{ background: col.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver coleccion
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Collections
