import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import Signals from './components/Signals.jsx';
import Stations from './components/Stations.jsx';
import AudienceStats from './components/AudienceStats.jsx';
import Formats from './components/Formats.jsx';
import WhyUs from './components/WhyUs.jsx';
import Coverage from './components/Coverage.jsx';
import ClientLogos from './components/ClientLogos.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="page">
      <div className="page-glow" />
      <Header />
      <Hero />
      <Ticker />
      <Signals />
      <Stations />
      <AudienceStats />
      <Formats />
      <WhyUs />
      <Coverage />
      <ClientLogos />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
