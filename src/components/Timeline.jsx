import { timeline } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Timeline.css';

export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="reveal" ref={useScrollReveal()}>
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Timeline</h2>
          <p className="section-sub">From first commit to where I am now.</p>
        </div>

        <div className="timeline">
          <div className="timeline__line" />
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const ref = useScrollReveal();
  const isRight = index % 2 === 1;

  return (
    <div
      className={`timeline__item ${isRight ? 'timeline__item--right' : ''} reveal`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline__node">
        <span className="timeline__icon">{item.icon}</span>
      </div>

      <div className="timeline__card glass">
        <span className="timeline__year">{item.year}</span>
        <h3 className="timeline__title">{item.title}</h3>
        <p className="timeline__desc">{item.description}</p>
      </div>
    </div>
  );
}