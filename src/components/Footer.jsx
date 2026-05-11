import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          <span style={{ color: 'var(--accent-1)' }}>&lt;</span>
          DO
          <span style={{ color: 'var(--accent-1)' }}>/&gt;</span>
        </span>
        <p className="footer__copy">
          © {new Date().getFullYear()} Daniel Ochinyabo · Built with React + Vite
        </p>
      </div>
    </footer>
  );
}