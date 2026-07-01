import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo, useState, useEffect } from 'react'
import cloudHero from '../../assets/cloud-hero.png'
import './Kingdom.css'

const TEXT = 'BIENVENIDOS A LA FÁBRICA DE DULCES MÁS DELICIOSOS DE BOLIVIA'

function Kingdom() {
  const sectionRef = useRef(null)

  // Parallax de nubes
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const yFar  = useTransform(scrollYProgress, [0, 1], ['0%',  '-25%'])
  const yMid  = useTransform(scrollYProgress, [0, 1], ['5%',  '-50%'])
  const yNear = useTransform(scrollYProgress, [0, 1], ['12%', '-80%'])

  // Agrupa por palabra para que no se corten en mobile
  const wordGroups = useMemo(() => {
    let idx = 0
    return TEXT.split(' ').map((word) => ({
      letters: word.split('').map((char) => ({ char, index: idx++ })),
    }))
  }, [])
  const totalLetters = wordGroups.reduce((sum, w) => sum + w.letters.length, 0)

  const [visibleCount, setVisibleCount] = useState(0)
  const [showSub, setShowSub]           = useState(false)

  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const onScroll = () => {
      const vh = window.innerHeight
      // Hero desaparece en scroll=100vh → letras arrancan exactamente ahí.
      // Se completan 150vh después (scroll=250vh). Sección termina en scroll=300vh.
      const letterStart = vh        // pixel 1 "debajo" del hero
      const letterRange = vh * 1.5  // 150vh para completar todo el texto
      const pct = Math.max(0, Math.min(1, (window.scrollY - letterStart) / letterRange))
      setVisibleCount(Math.round(pct * totalLetters))
      setShowSub(pct >= 0.85)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [totalLetters])

  return (
    <section className="kingdom-section" ref={sectionRef}>
      <div className="kingdom-sticky">

        <motion.img src={cloudHero} alt="" className="k-cloud k-far-l"    style={{ y: yFar  }} />
        <motion.img src={cloudHero} alt="" className="k-cloud k-far-r"    style={{ y: yFar  }} />
        <motion.img src={cloudHero} alt="" className="k-cloud k-mid-l"    style={{ y: yMid  }} />
        <motion.img src={cloudHero} alt="" className="k-cloud k-mid-r"    style={{ y: yMid  }} />
        <motion.img src={cloudHero} alt="" className="k-cloud k-near-l"   style={{ y: yNear }} />
        <motion.img src={cloudHero} alt="" className="k-cloud k-near-r"   style={{ y: yNear }} />
        <motion.img src={cloudHero} alt="" className="k-cloud k-near-bot" style={{ y: yNear }} />

        <div className="kingdom-content">
          <h2 className="kingdom-title">
            {wordGroups.map((word, wi) => (
              <span key={wi} className="k-word-wrap">
                <span className="k-word">
                  {word.letters.map((item, li) => (
                    <motion.span
                      key={li}
                      className="title-letter"
                      animate={{
                        opacity: item.index < visibleCount ? 1 : 0,
                        y:       item.index < visibleCount ? 0 : 16,
                      }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                    >
                      {item.char}
                    </motion.span>
                  ))}
                </span>
                {wi < wordGroups.length - 1 && (
                  <span className="letter-space" />
                )}
              </span>
            ))}
          </h2>

          <motion.p
            className="kingdom-subtitle"
            animate={{ opacity: showSub ? 1 : 0, y: showSub ? 0 : 14 }}
            transition={{ duration: 0.5 }}
          >
            ...donde el abuelo Sassito convierte el amor en arte, un dulce a la vez
          </motion.p>
        </div>

      </div>
    </section>
  )
}

export default Kingdom
