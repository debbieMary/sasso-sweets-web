import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { GiWrappedSweet } from 'react-icons/gi'
import { BsStars } from 'react-icons/bs'
import { motion } from 'framer-motion'
import sassoMascot from '../../assets/mascot/SassoMascota2.jpg'
import cloudHero from '../../assets/cloud-hero.png'
import './Hero.css'

function Hero() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      // Fade suave desde scroll=0 hasta scroll=120vh — nunca se nota el corte
      const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 1.2))
      setOpacity(fade)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      className="hero-bombon"
      style={{ opacity, pointerEvents: opacity < 0.05 ? 'none' : 'auto' }}
    >
      {/* NUBE REAL PNG */}
      <img src={cloudHero} alt="" className="bottom-cloud-layer" />

      {/* MUCHOS DULCES CON COLORES VIBRANTES */}
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-1" />
      <FaHeart className="decorative-icon candy-float icon-pos-2" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-3" />
      <BsStars className="decorative-icon candy-float icon-pos-4" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-5" />
      <FaHeart className="decorative-icon candy-float icon-pos-6" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-7" />
      <BsStars className="decorative-icon candy-float icon-pos-8" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-9" />
      <FaHeart className="decorative-icon candy-float icon-pos-10" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-11" />
      <BsStars className="decorative-icon candy-float icon-pos-12" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-13" />
      <FaHeart className="decorative-icon candy-float icon-pos-14" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-15" />
      <BsStars className="decorative-icon candy-float icon-pos-16" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-17" />
      <FaHeart className="decorative-icon candy-float icon-pos-18" />
      <GiWrappedSweet className="decorative-icon candy-float icon-pos-19" />
      <BsStars className="decorative-icon candy-float icon-pos-20" />

      {/* CONTENIDO PRINCIPAL CON ANIMACIONES */}
      <div className="hero-main-content">
        {/* TÍTULO ARRIBA CON ANIMACIÓN */}
        <motion.div
          className="hero-title-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-main-title">
            <motion.span
              className="title-big"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sasso Sweets
            </motion.span>
            <motion.span
              className="title-subtitle"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dulces Artesanales Bolivianos
            </motion.span>
          </h1>
        </motion.div>

        {/* VIEJITO SASSO CON ANIMACIÓN DE ENTRADA */}
        <motion.div
          className="sasso-mascot-container"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
        >
          <img src={sassoMascot} alt="Don Sasso" className="sasso-mascot-hero" />
        </motion.div>

        {/* TAGLINE Y BOTÓN CON ANIMACIÓN */}
        <motion.div
          className="hero-bottom-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            En el mundo de Sasso, el sabor reina supremo.
          </motion.p>

          <motion.button
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORAR DULCES
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
