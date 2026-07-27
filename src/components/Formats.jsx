import { Icon } from './icons.jsx';
import { formats } from '../data.js';

export default function Formats() {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="section-number">04</span>
        <h2 className="section-title">Every way to show up</h2>
      </div>
      <div className="formats-grid">
        {formats.map((fmt) => (
          <div className="format-card" key={fmt.title}>
            <div className="format-icon">
              <Icon name={fmt.icon} />
            </div>
            <div className="format-title">{fmt.title}</div>
            <div className="format-desc">{fmt.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
