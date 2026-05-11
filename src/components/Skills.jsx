import { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const categories = [...new Set(skills.map(s => s.category))];

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('filled');
          }
        });
      },
      { threshold: 0.3 }
    );

    barsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal" ref={useScrollReveal()}>
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills & Stack</h2>
          <p className="section-sub">A range of languages, frameworks, and tools I've picked up along the way.</p>
        </div>

        <div className="skills__categories">
          {categories.map((cat) => (
            <div key={cat} className="skills__category reveal" ref={useScrollReveal()}>
              <h3 className="skills__cat-title">{cat}</h3>
              <div className="skills__list">
                {skills.filter(s => s.category === cat).map((skill, i) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-row__header">
                      <span className="skill-row__name">{skill.name}</span>
                      <span className="skill-row__pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar__fill"
                        ref={el => barsRef.current.push(el)}
                        style={{ '--target-width': `${skill.level}%`, transitionDelay: `${i * 0.08}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}