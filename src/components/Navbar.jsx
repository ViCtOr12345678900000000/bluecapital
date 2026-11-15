import { useEffect, useState } from 'react';

export default function Navbar({ onShowProjects, showProjects }) {
  const [showLogo, setShowLogo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowLogo(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = "text-[13px] font-semibold tracking-[0.08em] text-white hover:opacity-70 transition";
  const mobileLinkClass = "block py-4 font-['Archivo_Black'] text-[28px] leading-[1.1] text-white border-b border-white/10";

  return (
    <header className="fixed inset-x-0 top-0 z-[90]">

      {/* ===== PROJECTS PILL — ON TOP OF NAVBAR — md + lg ===== */}
      {/* Was: hidden md:flex lg:hidden — Now: visible on ALL desktop sizes */}
      <div className="hidden md:flex items-center justify-center bg-black pt-3 pb-1">
        <button
          onClick={onShowProjects}
          className={`flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.25em] transition-all duration-300 ${
            showProjects
              ? 'bg-white text-black'
              : 'border border-white/30 bg-black text-white hover:border-white hover:bg-white hover:text-black'
          }`}
        >
          {showProjects ? (
            <><span className="text-[14px] leading-none">←</span> BACK HOME</>
          ) : (
            <>PROJECTS</>
          )}
        </button>
      </div>

      {/* ===== DESKTOP NAVBAR — md + lg ===== */}
      <nav className="relative mx-auto hidden h-[72px] max-w-[1600px] items-center justify-between bg-black border-b border-white/10 px-6 lg:px-10 md:flex">

        {/* LEFT LINKS */}
        <div className="flex items-center gap-10">
          <a href="#news" className={linkClass}>NEWS</a>
          <a href="#about" className={linkClass}>ABOUT</a>
        </div>

        {/* CENTER LOGO — TRUE CENTER, appears on scroll */}
        <div className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${
          showLogo ? '-translate-y-1/2 opacity-100' : '-translate-y-[30%] opacity-0'
        }`}>
          <span className="font-['Archivo_Black'] text-[clamp(10px,1.1vw,14px)] tracking-[-0.01em] text-white">
            BLUE CAPITAL HORIZON
          </span>
        </div>

        {/* RIGHT LINKS — PROJECTS removed from here on all desktop */}
        <div className="flex items-center gap-10">
          <a href="#portfolio" className={linkClass}>PORTFOLIO</a>
          <a href="#contact" className={linkClass}>CONTACT</a>
        </div>
      </nav>

      {/* ===== MOBILE NAVBAR ===== */}
      <nav className="flex h-[64px] items-center justify-between bg-black border-b border-white/10 px-5 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-start justify-center gap-[6px] border-none bg-transparent"
          aria-label="Menu"
        >
          <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 translate-y-[8px] rotate-45' : 'w-6'}`} />
          <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 opacity-0' : 'w-4'}`} />
          <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 -translate-y-[8px] -rotate-45' : 'w-6'}`} />
        </button>

        <span className="font-['Archivo_Black'] text-[11px] tracking-[0.02em] text-white whitespace-nowrap">
          BLUE CAPITAL HORIZON
        </span>

        <button
          onClick={onShowProjects}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] transition-all duration-300 ${
            showProjects ? 'bg-white text-black' : 'border border-white/30 bg-transparent text-white'
          }`}
        >
          {showProjects ? (
            <><span className="text-[13px] leading-none">←</span> BACK</>
          ) : (
            <>PROJECTS</>
          )}
        </button>
      </nav>

      {/* ===== MOBILE DROPDOWN ===== */}
      <div className={`overflow-hidden bg-black transition-all duration-500 md:hidden ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-6 pt-2">
          <a href="#news" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>NEWS</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>ABOUT</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>PORTFOLIO</a>
          <button onClick={() => { onShowProjects(); setMenuOpen(false); }} className={`${mobileLinkClass} w-full bg-transparent text-left`}>
            {showProjects ? '← BACK HOME' : 'PROJECTS →'}
          </button>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>CONTACT</a>
          <p className="mt-5 font-['Playfair_Display'] text-[16px] italic text-white/60">
            Investing in deep science for a radically better future.
          </p>
        </div>
      </div>
    </header>
  );
}