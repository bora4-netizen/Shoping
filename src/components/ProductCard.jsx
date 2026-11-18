import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} className="product-image-link">
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        </Link>
        <span className="product-chip">{product.category}</span>
      </div>
      <div className="product-info">
        <div className="product-meta">
          <p className="product-category">{product.category}</p>
          <p className="product-rating">★ {product.rating.toFixed(1)}</p>
        </div>
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-bottom">
          <div>
            <span className="product-price">${product.price.toFixed(2)}</span>
            <span className="price-sub">In stock</span>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
