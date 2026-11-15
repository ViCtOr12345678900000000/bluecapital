import { Link, NavLink, useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function Footer() {
  const { pathname, hash } = useLocation();

  // Active = orange like HOME was, inactive = white
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-[#e86a3a]'
      : 'text-white hover:text-white/70 transition';

  // For #portfolio / #contact — they are on Home, so check hash
  const isPortfolioActive = pathname === '/' && hash === '#portfolio';
  const isContactActive = pathname === '/' && hash === '#contact';

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="h-px w-full bg-white/70" />
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between md:py-10">
          <Link to="/" className="flex flex-col leading-none select-none">
            <span className="flex items-baseline font-['Archivo_Black'] gap-2 text-[28px] md:text-[32px] tracking-[-0.02em] text-[#8a8a8a]">
              Blue
              <span className="font-['Playfair_Display'] mx-[1px] text-[38px] md:text-[44px] leading-[0.8] text-[#a8a8a8] tracking-tight mr-[-6px] font-bold">C</span>
              apital Horizon
            </span>
            <span className="mt-1 ml-[88px] md:ml-[102px] text-[11px] md:text-[12px] tracking-[0.35em] text-[#8a8a8a]">HORIZONTE DE CAPITAL AZUL</span>
          </Link>
          <div className="flex flex-col gap-2 md:flex-row md:gap-12 text-[13px] md:text-[14px]">
            <a href="mailto:general@bluecapitalhorizon.com" className="hover:text-white/70 transition">
              Contact: <span className="font-semibold">general@bluecapitalhorizon.com</span>
            </a>
            <a href="mailto:press@bluecapitalhorizon.com" className="hover:text-white/70 transition">
              Press: <span className="font-semibold">press@bluecapitalhorizon.com</span>
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-white/70" />
        <div className="flex items-center justify-between py-5">
          <nav className="flex flex-1 items-center justify-between pr-6 md:pr-10 text-[11px] md:text-[12px] font-semibold tracking-[0.08em]">
            {/* HOME — active only on exact / with no hash */}
            <NavLink to="/" end className={navClass}>HOME</NavLink>
            <NavLink to="/news" className={navClass}>NEWS</NavLink>
            <NavLink to="/about" className={navClass}>ABOUT</NavLink>
            <NavLink to="/projects" className={navClass}>PROJECTS</NavLink>

            {/* PORTFOLIO / CONTACT — active when hash matches */}
            <Link
              to="/#portfolio"
              className={isPortfolioActive ? 'text-[#e86a3a]' : 'text-white hover:text-white/70 transition'}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/#contact"
              className={isContactActive ? 'text-[#e86a3a]' : 'text-white hover:text-white/70 transition'}
            >
              CONTACT
            </Link>
          </nav>
          <a
            href="https://linkedin.com/company/blue-capital-horizon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[#c8d6d0] text-black hover:bg-white transition"
          >
            {/* KEPT your Users icon — not changed to Linkedin */}
            <Users size={18} className="fill-black" />
          </a>
        </div>
        <div className="h-px w-full bg-white/70" />
        <div className="h-6" />
      </div>
    </footer>
  );
}