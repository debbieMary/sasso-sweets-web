import Hero from '../components/home/Hero'
import Kingdom from '../components/home/Kingdom'
import Collections from '../components/home/Collections'
import Bestsellers from '../components/home/Bestsellers'
import Testimonials from '../components/home/Testimonials'

function Home() {
  return (
    <div className="home-page">
      <div className="sky-bg" />
      <Hero />
      <Kingdom />
      <Collections />
      <Bestsellers />
      <Testimonials />
    </div>
  )
}

export default Home
