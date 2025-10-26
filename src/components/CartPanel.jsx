import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartPanel({ cart, isOpen, onClose, goToCheckout, updateQty, removeItem }) {
  const navigate = useNavigate()
  const SHIPPING_COST = 199
  const FIXED_PRICE = 2099 // R2099 per pair

  // Subtotal: sum of all items
  const subtotal = cart.reduce((sum, item) => sum + FIXED_PRICE * item.qty, 0)

  // Total including shipping
  const total = subtotal + (cart.length > 0 ? SHIPPING_COST : 0)

  // Total items count
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  const handleContinueShopping = () => {
    onClose()
    navigate('/shop')
  }

  return (
    <section className={`cart-section ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart ({totalItems})</h2>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>

      {totalItems === 0 ? (
        <p className="cart-empty">
          Your cart is empty.
          <button className="btn primary" onClick={handleContinueShopping}>
            Go Shopping
          </button>
        </p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${item.size}-${index}`} className="cart-item">
                
                {/* Product Image */}
                <div className="cart-item-image">
                  <img src={`/images/${item.folderName}/1.jpg`} alt={`Product ${item.id}`} />
                </div>

                {/* Info & Qty */}
                <div className="item-info">
                  <div className="item-name-details">
                    {`Product ${item.id}`} ({item.size})
                  </div>
                  <span className="item-qty-controls">
                    <button onClick={() => updateQty(index, item.qty - 1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(index, item.qty + 1)}>+</button>
                  </span>
                </div>

                {/* Price & Remove */}
                <div className="item-actions">
                  <span className="item-price-display">
                    R{(FIXED_PRICE * item.qty).toFixed(2)}
                  </span>
                  <button className="remove-btn" onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary-total">
            <p>
              <span>Subtotal:</span> 
              <span>R{subtotal.toFixed(2)}</span>
            </p>
            <p>
              <span>Shipping:</span> 
              <span>R{cart.length > 0 ? SHIPPING_COST.toFixed(2) : '0.00'}</span>
            </p>
            <p style={{ fontWeight: '700', fontSize: '1.2rem', marginTop: '10px' }}>
              <span>Total:</span> 
              <span>R{total.toFixed(2)}</span>
            </p>
          </div>

          <div className="cart-buttons">
            <button className="btn primary" onClick={goToCheckout}>
              Checkout
            </button>
            <button className="btn ghost" onClick={handleContinueShopping}>
              Continue shopping
            </button>
          </div>
        </>
      )}
    </section>
  )
}
