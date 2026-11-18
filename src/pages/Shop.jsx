import { useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const PAGE_SIZE = 8

export default function Shop() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)

  const categories = useMemo(
    () => ['All', ...new Set(products.map((p) => p.category))],
    [],
  )

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesQuery = product.name
        .toLowerCase()
        .includes(query.toLowerCase().trim())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

  useEffect(() => {
    setPage(1)
  }, [query, category])

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [page, totalPages])

  const startIndex = (page - 1) * PAGE_SIZE
  const paginated = filtered.slice(startIndex, startIndex + PAGE_SIZE)
  const showingFrom = filtered.length === 0 ? 0 : startIndex + 1
  const showingTo = Math.min(startIndex + PAGE_SIZE, filtered.length)

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <main className="section">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="eyebrow">Catalog</p>
            <h1>Shop All Products</h1>
            <p>Explore our curated selection of electronics, fashion, home, and accessories.</p>
          </div>
        </div>

        <div className="filters-bar">
          <input
            type="search"
            className="input"
            placeholder="Search by product name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
          <select
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All categories' : c}
              </option>
            ))}
          </select>
        </div>

        <div className="results-meta">
          <span>
            Showing <strong>{showingFrom}-{showingTo}</strong> of{' '}
            <strong>{filtered.length}</strong> {filtered.length === 1 ? 'product' : 'products'}
          </span>
          {(query || category !== 'All') && (
            <button
              type="button"
              className="btn-link"
              onClick={() => {
                setQuery('')
                setCategory('All')
                setPage(1)
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try adjusting your search or selecting a different category.</p>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="pagination" aria-label="Product pagination">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </button>

                <div className="pagination-pages">
                  {pageNumbers.map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`page-btn ${num === page ? 'active' : ''}`}
                      onClick={() => setPage(num)}
                      aria-current={num === page ? 'page' : undefined}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </nav>
            )}
          </>
        )}
      </div>
    </main>
  )
}
