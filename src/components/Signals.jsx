export default function Signals() {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="section-number">01</span>
        <h2 className="section-title">Two signals. One network.</h2>
      </div>
      <div className="signals-grid">
        <div className="signal-card">
          <div className="signal-body">
            <div className="signal-badge">
              <span className="pulse-dot pulse-dot-sm" />
              ON AIR
            </div>
            <div className="signal-eyebrow">FULL-FLEDGE RADIO</div>
            <h3 className="signal-title">Live on Dallas airwaves</h3>
            <p className="signal-copy">
              Broadcasting on full-fledge stations across DFW — 104.9 FM and 104.1 FM — with music,
              talk, and community programming a million listeners trust.
            </p>
            <ul className="signal-list">
              <li><span className="arrow">→</span>:15 / :30 / :60 spots & sponsorships</li>
              <li><span className="arrow">→</span>On-air talent reads & branded segments</li>
              <li><span className="arrow">→</span>Live event, contest & festival integrations</li>
            </ul>
          </div>
        </div>
        <div className="signal-card">
          <div className="signal-body">
            <div className="signal-badge">REAL-TIME</div>
            <div className="signal-eyebrow">PROGRAMMATIC · DSP</div>
            <h3 className="signal-title">Precision digital, at scale</h3>
            <p className="signal-copy">
              Programmatic campaigns through our demand-side platform — reaching South Asian
              households across display, video, CTV, and streaming audio with real-time targeting.
            </p>
            <ul className="signal-list">
              <li><span className="arrow">→</span>Audience & geo targeting down to the ZIP</li>
              <li><span className="arrow">→</span>Display, video, CTV/OTT & native inventory</li>
              <li><span className="arrow">→</span>Transparent reporting & optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
