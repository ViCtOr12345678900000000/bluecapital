import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowLogo(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  const linkClass = "text-[13px] font-semibold tracking-[0.08em] text-white hover:opacity-70 transition";
  const mobileLinkClass = "block py-4 font-['Archivo_Black'] text-[28px] leading-[1.1] text-white border-b border-white/10";

  const isSubPage = pathname === '/news' || pathname === '/projects' || pathname === '/about';

  return (
    <header className="fixed inset-x-0 top-0 z-[90]">

      {/* ===== DESKTOP NAVBAR — LINKS JUSTIFY-BETWEEN AGAIN ===== */}
      <nav className="relative mx-auto hidden h-[72px] max-w-[1600px] items-center bg-black border-b border-white/10 px-6 lg:px-10 md:flex">
        {/* All 4 links spread edge-to-edge */}
        <div className="flex w-full items-center justify-between">
          <NavLink to="/news" className={linkClass}>NEWS</NavLink>
          <NavLink to="/about" className={linkClass}>ABOUT</NavLink>
          <NavLink to="/portfolio" className={linkClass}>PORTFOLIO</NavLink>
          <NavLink to="/contact" className={linkClass}>CONTACT</NavLink>
        </div>

        {/* CENTER LOGO — true center, appears on scroll */}
        <div className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${showLogo ? '-translate-y-1/2 opacity-100' : '-translate-y-[30%] opacity-0'}`}>
          <Link to="/" className="pointer-events-auto font-['Archivo_Black'] text-[clamp(10px,1.1vw,14px)] text-white">
            BLUE CAPITAL HORIZON
          </Link>
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

        <Link to="/" className="font-['Archivo_Black'] text-[11px] tracking-[0.02em] text-white whitespace-nowrap">
          BLUE CAPITAL HORIZON
        </Link>


      </nav>

      {/* ===== MOBILE DROPDOWN ===== */}
      <div className={`overflow-hidden bg-black transition-all duration-500 md:hidden ${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-6 pt-2">
          <NavLink to={pathname === '/news' ? '/' : '/news'} className={mobileLinkClass}>
            {pathname === '/news' ? '← BACK HOME' : 'NEWS →'}
          </NavLink>

          <NavLink to={pathname === '/about' ? '/' : '/about'} className={mobileLinkClass}>
            {pathname === '/about' ? '← BACK HOME' : 'ABOUT →'}
          </NavLink>

          <NavLink to={pathname === '/portfolio' ? '/' : '/portfolio'} className={mobileLinkClass}>
            {pathname === '/portfolio' ? '← BACK HOME' : 'PORTFOLIO →'}
          </NavLink>

          <NavLink to={pathname === '/projects' ? '/' : '/projects'} className={mobileLinkClass}>
            {pathname === '/projects' ? '← BACK HOME' : 'PROJECTS →'}
          </NavLink>

          <NavLink to={pathname === '/contact' ? '/' : '/contact'} className={mobileLinkClass}>
            {pathname === '/contact' ? '← BACK HOME' : 'CONTACT →'}
          </NavLink>

          <p className="mt-5 font-['Playfair_Display'] text-[16px] italic text-white/60">
            Investing in deep science for a radically better future.
          </p>
        </div>
      </div>
    </header>
  );
}