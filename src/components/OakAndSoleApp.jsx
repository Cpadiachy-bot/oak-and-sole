import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import ProductGrid from './ProductGrid'
import ProductPage from './ProductPage'
import About from './About'
import Contact from './Contact'
import Cart from './CartPanel'
import Footer from './Footer'

function OakAndSoleApp() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductGrid />
          </>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default OakAndSoleApp