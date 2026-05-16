import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import FeatureCard from './components/FeatureCard'
import TestimonialCard from './components/TestimonialCard'
import Modal from './components/Modal'
import ContactForm from './components/ContactForm'
import BottleImg from './assets/edp.png'

const features = [
  {
    title: "Premium Ingredients",
    text: "Sourced from the finest gardens of Grasse, Madagascar, and the Himalayas.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    title: "Long-Lasting Scent",
    text: "Our advanced formulation ensures the fragrance lingers elegantly for up to 12 hours.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  },
  {
    title: "Cruelty-Free",
    text: "Ethically crafted with zero animal testing. Beauty that respects all living beings.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  },
  {
    title: "Elegant Packaging",
    text: "Hand-finished glass bottles with gold accents, designed to grace any vanity.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  }
]

const testimonials = [
  {
    stars: "★★★★★",
    text: "Davivy is absolutely mesmerizing. The scent is sophisticated without being overpowering.",
    initials: "SA",
    name: "Sarah Adeyemi",
    role: "Fashion Blogger"
  },
  {
    stars: "★★★★★",
    text: "The longevity is incredible. One spray in the morning and I can still smell it by evening.",
    initials: "MK",
    name: "Michael K.",
    role: "Entrepreneur"
  },
  {
    stars: "★★★★★",
    text: "I gifted Davivy to my boyfriend and he fell in love instantly. Highly recommended!",
    initials: "JO",
    name: "James Okafor",
    role: "Verified Buyer"
  }
]

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-subtitle">Luxury Redefined</p>
          <h1 className="hero-title">Davivy</h1>
          <p className="hero-description">
            A fragrance that captures the essence of sophistication.
            Crafted with rare ingredients from around the world,
            Davivy is more than a scent — it is a statement.
          </p>
          <Button label="Discover Davivy" variant="primary" />
        </div>
      </section>

      {/* Bottle Image */}
      <section className="bottle-section" id="hero-product">
        <img src="davivy-components/src/assets/edp.png" alt="Davivy Perfume Bottle" className="bottle-img" />
      </section>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-header">
          <p className="section-eyebrow">Why Davivy</p>
          <h2 className="section-title">Unmatched Craftsmanship</h2>
          <p className="section-desc">Every bottle tells a story of passion, precision, and perfection.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title">Loved by Many</h2>
          <p className="section-desc">Hear what our customers say about their Davivy experience.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              stars={t.stars}
              text={t.text}
              initials={t.initials}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <h2 className="cta-title">Experience Davivy Today</h2>
        <p className="cta-desc">Limited edition bottles available now.</p>
        <Modal buttonLabel="Shop Now" />
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="section-header">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
        </div>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-logo">Davivy</p>
        <p className="footer-tagline">Essence of Elegance</p>
        <p className="footer-copy">&copy; 2026 Davivy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App