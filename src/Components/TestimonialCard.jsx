function TestimonialCard({ stars, text, initials, name, role }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">{stars}</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">{initials}</div>
        <div className="author-info">
          <p className="author-name">{name}</p>
          <p className="author-role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard