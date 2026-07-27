import { tickerItems } from '../data.js';

function TickerTrack({ groupKey }) {
  return (
    <div className="ticker-group">
      {tickerItems.map((t, i) => (
        <span className="ticker-item" key={`${groupKey}-${i}`}>
          <span className="ticker-text">{t}</span>
          <span className="ticker-dot" />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <TickerTrack groupKey="a" />
        <TickerTrack groupKey="b" />
      </div>
    </div>
  );
}
