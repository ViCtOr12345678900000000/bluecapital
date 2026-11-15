import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';
import BlobSection from './components/BlobSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-[Inter] text-white">
      <Navbar />
      <HomeSections />
      <BlobSection />
      <Footer />
    </div>
  );
}