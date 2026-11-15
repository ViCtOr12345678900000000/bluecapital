export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A1A] text-white">
      {/* ===== ANIMATED BACKGROUND — like in your video ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Big blue blob — top right, morphs */}
        <div className="blob-blue absolute -right-[10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#1E9BF0] opacity-80 blur-[2px] md:h-[520px] md:w-[520px]" />
        {/* Pink / light blob — middle */}
        <div className="blob-pink absolute left-[35%] top-[35%] h-[300px] w-[300px] bg-[#FFC7C7] opacity-90 md:h-[380px] md:w-[380px]" />
        {/* Small orange circle */}
        <div className="blob-orange-circle absolute left-[8%] top-[55%] h-[90px] w-[90px] rounded-full bg-[#FF5A2A]" />
        {/* Orange square — bottom right */}
        <div className="blob-orange-square absolute bottom-[8%] right-[8%] h-[140px] w-[140px] bg-[#FF3B1F] md:h-[180px] md:w-[180px]" />
        {/* Blue square — bottom left */}
        <div className="blob-blue-square absolute bottom-[12%] left-[15%] h-[110px] w-[110px] bg-[#1E9BF0] md:h-[140px] md:w-[140px]" />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ===== CONTENT — like in your video ===== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-5 pb-24 pt-[160px] md:px-10">
        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-white/60">CONTACT</p>

        <h1 className="m-0 font-['Archivo_Black'] text-[clamp(48px,8vw,110px)] leading-[0.95]">
          Say hello.
        </h1>

        <p className="mt-6 max-w-[600px] font-['Playfair_Display'] text-[clamp(18px,2.2vw,26px)] italic leading-[1.4] text-white/80">
          Founders, scientists, dreamers — we want to hear from you.
        </p>

        <div className="mt-14 space-y-8">
          <div>
            <p className="m-0 text-[12px] font-bold tracking-[0.25em] text-white/60">
              FOR GENERAL ENQUIRIES
            </p>
            <a
              href="mailto:general@bluecapitalhorizon.com"
              className="mt-2 block font-['Playfair_Display'] text-[clamp(20px,3.5vw,38px)] leading-[1.3] text-white hover:text-[#FFC7C7] transition"
            >
              general@bluecapitalhorizon.com
            </a>
          </div>

          <div>
            <p className="m-0 text-[12px] font-bold tracking-[0.25em] text-white/60">
              FOR PRESS ENQUIRIES
            </p>
            <a
              href="mailto:press@bluecapitalhorizon.com"
              className="mt-2 block font-['Playfair_Display'] text-[clamp(20px,3.5vw,38px)] leading-[1.3] text-white hover:text-[#FFC7C7] transition"
            >
              press@bluecapitalhorizon.com
            </a>
          </div>
        </div>

        <p className="mt-16 max-w-[500px] text-[14px] leading-[1.7] text-white/60">
          Blue Capital Horizon — Investing in deep science for a radically better future.
        </p>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style>{`
        @keyframes floatBlue {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 50% 50% 50% 50%; }
          25% { transform: translate(-60px, 40px) scale(1.15); border-radius: 60% 40% 55% 45%; }
          50% { transform: translate(40px, -50px) scale(0.9); border-radius: 40% 60% 45% 55%; }
          75% { transform: translate(-30px, -20px) scale(1.05); border-radius: 55% 45% 60% 40%; }
        }
        @keyframes floatPink {
          0%, 100% { transform: translate(0, 0) rotate(0deg); border-radius: 50% 50% 50% 50%; }
          33% { transform: translate(80px, -60px) rotate(15deg); border-radius: 45% 55% 60% 40%; }
          66% { transform: translate(-50px, 50px) rotate(-10deg); border-radius: 60% 40% 45% 55%; }
        }
        @keyframes floatOrangeCircle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.2); }
        }
        @keyframes floatOrangeSquare {
          0%, 100% { transform: translate(0, 0) rotate(0deg); border-radius: 0; }
          50% { transform: translate(-40px, -30px) rotate(10deg); border-radius: 30% 70% 70% 30%; }
        }
        @keyframes floatBlueSquare {
          0%, 100% { transform: translate(0, 0) rotate(0deg); border-radius: 0; }
          50% { transform: translate(30px, 40px) rotate(-12deg); border-radius: 50%; }
        }
        .blob-blue { animation: floatBlue 12s ease-in-out infinite; }
        .blob-pink { animation: floatPink 14s ease-in-out infinite; }
        .blob-orange-circle { animation: floatOrangeCircle 6s ease-in-out infinite; }
        .blob-orange-square { animation: floatOrangeSquare 10s ease-in-out infinite; }
        .blob-blue-square { animation: floatBlueSquare 9s ease-in-out infinite; }
      `}</style>
    </main>
  );
}