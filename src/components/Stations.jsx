import { stationMarkets, stationCount } from '../data.js';

export default function Stations() {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2 className="section-title">Owned & operated stations</h2>
      </div>
      <p className="section-copy stations-intro">
        {stationCount} stations across {stationMarkets.length} markets — pick the station that
        fits your audience, or run across the whole network.
      </p>
      <div className="markets-grid">
        {stationMarkets.map((m) => (
          <div className="market-block" key={m.market}>
            <div className="market-heading">
              <span className="market-name">{m.market}</span>
              <span className="market-count">{m.stations.length} STATIONS</span>
            </div>
            <div className="station-cards">
              {m.stations.map((s) => (
                <div className="station-card" key={s.name}>
                  <div className="station-logo">
                    <img src={s.logo} alt={s.name} loading="lazy" />
                  </div>
                  <div className="station-name">{s.name}</div>
                  <div className="station-freq">{s.freq}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
