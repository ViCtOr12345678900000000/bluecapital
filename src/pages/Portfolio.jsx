import { useMemo, useState } from 'react';

const COMPANIES = [
  { name: 'HelixGen', desc: 'One-time CRISPR therapy curing sickle cell disease. 12 patients, 0 pain crises in Phase 1.', location: 'Lagos / Boston', year: 2024, tag: 'BIOTECH' },
  { name: 'TerraCarbon', desc: 'Direct air capture that turns CO2 into stone forever. 36,000 tonnes removed per year.', location: 'Reykjavik', year: 2023, tag: 'CLIMATE' },
  { name: 'Cortical Labs', desc: 'First biological computer. Lab-grown neurons that learn 1,000x more efficiently than GPUs.', location: 'Melbourne', year: 2024, tag: 'AI' },
  { name: 'EqualWealth', desc: 'Invest from $1 in fractional global stocks. 480,000 users across Africa.', location: 'Lagos', year: 2023, tag: 'FINTECH' },
  { name: 'Notpla Ocean', desc: 'Seaweed packaging that disappears in water in 4 weeks. 12M plastic units avoided.', location: 'London', year: 2022, tag: 'MATERIALS' },
  { name: 'Orbital Solar', desc: 'Beaming solar power from space to Earth, 24/7. First demo delivered 2kW from orbit.', location: 'California', year: 2025, tag: 'SPACE' },
  { name: 'Carma Therapeutics', desc: 'Next-gen cell therapy for autoimmune disease. Definitive merger announced.', location: 'New York', year: 2024, tag: 'BIOTECH' },
  { name: 'Nourish', desc: 'Precision fermentation creating animal-free fats that make plant food taste real.', location: 'London', year: 2023, tag: 'FOOD' },
];

export default function Portfolio() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('name'); // name | location | date
  const [openFilter, setOpenFilter] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const list = COMPANIES.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.tag.toLowerCase().includes(q)
    );
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'location') list.sort((a, b) => a.location.localeCompare(b.location));
    if (sort === 'date') list.sort((a, b) => b.year - a.year);
    return list;
  }, [query, sort]);

  const FilterBtn = ({ id, label }) => (
    <div className="relative">
      <button
        onClick={() => setOpenFilter(openFilter === id ? null : id)}
        className={`flex w-full items-center justify-between gap-2 border px-4 py-3 text-[11px] font-bold tracking-[0.2em] transition md:w-auto ${openFilter === id ? 'border-[#FF3B1F] bg-[#FF3B1F] text-white' : 'border-white/40 bg-transparent text-white hover:border-white'}`}
      >
        {label}
        <span className={`text-[10px] transition-transform ${openFilter === id ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {openFilter === id && (
        <div className="absolute left-0 top-full z-30 mt-1 w-full min-w-[200px] border border-white/20 bg-black shadow-2xl md:w-[220px]">
          {[
            { v: 'date', l: 'DATE OF INVESTMENT' },
            { v: 'location', l: 'LOCATION (A-Z)' },
            { v: 'name', l: 'COMPANY NAME (A-Z)' },
          ].map((opt) => (
            <button
              key={opt.v}
              onClick={() => { setSort(opt.v); setOpenFilter(null); }}
              className={`block w-full px-4 py-3 text-left text-[11px] font-bold tracking-[0.15em] transition ${sort === opt.v ? 'bg-[#FF3B1F] text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
            >
              {opt.l}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A1A] text-white">
      {/* ===== ANIMATED BACKGROUND — same as Contact ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-blue absolute -right-[10%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#1E9BF0] opacity-80 md:h-[520px] md:w-[520px]" />
        <div className="blob-pink absolute left-[35%] top-[28%] h-[300px] w-[300px] bg-[#FFC7C7] opacity-90 md:h-[380px] md:w-[380px]" />
        <div className="blob-orange-circle absolute left-[8%] top-[50%] h-[90px] w-[90px] rounded-full bg-[#FF5A2A]" />
        <div className="blob-orange-square absolute bottom-[5%] right-[5%] h-[140px] w-[140px] bg-[#FF3B1F] md:h-[180px] md:w-[180px]" />
        <div className="blob-blue-square absolute bottom-[10%] left-[12%] h-[110px] w-[110px] bg-[#1E9BF0] md:h-[140px] md:w-[140px]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-24 pt-[130px] md:px-10 md:pt-[180px]">
        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-white/60">PORTFOLIO</p>

        <h1 className="m-0 font-['Archivo_Black'] text-[clamp(36px,6vw,72px)] leading-[1.02]">
          Human ingenuity can<br />build tomorrow better.
        </h1>

        <p className="mt-6 max-w-[700px] font-['Playfair_Display'] text-[clamp(16px,2vw,22px)] italic leading-[1.5] text-white/80">
          We back founders solving fundamental problems — climate, health,
          inequality, and the future of computing. See problem, solve problem, repeat.
        </p>

        {/* ===== SEARCH + FILTERS — like in your video ===== */}
        <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 border border-white/40 bg-black/40 px-4 py-3 backdrop-blur">
            <span className="text-white/60">🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH"
              className="w-full bg-transparent text-[12px] font-bold tracking-[0.2em] text-white placeholder:text-white/60 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-white/60 hover:text-white">✕</button>
            )}
          </div>
          <FilterBtn id="sort" label={sort === 'date' ? 'DATE OF INVESTMENT' : sort === 'location' ? 'LOCATION (A-Z)' : 'COMPANY NAME (A-Z)'} />
        </div>

        <p className="mt-6 text-[11px] tracking-[0.2em] text-white/50">
          {filtered.length} COMPANIES • SORTED BY {sort === 'date' ? 'DATE OF INVESTMENT' : sort === 'location' ? 'LOCATION' : 'COMPANY NAME'}
        </p>

        {/* ===== LIST — like in your video ===== */}
        <div className="mt-4 border-t border-white/20">
          {filtered.map((c) => (
            <article key={c.name} className="group grid grid-cols-1 gap-3 border-b border-white/20 py-6 transition hover:bg-white/5 md:grid-cols-[180px_1fr_140px_80px] md:items-center md:gap-8 md:px-4">
              <div>
                <h3 className="m-0 font-['Playfair_Display'] text-[22px] font-bold leading-[1.1]">{c.name}</h3>
                <span className="mt-2 inline-block rounded-full border border-white/30 px-2 py-0.5 text-[9px] font-bold tracking-[0.2em] text-white/70">{c.tag}</span>
              </div>
              <p className="m-0 text-[14px] leading-[1.6] text-white/70">{c.desc}</p>
              <p className="m-0 text-[12px] tracking-[0.1em] text-white/60">{c.location.toUpperCase()}</p>
              <p className="m-0 font-['Archivo_Black'] text-[16px] text-white/90">{c.year}</p>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="py-16 text-center font-['Playfair_Display'] text-[20px] italic text-white/60">
              No companies found for “{query}”. Try another search.
            </p>
          )}
        </div>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style>{`
        @keyframes floatBlue { 0%,100% { transform: translate(0,0) scale(1); border-radius: 50%; } 25% { transform: translate(-60px,40px) scale(1.15); border-radius: 60% 40% 55% 45%; } 50% { transform: translate(40px,-50px) scale(0.9); border-radius: 40% 60% 45% 55%; } 75% { transform: translate(-30px,-20px) scale(1.05); border-radius: 55% 45% 60% 40%; } }
        @keyframes floatPink { 0%,100% { transform: translate(0,0) rotate(0deg); border-radius: 50%; } 33% { transform: translate(80px,-60px) rotate(15deg); border-radius: 45% 55% 60% 40%; } 66% { transform: translate(-50px,50px) rotate(-10deg); border-radius: 60% 40% 45% 55%; } }
        @keyframes floatOrangeCircle { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40px) scale(1.2); } }
        @keyframes floatOrangeSquare { 0%,100% { transform: translate(0,0) rotate(0deg); border-radius: 0; } 50% { transform: translate(-40px,-30px) rotate(10deg); border-radius: 30% 70% 70% 30%; } }
        @keyframes floatBlueSquare { 0%,100% { transform: translate(0,0) rotate(0deg); border-radius: 0; } 50% { transform: translate(30px,40px) rotate(-12deg); border-radius: 50%; } }
        .blob-blue { animation: floatBlue 12s ease-in-out infinite; }
        .blob-pink { animation: floatPink 14s ease-in-out infinite; }
        .blob-orange-circle { animation: floatOrangeCircle 6s ease-in-out infinite; }
        .blob-orange-square { animation: floatOrangeSquare 10s ease-in-out infinite; }
        .blob-blue-square { animation: floatBlueSquare 9s ease-in-out infinite; }
      `}</style>
    </main>
  );
}