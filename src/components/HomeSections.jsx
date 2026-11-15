import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/BlueCapital.mp4';

const SLIDES = [
  { slug: 'helixgen', tag: 'HelixGen', title: 'HelixGen Cures First 12 Sickle Cell Patients With Single-Dose Gene Edit', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1000&q=80' },
  { slug: 'cortical-labs', tag: 'Cortical Labs', title: 'Synthetic biology and the new frontier in AI', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80' },
  { slug: 'notpla', tag: 'Notpla', title: 'A prize winning disappearing act', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&q=80' },
  { slug: 'terracarbon', tag: 'TerraCarbon', title: '36,000 Tonnes Of CO2 Removed A Year', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80' },
];

export default function HomeSections() {
  const [loaded, setLoaded] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!videoRef.current) return;
      const rect = videoRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, 1 - (rect.top - vh * 0.15) / (vh * 0.7)));
      setVideoProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCarouselIndex((p) => (p + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  const visible = [-1, 0, 1].map((offset) => {
    const idx = (carouselIndex + offset + SLIDES.length) % SLIDES.length;
    return { ...SLIDES[idx], offset, idx };
  });

  return (
    <main className="overflow-hidden bg-black text-white">

      {/* HERO */}
      <section className="overflow-hidden bg-black px-5 pb-[40px] pt-[100px] md:px-10 md:pb-[20px] md:pt-[170px]">
        <h1 className={`hidden md:block m-0 block pt-2 font-['Archivo_Black'] leading-[1.05] tracking-[-0.02em] text-white transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} whitespace-normal text-[9.5vw] md:whitespace-nowrap md:text-[6.5vw]`}>
          BLUE CAPITAL HORIZON
        </h1>
        <p className={`mb-0 mt-[40px] max-w-[1100px] font-['Playfair_Display'] text-[clamp(26px,4.2vw,58px)] font-bold italic leading-[1.15] text-white transition-all delay-200 duration-1000 md:mt-[70px] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Investing in the deep science and<br className="hidden md:block" />
          technology that can propel humanity<br className="hidden md:block" />
          towards a radically better future.
        </p>
      </section>

      {/* VIDEO */}
      <section ref={videoRef} className="flex justify-center overflow-hidden bg-black px-3 pt-6 md:px-5 md:pt-8">
        <div className={`relative aspect-[16/9] w-full max-w-[880px] max-h-[480px] shrink-0 origin-top overflow-hidden bg-[#111] transition-all duration-700 ease-out ${videoProgress > 0.5 ? 'scale-100 rounded-[8px] opacity-100' : 'scale-[0.85] rounded-[20px] opacity-70'}`}>
          <video className="block h-full w-full object-cover" autoPlay muted loop playsInline src={heroVideo} />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-3.5 py-2.5 text-[12px] text-white/80">
          </div>
        </div>
      </section>

      {/* CAROUSEL — READ ARTICLE NOW LINKS TO NEWS */}
      <section
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative -mt-6 overflow-hidden bg-black px-4 pb-20 pt-16 md:-mt-10"
      >
        <button onClick={() => setCarouselIndex((carouselIndex - 1 + SLIDES.length) % SLIDES.length)} className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer border-none bg-white/10 backdrop-blur rounded-full p-2 text-white hover:bg-white/20 transition">
          <ChevronLeft size={28} />
        </button>
        <button onClick={() => setCarouselIndex((carouselIndex + 1) % SLIDES.length)} className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer border-none bg-white/10 backdrop-blur rounded-full p-2 text-white hover:bg-white/20 transition">
          <ChevronRight size={28} />
        </button>

        <div className="flex items-center justify-center gap-6">
          {visible.map((s) => {
            const isCenter = s.offset === 0;
            return (
              <div
                key={s.idx}
                onClick={() => !isCenter && setCarouselIndex(s.idx)}
                className={`relative shrink-0 cursor-pointer overflow-hidden rounded-full transition-all duration-700 ${isCenter ? 'h-[80vw] w-[80vw] scale-100 opacity-100 md:h-[min(60vw,560px)] md:w-[min(60vw,560px)]' : 'hidden h-[min(35vw,320px)] w-[min(35vw,320px)] scale-[0.92] opacity-45 md:block'}`}
              >
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/55" />
                {isCenter && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
                    <p className="mb-2.5 text-[12px] text-white/80">{s.tag}</p>
                    <h3 className="m-0 font-['Playfair_Display'] text-[clamp(20px,3vw,32px)] italic leading-[1.1] text-white">{s.title}</h3>
                    <Link
                      to={`/news#${s.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-5 border-b border-white/50 pb-1 text-[11px] font-semibold tracking-[0.25em] text-white hover:text-[#e86a3a] hover:border-[#e86a3a] transition"
                    >
                      READ ARTICLE
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => setCarouselIndex(idx)} className={`h-1 rounded-full border-none transition-all duration-300 ${idx === carouselIndex ? 'w-10 bg-white' : 'w-4 bg-white/30'}`} />
          ))}
        </div>
      </section>
    </main>
  );
}