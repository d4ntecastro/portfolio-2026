import { profile } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const facts = [
  { label: 'University', value: 'University of Lagos', icon: '🎓' },
  { label: 'Year', value: '3rd Year CS Student', icon: '📚' },
  { label: 'Started', value: '2023', icon: '🚀' },
  { label: 'Current Focus', value: 'Machine Learning', icon: '🤖' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal" ref={useScrollReveal()}>
            <p>{profile.about}</p>
            <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
              When I'm not writing code, I'm reading about it. I'm drawn to the intersection of systems thinking and machine intelligence — building things that are fast, reliable, and eventually, smart.
            </p>
            <div className="about__links">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-liquid">
                <span>GitHub Profile</span>
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">Contact Me</a>
            </div>
          </div>

          <div className="about__facts">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className="about__fact glass reveal"
                ref={useScrollReveal()}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="fact__icon">{f.icon}</span>
                <div>
                  <p className="fact__label">{f.label}</p>
                  <p className="fact__value">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}