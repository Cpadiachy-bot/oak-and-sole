import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shop({ products = [] }) {
  const nav = useNavigate()

  return (
    <section style={{ paddingBottom: '60px', paddingTop: '20px' }}>
      {/* Section Header */}
      <div
        className="section-head"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
        <h2>Shop</h2>
        <div className="muted">Showing {products.length} products</div>
      </div>

      {/* Product Grid */}
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '18px'
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => nav(`/product/${p.id}`)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }}
          >
            {/* Image */}
            <div
              className="imgwrap"
              style={{
                height: '220px',
                borderRadius: '10px',
                overflow: 'hidden',
                background: 'var(--glass)'
              }}
            >
              <img
                src={p.images[0]}
                alt={p.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Product Info */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '8px',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{p.name}</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {p.desc}
                </div>
              </div>
              <div style={{ fontWeight: 800, color: 'var(--accent)' }}>
                {p.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
