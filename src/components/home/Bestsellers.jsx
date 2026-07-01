import { Container, Row, Col } from 'react-bootstrap'
import cloudHero from '../../assets/cloud-hero.png'
import './Bestsellers.css'

import cocaImg from '../../assets/products/cocaFoto.jpeg'
import eucaliptoImg from '../../assets/products/eucaliptoFoto.jpeg'
import surtidoImg from '../../assets/products/frutalSurtido.jpeg'
import limonMielImg from '../../assets/products/LimonMielPropoleo.jpeg'
import jengibImg from '../../assets/products/jengibreFoto.jpeg'
import anisImg from '../../assets/products/Anis.jpeg'
import cocoImg from '../../assets/products/fotoDulcesCoco.jpeg'
import mentaImg from '../../assets/products/mentaFoto.jpeg'

const products = [
  { id: 1, name: 'Coco Fruta',          description: 'Delicioso sabor a coco natural',  category: 'Degustacion',  image: cocoImg      },
  { id: 2, name: 'Eucalipto Medicinal', description: 'Refrescante y curativo',           category: 'Medicinales',  image: eucaliptoImg },
  { id: 3, name: 'Frutal Surtido',      description: 'Mezcla de sabores frutales',       category: 'Degustacion',  image: surtidoImg   },
  { id: 4, name: 'Limon Miel Propoleo',description: 'Combinacion perfecta',             category: 'Kids',         image: limonMielImg },
  { id: 5, name: 'Jengibre Natural',    description: 'Picante y saludable',              category: 'Medicinales',  image: jengibImg    },
  { id: 6, name: 'Anis Tradicional',   description: 'Sabor clasico boliviano',          category: 'Medicinales',  image: anisImg      },
  { id: 7, name: 'Coca Natural',        description: 'Energia y tradicion',             category: 'Degustacion',  image: cocaImg      },
  { id: 8, name: 'Menta Refrescante',   description: 'Frescura natural',                category: 'Medicinales',  image: mentaImg     },
]

const categoryColor = {
  Medicinales: '#5bbfa0',
  Kids:        '#e07898',
  Degustacion: '#9b7fdb',
}

function Bestsellers() {
  return (
    <section className="bestsellers-section">
      <img src={cloudHero} alt="" className="bs-cloud bs-cloud-tl" />
      <img src={cloudHero} alt="" className="bs-cloud bs-cloud-tr" />
      <img src={cloudHero} alt="" className="bs-cloud bs-cloud-bl" />
      <img src={cloudHero} alt="" className="bs-cloud bs-cloud-br" />

      <Container className="bs-container">
        <div className="section-header">
          <h2 className="section-title">Mas Vendidos</h2>
          <p className="section-subtitle">Los favoritos de nuestros clientes</p>
        </div>

        <Row className="g-4">
          {products.slice(0, 4).map((product, index) => (
            <Col key={product.id} sm={6} lg={3}>
              <div className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="category-badge" style={{ backgroundColor: categoryColor[product.category] }}>
                    {product.category}
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

        <div className="bs-view-all">
          <a href="/catalogo" className="bs-catalog-btn">Ver catalogo completo</a>
        </div>
      </Container>
    </section>
  )
}

export default Bestsellers
