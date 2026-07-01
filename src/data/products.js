import cocoImg       from '../assets/products/fotoDulcesCoco.jpeg'
import eucaliptoImg  from '../assets/products/eucaliptoFoto.jpeg'
import surtidoImg    from '../assets/products/frutalSurtido.jpeg'
import limonMielImg  from '../assets/products/LimonMielPropoleo.jpeg'
import jengibImg     from '../assets/products/jengibreFoto.jpeg'
import anisImg       from '../assets/products/Anis.jpeg'
import cocaImg       from '../assets/products/cocaFoto.jpeg'
import mentaImg      from '../assets/products/mentaFoto.jpeg'
import mentaVerdeImg from '../assets/products/mentaVerde.jpeg'
import propoleoImg   from '../assets/products/propoleoFoto.jpeg'
import medSurtidoImg from '../assets/products/surtidoFoto.jpeg'

export const products = [
  { id: 1,  name: 'Coco Fruta',         description: 'Delicioso sabor a coco natural',           category: 'Degustacion', image: cocoImg       },
  { id: 2,  name: 'Eucalipto Medicinal',description: 'Refrescante y curativo',                    category: 'Medicinales', image: eucaliptoImg  },
  { id: 3,  name: 'Frutal Surtido',     description: 'Mezcla de sabores frutales',                category: 'Degustacion', image: surtidoImg    },
  { id: 4,  name: 'Limon Miel Propoleo',description: 'Combinacion perfecta para los pequenos',    category: 'Kids',        image: limonMielImg  },
  { id: 5,  name: 'Jengibre Natural',   description: 'Picante y saludable',                       category: 'Medicinales', image: jengibImg     },
  { id: 6,  name: 'Anis Tradicional',   description: 'Sabor clasico boliviano',                   category: 'Medicinales', image: anisImg       },
  { id: 7,  name: 'Coca Natural',       description: 'Energia y tradicion andina',                category: 'Degustacion', image: cocaImg       },
  { id: 8,  name: 'Menta Refrescante',  description: 'Frescura natural',                          category: 'Medicinales', image: mentaImg      },
  { id: 9,  name: 'Menta Verde',        description: 'Frescura intensa y natural',                category: 'Medicinales', image: mentaVerdeImg },
  { id: 10, name: 'Propoleo',           description: 'Propiedades naturales curativas',            category: 'Medicinales', image: propoleoImg   },
  { id: 11, name: 'Medicinal Surtido',  description: 'Variedad de dulces medicinales artesanales', category: 'Medicinales', image: medSurtidoImg },
]

export const categoryColor = {
  Medicinales: '#5bbfa0',
  Kids:        '#e07898',
  Degustacion: '#9b7fdb',
}
