import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import productsData from './utils/products'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import CartPanel from './components/CartPanel'

export default function App(){
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('oak_cart')
      return raw ? JSON.parse(raw) : []
    } catch { return [] }
  })
  // State for controlling the cart panel visibility
  const [isCartOpen, setIsCartOpen] = useState(false) // Changed setter to setIsCartOpen for clarity
  const navigate = useNavigate()

  useEffect(()=> {
    localStorage.setItem('oak_cart', JSON.stringify(cart))
  },[cart])

  function addToCart(productId, size, qty=1){
    const prod = productsData.find(p=>p.id === productId)
    if(!prod) return

    setCart(prev => {
      const idx = prev.findIndex(it => it.id === productId && it.size===size)
      if(idx >= 0){
        const copy = [...prev]
        copy[idx].qty += qty
        return copy
      }
      return [...prev, { id: productId, name: prod.name, price: prod.price, size, qty }]
    })
    
    setIsCartOpen(true) // Open cart when item is added
  }

  function updateQty(index, qty){
    setCart(c => {
      const copy = [...c]
      copy[index].qty = qty
      return copy.filter(it => it.qty > 0)
    })
  }

  function removeItem(index){
    setCart(c => c.filter((_,i)=> i!==index))
  }

  function clearCart(){
    setCart([])
  }

  function goToCheckout(){
    setIsCartOpen(false)
    navigate('/checkout')
  }
  
  const totalCartCount = cart.reduce((s,i)=> s + i.qty, 0);

  return (
    <div className="oak-app">
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <CartPanel
        isOpen={isCartOpen} // FIX: Prop name is 'isOpen'
        onClose={()=> setIsCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        goToCheckout={goToCheckout}
      />
      
      {/* 💡 CRITICAL: The backdrop element that appears when the cart is open */}
      {isCartOpen && <div className="backdrop" onClick={() => setIsCartOpen(false)} />}
      
      <main className="main">
        <Routes>
          <Route path="/" element={<Home onShop={() => navigate('/shop')} />} />
          <Route path="/shop" element={<Shop products={productsData} />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path="*" element={<div style={{padding:40}}>Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}