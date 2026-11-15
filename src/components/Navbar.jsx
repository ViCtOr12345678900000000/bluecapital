import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowLogo(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['NEWS', 'ABOUT', 'PORTFOLIO', 'CONTACT'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* DESKTOP - always black, no gradient */}
{/* DESKTOP - always black */}
<nav className="relative mx-auto hidden md:flex h-[72px] max-w-[1600px] items-center justify-between px-6 lg:px-10 bg-black border-b border-white/10">
  <a href="#news" className="text-[12px] lg:text-[13px] font-semibold tracking-[0.08em] text-white">NEWS</a>
  <a href="#about" className="text-[12px] lg:text-[13px] font-semibold tracking-[0.08em] text-white">ABOUT</a>

  {/* CENTER LOGO - smaller on md, normal on lg */}
  <div className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-22 whitespace-nowrap transition-all duration-500 ${showLogo ? '-translate-y-4.5 opacity-100' : '-translate-y-[30%] opacity-0'}`}>
    <span className="font-['Archivo_Black'] text-[clamp(9px,1.1vw,14px)] text-white">BLUE CAPITAL HORIZON</span>
  </div>

  <a href="#portfolio" className="text-[12px] lg:text-[13px] font-semibold tracking-[0.08em] text-white">PORTFOLIO</a>
  <a href="#contact" className="text-[12px] lg:text-[13px] font-semibold tracking-[0.08em] text-white">CONTACT</a>
</nav>

      {/* MOBILE BAR - BLACK when closed, GRADIENT when opened */}
      <nav className={`flex md:hidden h-[60px] items-center justify-between px-4 border-b border-white/10 transition-all duration-500 ${open ? 'bg-gradient-to-r from-black via-zinc-900 to-zinc-400' : 'bg-black'}`}>
        {/* Hamburger - LEFT - Lucide icon */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center bg-transparent border-none cursor-pointer text-white"
          aria-label="Menu"
        >
          {open ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
        </button>

        {/* Logo - RIGHT */}
        <span className="font-['Archivo_Black'] text-[11px] leading-[1.1] tracking-[0.02em] text-white text-right">
          BLUE CAPITAL<br />HORIZON
        </span>
      </nav>

      {/* MOBILE DROPDOWN - also gradient when opened */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-[320px] opacity-100 bg-gradient-to-b from-black via-zinc-900 to-zinc-500' : 'max-h-0 opacity-0 bg-black'}`}>
        <div className="flex flex-col px-6 py-2 gap-1">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/15 py-3.5 text-[14px] font-semibold tracking-[0.15em] text-white last:border-0"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}