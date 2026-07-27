import { PhoneIcon } from './icons.jsx';
import { contact, stationMarkets, stationCount } from '../data.js';

const allStations = stationMarkets.flatMap((m) => m.stations);

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="pill pill-live">
        <span className="pulse-dot" />
        BROADCASTING ACROSS DALLAS–FORT WORTH
      </div>
      <h1 className="hero-title">
        Tap into DFW's booming <span className="gradient-text">South Asian</span> market.
      </h1>
      <div className="hero-grid">
        <div>
          <p className="hero-copy">
            One partner for full-fledge radio <em>and</em> precision programmatic — reaching 1M+
            engaged listeners and households, on air and online.
          </p>
          <div className="hero-ctas">
            <a href={contact.telHref} className="btn btn-solid">
              <PhoneIcon size={16} />
              Call {contact.phoneDisplay}
            </a>
            <a href={contact.mailHref} className="btn btn-line">
              Email our ad team
            </a>
          </div>
        </div>
        <div className="tuner-card">
          <div className="tuner-row">
            <span>OUR STATIONS</span>
            <span className="accent-text">{stationCount} STATIONS · 2 MARKETS</span>
          </div>
          <div className="stations-logo-grid">
            {allStations.map((s) => (
              <div className="stations-logo-tile" key={s.name} title={`${s.name} — ${s.freq}`}>
                <img src={s.logo} alt={s.name} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="stations-card-caption">Dallas–Fort Worth &amp; Dubai</div>
        </div>
      </div>
    </section>
  );
}
