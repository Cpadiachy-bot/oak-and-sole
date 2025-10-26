import React from 'react'
import { useNavigate } from 'react-router-dom' // 💡 1. Import useNavigate

export default function Home({ onShop }){
  const navigate = useNavigate() // 💡 2. Initialize useNavigate

  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Handpicked Timberlands</p>
        <h1>Oak & Sole — Timberlands, perfected.</h1>
        <p className="lead">Premium selection of Timberland boots. Clean, rugged, and made to last. Sizes from UK 3 to 11.</p>
        <div style={{marginTop:16}}>
          <button className="btn primary" onClick={onShop}>Shop Timberlands</button>
          {/* 💡 3. Use navigate('/about') instead of window.location.hash */}
          <button 
            className="btn ghost" 
            style={{marginLeft:10}} 
            onClick={() => navigate('/about')}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-card">
          <img src="/images/hero-tb.jpg" alt="hero" className="hero-image" />
        </div>
      </div>
    </section>
  )
}