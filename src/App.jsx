import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';
import BlobSection from './components/BlobSection';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-[Inter] text-white">
      <Navbar onShowProjects={toggleProjects} showProjects={showProjects} />

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