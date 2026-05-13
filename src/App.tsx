import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import ThesisGuidance from './pages/services/thesis-guidance/ThesisGuidance';
import ResearchProposal from './pages/services/research-proposal/ResearchProposal';
import InstrumentDesign from './pages/services/instrument-design/InstrumentDesign';
import DataAnalysis from './pages/services/data-analysis/DataAnalysis';
import PublicationSupport from './pages/services/publication-support/PublicationSupport';
import ResearchWorkshops from './pages/services/research-workshops/ResearchWorkshops';
import Contact from './pages/contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="antialiased">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/thesis-guidance" element={<ThesisGuidance />} />
            <Route path="/services/research-proposal" element={<ResearchProposal />} />
            <Route path="/services/instrument-design" element={<InstrumentDesign />} />
            <Route path="/services/data-analysis" element={<DataAnalysis />} />
            <Route path="/services/publication-support" element={<PublicationSupport />} />
            <Route path="/services/research-workshops" element={<ResearchWorkshops />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </div>
    </BrowserRouter>
  );
}
