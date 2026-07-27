import { Icon } from './icons.jsx';
import { reasons } from '../data.js';

export default function WhyUs() {
  return (
    <section className="section">
      <div className="whyus-grid">
        <div>
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2 className="section-title">A media partner, not a vendor.</h2>
          </div>
          <p className="whyus-copy">
            For over two decades we've been the connective tissue between brands and the South
            Asian community of North Texas. We know this audience because we are this audience.
          </p>
        </div>
        <div className="reasons-grid">
          {reasons.map((r) => (
            <div className="reason-cell" key={r.title}>
              <div className="reason-icon">
                <Icon name={r.icon} />
              </div>
              <div className="reason-title">{r.title}</div>
              <div className="reason-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
