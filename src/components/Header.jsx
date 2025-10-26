import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Re-introduce onOpenCart
export default function Header({ cartCount = 0, onOpenCart }){
  const navigate = useNavigate()
  
  const logoPath = "/images/logo.jpg"; 

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="left-nav">
          <button className="nav-btn" onClick={()=> navigate('/')}>Home</button>
          <button className="nav-btn" onClick={()=> navigate('/shop')}>Shop</button>
        </div>

        {/* centered logo */}
        <div className="brand-center" aria-hidden>
          <img src={logoPath} alt="Oak & Sole" className="logo" />
        </div>

        <div className="right-nav">
          <button className="nav-btn" onClick={()=> navigate('/about')}>About</button>
          <button className="nav-btn" onClick={()=> navigate('/contact')}>Contact</button>
          
          {/* Change onClick back to onOpenCart */}
          <button className="nav-btn" onClick={onOpenCart}>Cart ({cartCount})</button>
        </div>
      </div>
    </header>
  )
}