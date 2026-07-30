import { PhoneIcon, MailIcon, DocumentIcon } from './icons.jsx';
import { contact } from '../data.js';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <span className="accent-text">Fun</span>Asia
          </span>
          <span className="brand-tag">NETWORK</span>
        </a>
        <div className="header-actions">
          <a href={contact.telHref} className="btn btn-outline">
            <PhoneIcon />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a
            href="/media-kit/FunAsia-Network-Media-Kit.pdf"
            target="_blank"
            rel="noopener"
            className="btn btn-outline"
          >
            <DocumentIcon />
            <span>Media Kit</span>
          </a>
          <a href={contact.mailHref} className="btn btn-gradient">
            <MailIcon />
            <span>Email us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
