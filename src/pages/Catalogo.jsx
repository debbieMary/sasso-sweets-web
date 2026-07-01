import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLeaf, FaChild, FaTruck } from 'react-icons/fa'
import { GiWrappedSweet } from 'react-icons/gi'
import { products, categoryColor } from '../data/products'
import cloudHero from '../assets/cloud-hero.png'
import sassoDelivery from '../assets/mascot/SassoDelivery1SinFondo.png'
import '../components/home/Bestsellers.css'
import './Catalogo.css'

const categories = [
  { key: 'Medicinales', label: 'Medicinales', Icon: FaLeaf },
  { key: 'Kids', label: 'Kids', Icon: FaChild },
  { key: 'Degustacion', label: 'Degustación', Icon: GiWrappedSweet },
]

const validCategories = ['Todos', ...categories.map((c) => c.key)]

function Catalogo() {
  const [searchParams] = useSearchParams()
  const categoriaParam = searchParams.get('categoria')
  const initialCategory = validCategories.includes(categoriaParam) ? categoriaParam : 'Todos'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  useEffect(() => {
    setActiveCategory(initialCategory)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriaParam])

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <div className="catalogo-page">
      <section className="catalogo-hero">
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
            <h1 className="page-title">Catálogo</h1>
            <p className="page-subtitle">Todos nuestros dulces, clasificados por colección</p>
          </motion.div>
          <motion.img
            src={sassoDelivery}
            alt="Abuelo Sasso con dulces"
            className="ph-hero-mascot"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
          />
        </Container>
      </section>

      <motion.section
        className="catalogo-delivery"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="catalogo-delivery-inner">
          <FaTruck className="catalogo-delivery-icon" />
          <p className="catalogo-delivery-text">
            Hacemos delivery. Si deseas realizar un pedido, llena nuestro formulario de contacto.
          </p>
          <Link to="/contact" className="catalogo-delivery-btn">Ir al formulario</Link>
        </Container>
      </motion.section>

      <section className="catalogo-content">
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-tr" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-bl" />
        <img src={cloudHero} alt="" className="ph-cloud ph-cloud-br" />
        <Container className="catalogo-content-inner">
          <motion.div
            className="catalogo-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              className={`cat-filter-btn ${activeCategory === 'Todos' ? 'is-active' : ''}`}
              style={activeCategory === 'Todos' ? { background: '#2d3436', borderColor: '#2d3436' } : {}}
              onClick={() => setActiveCategory('Todos')}
            >
              Todos
            </button>
            {categories.map(({ key, label, Icon }) => (
              <button
                key={key}
                className={`cat-filter-btn ${activeCategory === key ? 'is-active' : ''}`}
                style={activeCategory === key ? { background: categoryColor[key], borderColor: categoryColor[key] } : { color: categoryColor[key], borderColor: categoryColor[key] }}
                onClick={() => setActiveCategory(key)}
              >
                <Icon /> {label}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
          <Row className="g-4">
            {filteredProducts.map((product, index) => (
              <Col key={product.id} sm={6} lg={4} xl={3}>
                <div className="product-card" style={{ animationDelay: `${index * 0.06}s` }}>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="category-badge" style={{ backgroundColor: categoryColor[product.category] }}>
                      {product.category === 'Degustacion' ? 'Degustación' : product.category}
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-prices">
                      <span className="price-pill price-sm">Bs. 12</span>
                      <span className="price-pill price-lg">Bs. 24</span>
                    </div>
                  </div>
                  <div className="card-shine" />
                </div>
              </Col>
            ))}
          </Row>
          </motion.div>

          {filteredProducts.length === 0 && (
            <p className="catalogo-empty">No hay productos en esta colección todavía.</p>
          )}
        </Container>
      </section>
    </div>
  )
}

export default Catalogo
