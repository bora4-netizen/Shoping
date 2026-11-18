import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">S</span>
            <span>ShopEase</span>
          </Link>
          <p>
            A modern online shopping experience with curated products, simple
            checkout, and customer-first service.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/cart">Your Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>support@shopease.example</li>
            <li>+1 (555) 123-4567</li>
            <li>Mon–Fri, 9:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ShopEase. All rights reserved.</span>
        <span>Secure payments • Fast delivery • Easy returns</span>
      </div>
    </footer>
  )
}
