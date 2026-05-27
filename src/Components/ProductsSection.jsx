import { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'

function ProductsSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load products')
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="loading-text">Loading products...</p>
  if (error) return <p className="error-text">{error}</p>

  return (
    <section className="products-section" id="products" aria-label="Products">
      <div className="section-header">
        <p className="section-eyebrow">Our Collection</p>
        <h2 className="section-title">Shop Davivy</h2>
        <p className="section-desc">Explore our exclusive range of luxury fragrances.</p>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection