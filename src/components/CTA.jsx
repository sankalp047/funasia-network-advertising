import { PhoneIcon } from './icons.jsx';
import { RadarRings } from './icons.jsx';
import { contact } from '../data.js';

export default function CTA() {
  return (
    <section className="section">
      <div className="cta-panel">
        <div className="cta-content">
          <h2 className="cta-title">Let's build your DFW campaign.</h2>
          <p className="cta-copy">
            Talk to our advertising team about radio, programmatic, or a combined plan built
            around your goals and budget.
          </p>
          <div className="cta-ctas">
            <a href={contact.telHref} className="btn btn-dark">
              <PhoneIcon size={16} />
              Call {contact.phoneDisplay}
            </a>
            <a href={contact.mailHref} className="btn btn-translucent">
              {contact.emailDisplay}
            </a>
          </div>
        </div>
        <div className="cta-radar">
          <RadarRings />
        </div>
      </div>
    </section>
  );
}
