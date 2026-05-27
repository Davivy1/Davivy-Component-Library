import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="alert">
        <h3>Thank you, {formData.name}!</h3>
        <p>We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          autoComplete="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows="4"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm