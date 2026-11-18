import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart()

  if (items.length === 0) {
    return (
      <main className="section">
        <div className="container">
          <div className="page-header">
            <div>
              <p className="eyebrow">Cart</p>
              <h1>Your Shopping Cart</h1>
            </div>
          </div>
          <div className="empty-state">
            <h3>Your cart is empty</h3>
            <p>Looks like you haven&apos;t added any products yet.</p>
            <Link to="/shop" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const shipping = subtotal > 100 ? 0 : 5
  const total = subtotal + shipping

  return (
    <main className="section">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="eyebrow">Cart</p>
            <h1>Your Shopping Cart</h1>
            <p>Review your items and proceed to secure checkout.</p>
          </div>
        </div>
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-meta">
                    {item.category} • ${item.price.toFixed(2)} each
                  </p>
                  <div className="cart-item-actions">
                    <label>
                      Quantity
                      <input
                        type="number"
                        min="1"
                        className="input qty-input"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value) || 1)
                        }
                        aria-label={`Quantity for ${item.name}`}
                      />
                    </label>
                    <button
                      type="button"
                      className="btn btn-link danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
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
            <Link to="/checkout" className="btn btn-primary btn-block btn-lg">
              Proceed to Checkout
            </Link>
            <p className="summary-note">Taxes calculated at checkout. Free shipping on orders over $100.</p>
          </aside>
        </div>
      </div>
    </main>
  )
}
