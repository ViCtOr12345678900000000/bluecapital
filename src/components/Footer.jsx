import { User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top line */}
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="h-px w-full bg-white/70" />

        {/* TOP ROW - Logo left, Emails right */}
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between md:py-10">
          {/* Logo - Blue Capital Horizon */}
          <a href="#" className="flex flex-col leading-none select-none">
            <span className="flex items-baseline font-['Archivo_Black'] gap-2 text-[28px] md:text-[32px] tracking-[-0.02em] text-[#8a8a8a]">
              Blue 
              <span className="font-['Playfair_Display'] mx-[1px] text-[38px] md:text-[44px] leading-[0.8] text-[#a8a8a8] tracking-tight mr-[-6px] font-bold">C</span>
              apital Horizon
            </span>
            <span className="mt-1 ml-[88px] md:ml-[102px] text-[13px] tracking-[0.4em] text-[#8a8a8a]">维港投资</span>
          </a>

          {/* Contact emails */}
          <div className="flex flex-col gap-2 md:flex-row md:gap-12 text-[13px] md:text-[14px]">
            <a href="mailto:general@horizons.com.hk" className="hover:text-white/70 transition">
              Contact: <span className="font-semibold">general@horizons.com.hk</span>
            </a>
            <a href="mailto:press@horizons.com.hk" className="hover:text-white/70 transition">
              Press: <span className="font-semibold">press@horizons.com.hk</span>
            </a>
          </div>
        </div>

        {/* Middle line */}
        <div className="h-px w-full bg-white/70" />

        {/* BOTTOM ROW - Nav + LinkedIn */}
        <div className="flex items-center justify-between py-5">
          <nav className="flex flex-1 items-center justify-between pr-6 md:pr-10 text-[11px] md:text-[12px] font-semibold tracking-[0.08em]">
            <a href="#" className="text-[#e86a3a]">HOME</a>
            <a href="#news" className="text-white hover:text-white/70 transition">NEWS</a>
            <a href="#about" className="text-white hover:text-white/70 transition">ABOUT</a>
            <a href="#portfolio" className="text-white hover:text-white/70 transition">PORTFOLIO</a>
            <a href="#contact" className="text-white hover:text-white/70 transition">CONTACT</a>
          </nav>

          {/* LinkedIn - like in your image */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[#c8d6d0] text-black hover:bg-white transition"
          >
            <User size={22} className="fill-black" />
          </a>
        </div>

        {/* Bottom line */}
        <div className="h-px w-full bg-white/70" />
        <div className="h-6" />
      </div>
    </footer>
  );
}