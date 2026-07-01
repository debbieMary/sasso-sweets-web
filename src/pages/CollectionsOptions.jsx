import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaChild, FaShieldAlt, FaTruck, FaHeart } from 'react-icons/fa'
import { GiWrappedSweet, GiSpiralLollipop, GiJellyBeans, GiCandyCanes, GiChocolateBar, GiDonut } from 'react-icons/gi'
import { BsStars } from 'react-icons/bs'
import fabriquita from '../assets/fabriquita.png'
import sassoMascotPhoto from '../assets/mascot/SassoMascota2.jpg'
import cocoImg from '../assets/products/fotoDulcesCoco-removebg-preview.png'
import anisImg from '../assets/products/Anis-removebg-preview.png'
import mentaImg from '../assets/products/mentaFoto-removebg-preview.png'
import limonMielImg from '../assets/products/LimonMielPropoleo-removebg-preview.png'
import './CollectionsOptions.css'

const cols = [
  { id: 1, name: 'Medicinales', tagline: 'Dulzura que sana', color: '#5bbfa0', Icon: FaLeaf,
    desc: 'Dulces naturales formulados para aliviar malestares de la garganta y equilibrar el sistema digestivo. Elaborados con ingredientes 100% naturales.' },
  { id: 2, name: 'Kids', tagline: 'Para los consentidos del hogar', color: '#e07898', Icon: FaChild,
    desc: 'La línea Sasso Kids combina tradición y cuidado, ofreciendo productos deliciosos que los consentidos del hogar disfrutarán con cada bocado.' },
  { id: 3, name: 'Degustación', tagline: 'Una experiencia única', color: '#9b7fdb', Icon: GiWrappedSweet,
    desc: 'Dulces exclusivos que transforman cada momento en una experiencia única. Perfectos para compartir en ocasiones especiales.' },
]

const stripes = {
  position:'absolute',inset:0,pointerEvents:'none',
  background:'repeating-linear-gradient(-45deg,rgba(255,255,255,.13) 0px,rgba(255,255,255,.13) 2px,transparent 2px,transparent 15px)',
}

/* ── 1: Hotspots sobre la fábrica (el original mejorado) ── */
function Opt1() {
  const [active, setActive] = useState(null)
  const positions = [
    { id:1, top:'38%', left:'10%', dir:'right' },
    { id:2, top:'22%', left:'50%', dir:'right' },
    { id:3, top:'38%', left:'90%', dir:'left' },
  ]
  return (
    <div className="op-scene" onClick={() => setActive(null)}>
      <img src={fabriquita} className="op-fab" alt="" />
      {positions.map(pos => {
        const col = cols.find(c => c.id === pos.id)
        return (
          <div key={pos.id} className="op-hotspot" style={{ top: pos.top, left: pos.left }}
            onClick={e => { e.stopPropagation(); setActive(active === pos.id ? null : pos.id) }}>
            <motion.button className={`op-hs-btn ${active === pos.id ? 'active' : ''}`}
              style={{ borderColor: col.color, color: col.color }}
              whileHover={{ scale: 1.2 }}>
              {active === pos.id ? '×' : '+'}
              <span className="op-hs-ring" style={{ borderColor: col.color }} />
            </motion.button>
            <AnimatePresence>
              {active === pos.id && (
                <motion.div className={`op-popcard pop-${pos.dir}`}
                  initial={{ opacity:0, scale:0.88, y:8 }} animate={{ opacity:1, scale:1, y:0 }}
                  exit={{ opacity:0, scale:0.88 }} transition={{ duration:0.2 }}
                  onClick={e => e.stopPropagation()}>
                  <div className="op-popcard-head" style={{ background: col.color }}>
                    <div style={stripes}/>
                    <div className="op-popcard-icon"><col.Icon /></div>
                    <h3>{col.name}</h3><p>{col.tagline}</p>
                  </div>
                  <div className="op-popcard-body"><p>{col.desc}</p>
                    <button className="op-btn" style={{ background: col.color }}>Ver colección</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ── 2: Fábrica arriba + 3 cards abajo en fila ── */
function Opt2() {
  return (
    <div className="op-stack">
      <img src={fabriquita} className="op-fab-sm" alt="" />
      <div className="op-cards-row">
        {cols.map(col => (
          <div key={col.id} className="op-card-full" style={{ '--c': col.color }}>
            <div style={stripes}/>
            <div className="op-card-icon"><col.Icon /></div>
            <h3>{col.name}</h3>
            <p className="op-card-tagline">{col.tagline}</p>
            <div className="op-card-divider"/>
            <p className="op-card-desc">{col.desc}</p>
            <button className="op-btn" style={{ background: col.color }}>Ver colección</button>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 3: Fábrica centro + cards a los lados ── */
function Opt3() {
  const [active, setActive] = useState(null)
  return (
    <div className="op-sides" onClick={() => setActive(null)}>
      <div className="op-sides-left">
        {[cols[0]].map(col => (
          <motion.div key={col.id} className="op-side-card" style={{ '--c': col.color }}
            whileHover={{ x: 6 }} onClick={e => { e.stopPropagation(); setActive(active===col.id?null:col.id) }}>
            <div style={stripes}/>
            <div className="op-card-icon"><col.Icon /></div>
            <h3>{col.name}</h3>
            <p className="op-card-tagline">{col.tagline}</p>
            <AnimatePresence>
              {active === col.id && (
                <motion.p className="op-card-desc" initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}>
                  {col.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <img src={fabriquita} className="op-fab-md" alt="" />
      <div className="op-sides-right">
        {cols.slice(1).map(col => (
          <motion.div key={col.id} className="op-side-card" style={{ '--c': col.color }}
            whileHover={{ x: -6 }} onClick={e => { e.stopPropagation(); setActive(active===col.id?null:col.id) }}>
            <div style={stripes}/>
            <div className="op-card-icon"><col.Icon /></div>
            <h3>{col.name}</h3>
            <p className="op-card-tagline">{col.tagline}</p>
            <AnimatePresence>
              {active === col.id && (
                <motion.p className="op-card-desc" initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}>
                  {col.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ── 4: Fábrica + tabs debajo ── */
function Opt4() {
  const [active, setActive] = useState(1)
  const col = cols.find(c => c.id === active)
  return (
    <div className="op-stack">
      <img src={fabriquita} className="op-fab-sm" alt="" />
      <div className="op-tabs">
        {cols.map(c => (
          <button key={c.id} className={`op-tab ${active===c.id?'active':''}`}
            style={active===c.id ? { background:c.color, color:'white', borderColor:c.color } : { borderColor:c.color, color:c.color }}
            onClick={() => setActive(c.id)}>
            <c.Icon /> {c.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} className="op-tab-panel" style={{ borderTop:`4px solid ${col.color}` }}
          initial={{ opacity:0,y:6 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-6 }} transition={{ duration:0.2 }}>
          <div className="op-panel-icon" style={{ background:col.color }}><col.Icon /></div>
          <div>
            <h3 style={{ color:col.color }}>{col.name}</h3>
            <p className="op-card-tagline">{col.tagline}</p>
            <p className="op-card-desc">{col.desc}</p>
            <button className="op-btn" style={{ background:col.color }}>Ver colección</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ── 5: Fábrica + cards conectadas ── */
function Opt5() {
  const [active, setActive] = useState(null)
  const [C0, C1, C2] = cols.map(c => c.Icon)
  return (
    <div className="op-connector" onClick={() => setActive(null)}>
      <div className="op-conn-left">
        <motion.div className="op-conn-card" style={{ '--c': cols[0].color }}
          whileHover={{ scale:1.03 }} onClick={e => { e.stopPropagation(); setActive(active===1?null:1) }}>
          <div style={stripes}/>
          <div className="op-card-icon"><C0 /></div>
          <h3>{cols[0].name}</h3>
          <p className="op-card-tagline">{cols[0].tagline}</p>
          <AnimatePresence>
            {active===1 && <motion.p className="op-card-desc" initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}>{cols[0].desc}</motion.p>}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="op-conn-center">
        <img src={fabriquita} className="op-fab-conn" alt="" />
        <motion.div className="op-conn-card op-conn-bottom" style={{ '--c': cols[1].color }}
          whileHover={{ scale:1.03 }} onClick={e => { e.stopPropagation(); setActive(active===2?null:2) }}>
          <div style={stripes}/>
          <div className="op-card-icon"><C1 /></div>
          <h3>{cols[1].name}</h3>
          <AnimatePresence>
            {active===2 && <motion.p className="op-card-desc" initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}>{cols[1].desc}</motion.p>}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="op-conn-right">
        <motion.div className="op-conn-card" style={{ '--c': cols[2].color }}
          whileHover={{ scale:1.03 }} onClick={e => { e.stopPropagation(); setActive(active===3?null:3) }}>
          <div style={stripes}/>
          <div className="op-card-icon"><C2 /></div>
          <h3>{cols[2].name}</h3>
          <p className="op-card-tagline">{cols[2].tagline}</p>
          <AnimatePresence>
            {active===3 && <motion.p className="op-card-desc" initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}>{cols[2].desc}</motion.p>}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

/* ── 6: Fábrica izquierda + acordeón derecha ── */
function Opt6() {
  const [open, setOpen] = useState(null)
  return (
    <div className="op-split">
      <img src={fabriquita} className="op-fab-half" alt="" />
      <div className="op-acc-wrap">
        {cols.map(col => (
          <div key={col.id} className="op-acc-item" onClick={() => setOpen(open===col.id?null:col.id)}>
            <div className="op-acc-head" style={{ background:col.color }}>
              <div style={stripes}/>
              <div className="op-acc-left">
                <div className="op-acc-icon"><col.Icon /></div>
                <span className="op-acc-name">{col.name}</span>
              </div>
              <span className="op-acc-arrow">{open===col.id?'▲':'▼'}</span>
            </div>
            <AnimatePresence initial={false}>
              {open===col.id && (
                <motion.div className="op-acc-body"
                  initial={{ height:0,opacity:0 }} animate={{ height:'auto',opacity:1 }} exit={{ height:0,opacity:0 }} transition={{ duration:0.25 }}>
                  <p className="op-card-tagline" style={{ color:col.color }}>{col.tagline}</p>
                  <p className="op-card-desc">{col.desc}</p>
                  <button className="op-btn" style={{ background:col.color }}>Ver colección</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 7: Fábrica + cards con flip 3D abajo ── */
function Opt7() {
  const [flipped, setFlipped] = useState(null)
  return (
    <div className="op-stack">
      <img src={fabriquita} className="op-fab-sm" alt="" />
      <div className="op-cards-row">
        {cols.map(col => (
          <div key={col.id} className={`op-flip-scene ${flipped===col.id?'flipped':''}`}
            onClick={() => setFlipped(flipped===col.id?null:col.id)}>
            <div className="op-flip-card">
              <div className="op-flip-front" style={{ background:col.color }}>
                <div style={stripes}/>
                <div className="op-card-icon"><col.Icon /></div>
                <h3>{col.name}</h3>
                <p className="op-card-tagline">{col.tagline}</p>
                <span className="op-flip-hint">Clickea</span>
              </div>
              <div className="op-flip-back" style={{ background:col.color }}>
                <div style={stripes}/>
                <p className="op-flip-desc">{col.desc}</p>
                <button className="op-btn op-btn-white">Ver colección</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 8: Fábrica + ribbon full-width abajo ── */
function Opt8() {
  const [active, setActive] = useState(null)
  return (
    <div className="op-stack">
      <img src={fabriquita} className="op-fab-sm" alt="" />
      <div className="op-ribbons">
        {cols.map(col => (
          <div key={col.id} className="op-ribbon" onClick={() => setActive(active===col.id?null:col.id)}>
            <div className="op-ribbon-head" style={{ background:col.color }}>
              <div style={stripes}/>
              <div className="op-ribbon-left">
                <div className="op-ribbon-icon"><col.Icon /></div>
                <div>
                  <span className="op-ribbon-name">{col.name}</span>
                  <span className="op-ribbon-tagline">{col.tagline}</span>
                </div>
              </div>
              <span className="op-ribbon-toggle">{active===col.id?'−':'+'}</span>
            </div>
            <AnimatePresence initial={false}>
              {active===col.id && (
                <motion.div className="op-ribbon-body"
                  initial={{ height:0,opacity:0 }} animate={{ height:'auto',opacity:1 }} exit={{ height:0,opacity:0 }} transition={{ duration:0.25 }}>
                  <p>{col.desc}</p>
                  <button className="op-btn" style={{ background:col.color }}>Ver colección</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 9: Fábrica + modal al clickear zona ── */
function Opt9() {
  const [active, setActive] = useState(null)
  const col = cols.find(c => c.id === active)
  const positions = [
    { id:1, top:'40%', left:'12%' },
    { id:2, top:'24%', left:'50%' },
    { id:3, top:'40%', left:'88%' },
  ]
  return (
    <div className="op-scene" onClick={() => setActive(null)}>
      <img src={fabriquita} className="op-fab" alt="" />
      {positions.map(pos => {
        const c = cols.find(x => x.id === pos.id)
        return (
          <motion.div key={pos.id} className="op-zone-btn"
            style={{ top:pos.top, left:pos.left, background:c.color }}
            whileHover={{ scale:1.15 }}
            onClick={e => { e.stopPropagation(); setActive(pos.id) }}>
            <c.Icon />
          </motion.div>
        )
      })}
      <AnimatePresence>
        {col && (
          <motion.div className="op-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={() => setActive(null)}>
            <motion.div className="op-modal" initial={{ scale:0.85 }} animate={{ scale:1 }} exit={{ scale:0.85 }} onClick={e => e.stopPropagation()}>
              <div className="op-modal-head" style={{ background:col.color }}>
                <div style={stripes}/>
                <div className="op-modal-icon"><col.Icon /></div>
                <h3>{col.name}</h3><p>{col.tagline}</p>
              </div>
              <div className="op-modal-body">
                <p>{col.desc}</p>
                <button className="op-btn" style={{ background:col.color }} onClick={() => setActive(null)}>Cerrar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── 10: Fábrica derecha + cards carousel izquierda ── */
function Opt10() {
  const [idx, setIdx] = useState(0)
  const col = cols[idx]
  return (
    <div className="op-split">
      <div className="op-carousel">
        <AnimatePresence mode="wait">
          <motion.div key={idx} className="op-car-card" style={{ '--c': col.color }}
            initial={{ opacity:0,x:30 }} animate={{ opacity:1,x:0 }} exit={{ opacity:0,x:-30 }} transition={{ duration:0.25 }}>
            <div style={stripes}/>
            <div className="op-card-icon"><col.Icon /></div>
            <h3>{col.name}</h3>
            <p className="op-card-tagline">{col.tagline}</p>
            <div className="op-card-divider"/>
            <p className="op-card-desc">{col.desc}</p>
            <button className="op-btn" style={{ background:col.color }}>Ver colección</button>
          </motion.div>
        </AnimatePresence>
        <div className="op-car-dots">
          {cols.map((c,i) => (
            <button key={i} className={`op-dot ${i===idx?'active':''}`}
              style={i===idx?{ background:c.color }:{}} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
      <img src={fabriquita} className="op-fab-half" alt="" />
    </div>
  )
}

/* ── Página ── */
const options = [
  { num:1, label:'Hotspots sobre la fábrica', Component:Opt1 },
  { num:2, label:'Fábrica arriba + cards en fila', Component:Opt2 },
  { num:3, label:'Fábrica centro + cards a los lados', Component:Opt3 },
  { num:4, label:'Fábrica + tabs debajo', Component:Opt4 },
  { num:5, label:'Fábrica + cards conectadas', Component:Opt5 },
  { num:6, label:'Fábrica izquierda + acordeón derecha', Component:Opt6 },
  { num:7, label:'Fábrica + flip 3D abajo', Component:Opt7 },
  { num:8, label:'Fábrica + ribbon / bandas', Component:Opt8 },
  { num:9, label:'Fábrica + modal al clickear', Component:Opt9 },
  { num:10, label:'Fábrica derecha + carousel', Component:Opt10 },
]

const priceOptions = [
  {
    num: 1,
    label: 'Slash simple',
    preview: (
      <span style={{ fontSize:'1.1rem', fontWeight:700, color:'#e07898' }}>Bs. 12 / Bs. 24</span>
    )
  },
  {
    num: 2,
    label: 'Guion largo',
    preview: (
      <span style={{ fontSize:'1.1rem', fontWeight:700, color:'#e07898' }}>Bs. 12 — Bs. 24</span>
    )
  },
  {
    num: 3,
    label: 'Desde',
    preview: (
      <span style={{ fontSize:'1.1rem', fontWeight:700, color:'#e07898' }}>desde Bs. 12</span>
    )
  },
  {
    num: 4,
    label: 'Dos pills',
    preview: (
      <div style={{ display:'flex', gap:'0.5rem' }}>
        <span style={{ background:'#e07898', color:'white', borderRadius:'999px', padding:'0.25rem 0.85rem', fontSize:'0.82rem', fontWeight:700 }}>Bs. 12</span>
        <span style={{ background:'#9b7fdb', color:'white', borderRadius:'999px', padding:'0.25rem 0.85rem', fontSize:'0.82rem', fontWeight:700 }}>Bs. 24</span>
      </div>
    )
  },
  {
    num: 5,
    label: 'Apilado con etiqueta',
    preview: (
      <div style={{ display:'flex', flexDirection:'column', gap:'0.2rem' }}>
        <span style={{ fontSize:'0.75rem', color:'#aaa' }}>pequeña · grande</span>
        <span style={{ fontSize:'1.1rem', fontWeight:700, color:'#e07898' }}>Bs. 12 · Bs. 24</span>
      </div>
    )
  },
]

/* ══════════ OPCIONES DE HERO (HOME) — el hero original + algo ══════════ */

const heroBadges = [
  { icon: FaLeaf, text: '100% Natural' },
  { icon: FaShieldAlt, text: 'Sabor Boliviano' },
  { icon: FaTruck, text: 'Delivery a domicilio' },
]

const ohIcons = [
  { Icon: GiWrappedSweet, top: '8%',  left: '5%',  color: '#FF4FA3', delay: 0 },
  { Icon: GiSpiralLollipop,     top: '24%', left: '3%',  color: '#FFD23F', delay: 0.4 },
  { Icon: FaHeart,        top: '42%', left: '6%',  color: '#FF6B6B', delay: 0.8 },
  { Icon: GiJellyBeans,      top: '58%', left: '3%',  color: '#26C6DA', delay: 1.2 },
  { Icon: BsStars,        top: '74%', left: '7%',  color: '#FFD23F', delay: 1.6 },
  { Icon: GiCandyCanes,   top: '88%', left: '13%', color: '#FF6B6B', delay: 2 },
  { Icon: GiChocolateBar, top: '10%', left: '18%', color: '#9B59B6', delay: 2.4 },
  { Icon: GiDonut,        top: '90%', left: '30%', color: '#FF8C42', delay: 0.2 },

  { Icon: GiWrappedSweet, top: '8%',  left: '92%', color: '#26C6DA', delay: 0.3 },
  { Icon: GiSpiralLollipop,     top: '24%', left: '95%', color: '#FF4FA3', delay: 0.7 },
  { Icon: FaHeart,        top: '42%', left: '92%', color: '#2ECC71', delay: 1.1 },
  { Icon: GiJellyBeans,      top: '58%', left: '95%', color: '#FF8C42', delay: 1.5 },
  { Icon: BsStars,        top: '74%', left: '91%', color: '#9B59B6', delay: 1.9 },
  { Icon: GiCandyCanes,   top: '88%', left: '84%', color: '#FFD23F', delay: 2.3 },
  { Icon: GiChocolateBar, top: '10%', left: '80%', color: '#FF6B6B', delay: 2.7 },
  { Icon: GiDonut,        top: '90%', left: '68%', color: '#26C6DA', delay: 0.5 },
]

/* Base fiel al hero real: montón de dulces flotando en colores vivos, título con brillo, mascota, tagline y botón */
function HeroBase({ bg, extraTop, extraBottom, taglineNode, ribbon }) {
  return (
    <div className="oh-hero" style={{ background: bg }}>
      {ribbon}
      {ohIcons.map(({ Icon, top, left, color, delay }, i) => (
        <Icon key={i} className="oh-decor" style={{ top, left, color, animationDelay: `${delay}s` }} />
      ))}
      {extraTop}
      <div className="oh-content">
        <h2 className="oh-title">Sasso Sweets</h2>
        <p className="oh-subtitle">Dulces Artesanales Bolivianos</p>
        <img src={sassoMascotPhoto} alt="" className="oh-mascot" />
        {taglineNode || <p className="oh-tagline">En el mundo de Sasso, el sabor reina supremo.</p>}
        <button className="op-btn" style={{ background: '#e07898', fontSize: '0.9rem', padding: '0.7rem 1.8rem' }}>EXPLORAR DULCES</button>
        {extraBottom}
      </div>
    </div>
  )
}

/* ── 1: Original + insignias de confianza ── */
function Hero1() {
  return (
    <HeroBase
      bg="#FFD23F"
      extraBottom={
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          {heroBadges.map(({ icon: Icon, text }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'white', border: '2px solid #5bbfa0', color: '#5bbfa0', borderRadius: 999, padding: '0.35rem 0.8rem', fontSize: '0.72rem', fontWeight: 700 }}>
              <Icon /> {text}
            </span>
          ))}
        </div>
      }
    />
  )
}

/* ── 2: Original + vitrina de dulces flotando junto a la mascota ── */
function Hero2() {
  const imgs = [cocoImg, anisImg, mentaImg, limonMielImg]
  const rot = [-10, 8, -6, 12]
  const pos = [
    { top: '18%', left: '20%' }, { top: '65%', left: '16%' },
    { top: '20%', right: '20%' }, { top: '65%', right: '16%' },
  ]
  return (
    <HeroBase
      bg="#7EE8E8"
      extraTop={imgs.map((src, i) => (
        <img key={i} src={src} alt="" className="oh-product-float" style={{ ...pos[i], transform: `rotate(${rot[i]}deg)`, animationDelay: `${i * 0.6}s` }} />
      ))}
    />
  )
}

/* ── 3: Original + tagline rotativo ── */
function Hero3() {
  const [i, setI] = useState(0)
  const taglines = ['En el mundo de Sasso, el sabor reina supremo.', 'Tradición boliviana en cada dulce.', 'Hecho a mano, con amor.']
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % taglines.length), 2500)
    return () => clearInterval(t)
  }, [])
  return (
    <HeroBase
      bg="#FFB3C6"
      taglineNode={
        <AnimatePresence mode="wait">
          <motion.p key={i} className="oh-tagline"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            {taglines[i]}
          </motion.p>
        </AnimatePresence>
      }
    />
  )
}

/* ── 4: Original + contador de clientes felices ── */
function Hero4() {
  const stats = [
    { value: '500+', label: 'Clientes felices' },
    { value: '15+', label: 'Sabores' },
    { value: '100%', label: 'Boliviano' },
  ]
  return (
    <HeroBase
      bg="#B4F8C8"
      extraBottom={
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.1rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Lilita One', cursive", fontSize: '1.3rem', color: '#7c3aed' }}>{s.value}</div>
              <div style={{ fontSize: '0.68rem', color: '#6b7280', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      }
    />
  )
}

/* ── 5: Original + cinta de oferta en la esquina ── */
function Hero5() {
  return (
    <HeroBase
      bg="#C9A8F5"
      ribbon={
        <div style={{ position: 'absolute', top: 18, left: -46, width: 200, transform: 'rotate(-40deg)', background: '#e07898', color: 'white', textAlign: 'center', fontSize: '0.72rem', fontWeight: 800, padding: '0.35rem 0', zIndex: 5, boxShadow: '0 3px 8px rgba(0,0,0,.15)' }}>
          ENVÍO GRATIS
        </div>
      }
    />
  )
}

/* ── 6: Original + destellos animados junto al botón ── */
function Hero6() {
  return (
    <HeroBase
      bg="#FFC98B"
      extraBottom={
        <div style={{ position: 'relative', height: 0 }}>
          <BsStars className="oh-sparkle" style={{ top: -34, left: -60, color: '#FFD700', animationDelay: '0s' }} />
          <BsStars className="oh-sparkle" style={{ top: -18, right: -60, color: '#FFD700', animationDelay: '0.6s' }} />
          <BsStars className="oh-sparkle" style={{ top: -46, right: -10, color: '#FFD700', animationDelay: '1.2s' }} />
        </div>
      }
    />
  )
}

const heroOptions = [
  { num:1, label:'Original + insignias de confianza', Component:Hero1 },
  { num:2, label:'Original + vitrina de dulces flotando', Component:Hero2 },
  { num:3, label:'Original + tagline rotativo', Component:Hero3 },
  { num:4, label:'Original + contador de clientes', Component:Hero4 },
  { num:5, label:'Original + cinta de oferta', Component:Hero5 },
  { num:6, label:'Original + destellos junto al botón', Component:Hero6 },
]

function CollectionsOptions() {
  return (
    <div className="options-page">
      <div className="options-hero">
        <h1 className="options-title">Opciones de Colecciones</h1>
        <p className="options-subtitle">Todas con la fábrica — prueba cada una y elige</p>
      </div>
      {options.map(({ num, label, Component }) => (
        <div key={num} className="opt-section">
          <div className="opt-label-row">
            <span className="opt-num">{num}</span>
            <span className="opt-name">{label}</span>
          </div>
          <div className="opt-preview">
            <Component />
          </div>
        </div>
      ))}

      <div className="opt-section" style={{ marginTop:'4rem' }}>
        <div className="opt-label-row">
          <span className="opt-name" style={{ fontSize:'1.4rem', fontWeight:900 }}>Opciones de Precio</span>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginTop:'1rem' }}>
          {priceOptions.map(({ num, label, preview }) => (
            <div key={num} className="opt-preview" style={{ display:'flex', alignItems:'center', gap:'2rem' }}>
              <span className="opt-num">{num}</span>
              <span className="opt-name" style={{ minWidth:'160px' }}>{label}</span>
              {preview}
            </div>
          ))}
        </div>
      </div>

      <div className="opt-section" style={{ marginTop:'4rem' }}>
        <div className="opt-label-row">
          <span className="opt-name" style={{ fontSize:'1.4rem', fontWeight:900 }}>Opciones de Hero (Home)</span>
        </div>
      </div>
      {heroOptions.map(({ num, label, Component }) => (
        <div key={num} className="opt-section">
          <div className="opt-label-row">
            <span className="opt-num">{num}</span>
            <span className="opt-name">{label}</span>
          </div>
          <div className="opt-preview">
            <Component />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollectionsOptions
