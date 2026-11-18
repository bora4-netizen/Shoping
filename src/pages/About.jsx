import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="page-header">
            <div>
              <p className="eyebrow">About ShopEase</p>
              <h1>We make online shopping simple, reliable, and enjoyable</h1>
              <p>
                ShopEase was created with one goal: to bring quality products and a
                seamless shopping experience together in one modern destination.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                To help people discover products they love through a curated catalog,
                transparent pricing, and a checkout experience that feels effortless.
                We focus on everyday essentials across electronics, fashion, home, and
                accessories.
              </p>
            </div>
            <div className="about-card">
              <h2>Our Vision</h2>
              <p>
                To become a trusted online store known for quality, convenience, and
                customer care—where every interaction, from browsing to delivery, is
                designed around your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Why ShopEase</p>
              <h2>What sets us apart</h2>
            </div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Curated Selection</h3>
              <p>We highlight products that combine style, usefulness, and dependable quality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Customer-First Service</h3>
              <p>From product questions to post-purchase support, we&apos;re here to help.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">03</div>
              <h3>Transparent Experience</h3>
              <p>Clear pricing, straightforward shipping, and easy returns with no surprises.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">04</div>
              <h3>Modern & Secure</h3>
              <p>A clean, responsive interface designed for confident shopping on any device.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Have questions or feedback?</h2>
              <p>We&apos;d love to hear from you. Reach out to our team anytime.</p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <Link to="/shop" className="btn btn-secondary btn-lg">Browse Products</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
