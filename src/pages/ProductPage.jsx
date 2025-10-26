import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../utils/products'

export default function ProductPage({ addToCart }) {
  const { id } = useParams()
  const prod = products.find(p => p.id === id)

  // State used for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // State used for the selected size
  const [selectedSize, setSelectedSize] = useState(null)

  const nav = useNavigate()
  const images = prod ? prod.images : []

  // Functions to navigate images
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Keyboard navigation useEffect
  useEffect(() => {
    if (!prod) return

    function onKey(e) {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prod, images.length])

  if (!prod) return <div style={{ padding: 40 }}>Product not found</div>

  return (
    <div className="product-page">
      <button className="back" onClick={() => nav(-1)}>← Back</button>

      <div className="product-grid">
        {/* Image Carousel */}
        <div className="carousel">
          {images.map((imgUrl, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            >
              <img src={imgUrl} alt={`${prod.name} view ${index + 1}`} />
            </div>
          ))}

          <button className="carousel-nav-btn prev" onClick={prevImage}>&lt;</button>
          <button className="carousel-nav-btn next" onClick={nextImage}>&gt;</button>

          <div className="thumbs">
            {images.map((im, i) => (
              <button
                key={i}
                className={`thumb ${i === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(i)}
              >
                <img src={im} alt={`thumb-${i}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="info">
          <h2>{prod.name}</h2>
          <div className="pricelarge">R{prod.price}</div>
          <p className="desc">{prod.desc}</p>

          {/* Size Selection */}
          <div className="sizes">
            <div className="muted">Select size</div>
            <div className="sizelist">
              {prod.sizes.map(s => (
                <button
                  key={s}
                  className={`sizebtn ${selectedSize === s ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  UK {s}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="actions" style={{ marginTop: 18 }}>
            <button
              className="btn primary"
              onClick={() => addToCart(prod.id, selectedSize, 1)}
              disabled={!selectedSize}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
