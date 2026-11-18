import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <main className="section">
        <div className="container">
          <div className="empty-state">
            <h1>Product not found</h1>
            <p>The product you are looking for does not exist or may have been removed.</p>
            <Link to="/shop" className="btn btn-primary">
              Back to Shop
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <div className="container">
        <Link to="/shop" className="text-link back-link">
          ← Back to shop
        </Link>
        <div className="product-detail">
          <div className="detail-gallery">
            <img src={product.image} alt={product.name} className="detail-image" />
          </div>
          <div className="detail-info">
            <div className="detail-top">
              <span className="badge">{product.category}</span>
              <span className="badge">★ {product.rating.toFixed(1)} rating</span>
            </div>
            <h1>{product.name}</h1>
            <div className="detail-price-row">
              <span className="detail-price">${product.price.toFixed(2)}</span>
              <span className="badge">In stock</span>
            </div>
            <p className="detail-description">{product.description}</p>
            <ul className="detail-highlights">
              <li>Free shipping on orders over $100</li>
              <li>30-day hassle-free returns</li>
              <li>Secure checkout and payment protection</li>
              <li>Fast order processing and delivery updates</li>
            </ul>
            <div className="detail-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-secondary btn-lg">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
