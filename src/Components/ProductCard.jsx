function ProductCard({ image, title, price, rating }) {
  return (
    <div className="product-card" role="article" aria-label={title}>
      <img
        src={image}
        alt={title}
        className="product-image"
        loading="lazy"
      />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-bottom">
          <span className="product-price">${price}</span>
          <span className="product-rating" aria-label={`Rating: ${rating} out of 5`}>
            ★ {rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard