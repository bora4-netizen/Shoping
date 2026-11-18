import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { itemCount } = useCart()

  return (
    <>
      <div className="announcement-bar">
        <div className="container">
          <span>Free shipping on orders over $100 • 30-day returns</span>
        </div>
      </div>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="brand" aria-label="ShopEase home">
            <span className="brand-mark">S</span>
            <span>ShopEase</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/cart" className="cart-link">
              Cart
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
