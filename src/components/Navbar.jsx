import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Timeline', 'Contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled glass' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">&lt;</span>
          DO
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => handleLink(l)}>{l}</button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`bar ${menuOpen ? 'open' : ''}`} />
            <span className={`bar ${menuOpen ? 'open' : ''}`} />
            <span className={`bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}