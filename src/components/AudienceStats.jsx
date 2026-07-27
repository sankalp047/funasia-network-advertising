import { RadarRings } from './icons.jsx';
import { stats } from '../data.js';

export default function AudienceStats() {
  return (
    <section className="section">
      <div className="audience-grid">
        <div className="radar-frame">
          <div className="radar-layer">
            <RadarRings />
          </div>
          <div className="radar-center">
            <div className="radar-number gradient-text">1M+</div>
            <div className="radar-label">MONTHLY REACH</div>
          </div>
        </div>
        <div>
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2 className="section-title">An audience you can't buy anywhere else.</h2>
          </div>
          <p className="section-copy">
            Affluent, brand-loyal, and highly engaged — the DFW South Asian community over-indexes
            on income, education, and purchase intent.
          </p>
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-cell" key={s.label}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
