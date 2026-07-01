import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Catalogo from './pages/Catalogo'
import CollectionsOptions from './pages/CollectionsOptions'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opciones" element={<CollectionsOptions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
