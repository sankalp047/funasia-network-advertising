import { cities } from '../data.js';

export default function Coverage() {
  return (
    <section className="section">
      <div className="coverage-grid">
        <div>
          <div className="section-heading">
            <span className="section-number">06</span>
            <h2 className="section-title">Blanketing the metroplex</h2>
          </div>
          <p className="coverage-copy">
            From Plano and Irving to Frisco, Richardson, and beyond — our signal and our digital
            reach cover the neighborhoods where the South Asian community lives, works, and shops.
          </p>
          <div className="city-pills">
            {cities.map((c) => (
              <span className="city-pill" key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="coverage-media">
          <img src="/coverage/kzmp-104-9-fm-coverage.png" alt="KZMP-FM 104.9 coverage map — local, distant, and fringe signal reach across DFW" />
          <div className="coverage-caption">104.9 FM (KZMP) signal coverage</div>
        </div>
      </div>
    </section>
  );
}
