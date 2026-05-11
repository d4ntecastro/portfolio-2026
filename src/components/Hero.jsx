import { profile } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__content">
        <div className="hero__badge glass-sm">
          <span className="hero__dot" />
          Available for opportunities
        </div>

        <h1 className="hero__name">
          {profile.name.split(' ').map((word, i) => (
            <span key={i} className="hero__name-word" style={{ animationDelay: `${i * 0.12}s` }}>
              {word}
            </span>
          ))}
        </h1>

        <div className="hero__title-line">
          <span className="hero__title-text">{profile.title}</span>
          <span className="hero__title-sep">·</span>
          <span className="hero__title-focus">{profile.focus}</span>
        </div>

        <p className="hero__tagline">{profile.tagline}</p>

        <p className="hero__about">{profile.about}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn-liquid" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <span>View My Work</span>
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            Get in Touch
          </a>
        </div>

        <div className="hero__scroll">
          <div className="scroll-pill">
            <div className="scroll-dot" />
          </div>
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
}