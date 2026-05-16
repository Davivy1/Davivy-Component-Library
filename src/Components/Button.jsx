function Button({ label, variant, size, onClick }) {
  return (
    <button
      className={`btn btn-${variant} ${size === 'large' ? 'btn-large' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button