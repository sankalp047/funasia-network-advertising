import { logos } from '../data.js';

function LogoGroup({ groupKey }) {
  return (
    <div className="logos-group">
      {logos.map((lg) => (
        <div className="logo-cell" key={`${groupKey}-${lg.name}`} title={lg.name}>
          <img src={lg.logo} alt={lg.name} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="section section-logos">
      <div className="logos-heading">TRUSTED BY BRANDS ADVERTISING TO DFW</div>
      <div className="logos-carousel">
        <div className="logos-track">
          <LogoGroup groupKey="a" />
          <LogoGroup groupKey="b" />
        </div>
      </div>
    </section>
  );
}
