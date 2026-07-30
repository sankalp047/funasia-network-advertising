const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function PhoneIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

const paths = {
  radio: <><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1.5" fill="currentColor" /></>,
  display: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></>,
  video: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="m10 9 5 3-5 3z" /></>,
  audio: <path d="M2 12h3l3-8 4 16 3-8h4" />,
  sponsorship: <path d="M12 2 4 5v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V5z" />,
  events: <><path d="M8 2v4M16 2v4M3 10h18" /><rect x="3" y="4" width="18" height="18" rx="2" /></>,
  trust: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  audience: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
  bilingual: <path d="M5 8h9M9 3v5M12 20l4-9 4 9M13.5 17h5" />,
  funnel: <path d="M22 3H2l8 9.5V19l4 2v-8.5z" />,
  local: <><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  results: <><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></>,
};

export function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      {paths[name]}
    </svg>
  );
}

export function DocumentIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h6M9 11h2" />
    </svg>
  );
}

export function RadarRings() {
  return (
    <div className="radar">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="radar-ring" style={{ animationDelay: `${i * 1.1}s` }} />
      ))}
      <span className="radar-dot" />
    </div>
  );
}
