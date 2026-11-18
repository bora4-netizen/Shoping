import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Premium everyday essentials</p>
            <h1>Shop smarter with a store built for modern life</h1>
            <p className="hero-text">
              Discover thoughtfully selected electronics, fashion, home goods, and
              accessories. Enjoy a seamless shopping experience from browse to checkout.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary btn-lg">
                Explore Collection
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Learn More
              </Link>
            </div>
            <div className="hero-trust">
              <span>✓ Free shipping over $100</span>
              <span>✓ Secure checkout</span>
              <span>✓ 30-day returns</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Store highlights">
            <span className="badge">Why customers choose us</span>
            <h3>Quality, convenience, and care in every order</h3>
            <p>
              From curated picks to reliable support, we focus on making online
              shopping simple and dependable.
            </p>
            <div className="hero-stats">
              <div className="stat-card">
                <strong>10k+</strong>
                <span>Happy customers</span>
              </div>
              <div className="stat-card">
                <strong>4.8/5</strong>
                <span>Average rating</span>
              </div>
              <div className="stat-card">
                <strong>24h</strong>
                <span>Fast dispatch</span>
              </div>
              <div className="stat-card">
                <strong>30 days</strong>
                <span>Easy returns</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Featured</p>
              <h2>Popular picks this week</h2>
              <p>Top-rated products chosen for quality, style, and value.</p>
            </div>
            <Link to="/shop" className="btn btn-secondary">
              View all products
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Our promise</p>
              <h2>A better shopping experience</h2>
            </div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Fast & Reliable Delivery</h3>
              <p>Orders are processed quickly with clear updates from dispatch to delivery.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Secure Payments</h3>
              <p>Checkout is designed with a smooth, secure flow to protect your information.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">03</div>
              <h3>Curated Quality</h3>
              <p>We highlight products that balance performance, durability, and everyday value.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">04</div>
              <h3>Dedicated Support</h3>
              <p>Need help? Our team is ready to assist with orders, returns, and product questions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
