import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
  })

  const shipping = subtotal > 100 ? 0 : 5
  const total = subtotal + shipping

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <main className="section">
        <div className="container">
          <div className="checkout-success">
            <div className="success-icon">✓</div>
            <h1>Order Confirmed</h1>
            <p>
              Thank you, <strong>{form.name || 'customer'}</strong>. Your order has been
              placed successfully. A confirmation email will be sent to{' '}
              <strong>{form.email || 'your email address'}</strong>.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/shop" className="btn btn-primary btn-lg">
                Continue Shopping
              </Link>
              <Link to="/" className="btn btn-secondary btn-lg">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="section">
        <div className="container">
          <div className="page-header">
            <div>
              <p className="eyebrow">Checkout</p>
              <h1>Secure Checkout</h1>
            </div>
          </div>
          <div className="empty-state">
            <h3>Your cart is empty</h3>
            <p>Add items to your cart before proceeding to checkout.</p>
            <Link to="/shop" className="btn btn-primary">
              Go to Shop
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="eyebrow">Checkout</p>
            <h1>Secure Checkout</h1>
            <p>Complete your order with our fast and secure checkout process.</p>
          </div>
        </div>
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            <p className="secure-note">🔒 Your information is used only for this demo checkout.</p>
            <div className="form-grid">
              <label>
                Full Name
                <input className="input" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email Address
                <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label className="full">
                Street Address
                <input className="input" name="address" value={form.address} onChange={handleChange} required />
              </label>
              <label>
                City
                <input className="input" name="city" value={form.city} onChange={handleChange} required />
              </label>
              <label>
                ZIP / Postal Code
                <input className="input" name="zip" value={form.zip} onChange={handleChange} required />
              </label>
              <label className="full">
                Card Number
                <input className="input" name="card" value={form.card} onChange={handleChange} placeholder="1234 5678 9012 3456" required />
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Place Order • ${total.toFixed(2)}
            </button>
          </form>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <ul className="summary-items">
              {items.map((item) => (
                <li key={item.id} className="summary-item">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="summary-note">By placing your order, you agree to our demo terms and policies.</p>
          </aside>
        </div>
      </div>
    </main>
  )
}
