import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">Davivy</a>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#features" className="nav-link" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar