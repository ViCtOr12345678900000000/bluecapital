import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';
import BlobSection from './components/BlobSection';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-[Inter] text-white">

      {/* TOP-LEFT PROJECTS BUTTON */}
      <div className="fixed left-4 top-4 z-[100] md:left-6 md:top-5">
        <button
          onClick={() => {
            setShowProjects(!showProjects);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.25em] transition-all duration-300 ${
            showProjects
              ? 'border-white bg-white text-black'
              : 'border-white/30 bg-black/60 text-white backdrop-blur hover:border-white hover:bg-white hover:text-black'
          }`}
        >
          {showProjects ? '← BACK HOME' : 'PROJECTS'}
        </button>
      </div>

      <Navbar />

      {showProjects ? (
        <Projects />
      ) : (
        <>
          <HomeSections />
          <BlobSection />
        </>
      )}

      <Footer />
    </div>
  );
}