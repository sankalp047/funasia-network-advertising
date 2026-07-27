const phoneDigits = '4694243188';
const email = 'sales@funasia.net';

export const contact = {
  phoneDisplay: '(469) 424-3188',
  emailDisplay: email,
  telHref: 'tel:+1' + phoneDigits,
  mailHref: 'mailto:' + email + '?subject=Advertising%20inquiry%20%E2%80%94%20FunAsia%20Network',
};

export const tickerItems = [
  '1M+ MONTHLY LISTENERS',
  '104.9 FM + 104.1 FM',
  '400K+ SOUTH ASIAN RESIDENTS',
  'PROGRAMMATIC · DSP',
  '$100K+ MEDIAN HOUSEHOLD INCOME',
  'FULL-FLEDGE RADIO',
  '25 YEARS ON AIR IN DFW',
];

export const stats = [
  { n: '400K+', label: 'South Asian residents in the metroplex' },
  { n: '$100K+', label: 'Median household income of the audience' },
  { n: '4th', label: 'Largest & fastest-growing U.S. metro' },
  { n: '25 yrs', label: 'Serving DFW on the air' },
];

export const formats = [
  { title: 'Radio Spots', desc: ':15, :30 and :60 commercials on 104.9 FM & 104.1 FM.', icon: 'radio' },
  { title: 'Display Ads', desc: 'High-impact banners across premium web inventory.', icon: 'display' },
  { title: 'Video & CTV/OTT', desc: 'Pre-roll and connected-TV video on the big screen.', icon: 'video' },
  { title: 'Streaming Audio', desc: 'Digital audio spots served alongside live streams.', icon: 'audio' },
  { title: 'Sponsorships', desc: 'Own a show, segment, contest, or on-air feature.', icon: 'sponsorship' },
  { title: 'Events & Festivals', desc: 'Live activations at FunAsia community events.', icon: 'events' },
];

export const reasons = [
  { title: 'Community trust', desc: 'Two decades as the voice South Asian DFW turns on daily.', icon: 'trust' },
  { title: 'First-party audience', desc: 'We know our listeners — and how to reach them precisely.', icon: 'audience' },
  { title: 'Bilingual creative', desc: 'In-language spots and ads that actually resonate.', icon: 'bilingual' },
  { title: 'Full-funnel reach', desc: 'Broadcast awareness plus programmatic performance.', icon: 'funnel' },
  { title: 'Local team', desc: 'A Dallas-based team that answers the phone.', icon: 'local' },
  { title: 'Measurable results', desc: 'Transparent reporting on spend, reach, and lift.', icon: 'results' },
];

export const cities = ['Dallas', 'Plano', 'Irving', 'Frisco', 'Richardson', 'Garland', 'Carrollton', 'Arlington', 'McKinney', 'Fort Worth'];

export const logos = [
  { name: 'H-E-B', logo: '/clients/heb.png' },
  { name: 'Choctaw Casino & Resort', logo: '/clients/choctaw-casino.png' },
  { name: 'Lexus', logo: '/clients/lexus.png' },
  { name: 'Tanishq', logo: '/clients/tanishq.png' },
  { name: 'Bawarchi Indian Restaurant', logo: '/clients/bawarchi.png' },
  { name: 'ZEE5', logo: '/clients/zee5.png' },
  { name: 'Zoho', logo: '/clients/zoho.png' },
];

export const stationMarkets = [
  {
    market: 'Dallas–Fort Worth',
    stations: [
      { name: 'FunAsia Radio', freq: '104.9 FM & 104.1 FM', logo: '/stations/funasia-radio.png' },
      { name: 'Apna Punjab', freq: '104.9 FM HD3', logo: '/stations/apna-punjab.png' },
      { name: 'Radio Caravan', freq: '104.1 FM HD3', logo: '/stations/radio-caravan.png' },
      { name: 'Radio Sangam', freq: '104.1 FM & 104.9 FM HD4', logo: '/stations/radio-sangam.png' },
      { name: 'Vanakkam FM', freq: '104.9 FM HD2', logo: '/stations/vanakkam-fm.png' },
    ],
  },
  {
    market: 'Dubai',
    stations: [
      { name: 'BIG 106.2', freq: '106.2 FM', logo: '/stations/big-1062.png' },
      { name: 'Big Melodies', freq: 'Easy listening', logo: '/stations/big-melodies.png' },
      { name: 'LUV 107.1', freq: '107.1 FM', logo: '/stations/luv-1071.png' },
      { name: 'LUV Legends', freq: 'Digital', logo: '/stations/luv-legends.png' },
      { name: 'Talk 100.3', freq: '100.3 FM', logo: '/stations/talk-1003.png' },
    ],
  },
];

export const stationCount = stationMarkets.reduce((n, m) => n + m.stations.length, 0);
