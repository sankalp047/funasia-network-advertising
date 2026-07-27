import { PhoneIcon, MailIcon } from './icons.jsx';
import { contact } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark footer-brand-mark">
                <span className="accent-text">Fun</span>Asia
              </span>
              <span className="brand-tag footer-brand-tag">NETWORK</span>
            </div>
            <p className="footer-desc">
              The South Asian media network of Dallas–Fort Worth. Radio, digital, and programmatic
              advertising that reaches the community you want to grow with.
            </p>
          </div>
          <div>
            <div className="footer-heading">ADVERTISE</div>
            <a href={contact.telHref} className="footer-phone">
              <PhoneIcon size={16} />
              {contact.phoneDisplay}
            </a>
            <a href={contact.mailHref} className="footer-email">
              <MailIcon size={16} />
              {contact.emailDisplay}
            </a>
          </div>
          <div>
            <div className="footer-heading">ON AIR</div>
            <div className="footer-onair">
              104.9 FM<br />104.1 FM<br />Dallas–Fort Worth, TX
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} FunAsia Network. All rights reserved.</span>
          <span>Programmatic (DSP) · Full-Fledge Radio · DFW</span>
        </div>
      </div>
    </footer>
  );
}
