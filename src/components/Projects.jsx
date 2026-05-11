import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal" ref={useScrollReveal()}>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">A selection of things I've shipped. More in progress.</p>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal();

  return (
    <div
      className="project-card glass reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-card__glow" style={{ background: project.color + '22' }} />

      <div className="project-card__header">
        <div className="project-card__icon" style={{ background: project.color + '22', borderColor: project.color + '44' }}>
          {project.title === 'Payroll System' ? '💼' : '🧠'}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tags">
        {project.tech.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}