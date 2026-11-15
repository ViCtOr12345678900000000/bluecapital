import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    tag: 'BIOTECH',
    title: 'HelixGen Therapeutics',
    desc: 'Gene-editing platform targeting rare blood disorders with a single-dose cure.',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
    funding: '$42M',
    year: '2024',
    status: 'Active',
    location: 'Boston, USA',
    founder: 'Dr. Amara Chen',
    problem: 'Over 300,000 children are born each year with sickle cell disease. Current treatments cost $2M+ and require months in hospital.',
    solution: 'A one-time CRISPR edit of the patient’s own stem cells that restores healthy haemoglobin production permanently.',
    impact: 'First 12 patients treated — 100% free of pain crises after 18 months. FDA fast-track granted.',
    milestones: ['2023 — Pre-clinical success in primates', '2024 — $42M Series A led by Blue Capital Horizon', '2025 — Phase 1 trial, 12 patients enrolled', '2026 — Phase 2 expansion to 80 patients'],
  },
  {
    id: 2,
    tag: 'CLIMATE TECH',
    title: 'TerraCarbon',
    desc: 'Direct air capture using engineered minerals to remove CO2 at industrial scale.',
    img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    funding: '$68M',
    year: '2023',
    status: 'Active',
    location: 'Reykjavik, Iceland',
    founder: 'Elena Vasquez',
    problem: 'Even if we stop all emissions today, 400ppm of CO2 already in the air will keep warming the planet for centuries.',
    solution: 'Engineered basalt minerals that absorb CO2 40x faster than natural rock, then lock it underground as solid stone.',
    impact: '1 plant = 36,000 tonnes CO2 removed per year. Equivalent to taking 7,800 cars off the road.',
    milestones: ['2022 — Pilot plant captures 4,000 tonnes', '2023 — $68M Series B led by Blue Capital Horizon', '2024 — 2nd plant in Iceland operational', '2025 — Partnership with Microsoft for carbon credits'],
  },
  {
    id: 3,
    tag: 'AI + HEALTH',
    title: 'Cortical Labs',
    desc: 'Lab-grown neurons fused with AI chips to build the next generation of computing.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
    funding: '$35M',
    year: '2024',
    status: 'Active',
    location: 'Melbourne, Australia',
    founder: 'Dr. Kenji Sato',
    problem: 'AI models now use more electricity than entire countries. The human brain does the same work on 20 watts.',
    solution: 'Biological neurons grown on a silicon chip that learn 1,000x more efficiently than GPUs, using living cells.',
    impact: 'First biological computer taught to play Pong in 5 minutes. Now used for drug discovery screening.',
    milestones: ['2022 — First DishBrain learns Pong', '2024 — $35M led by Blue Capital Horizon', '2025 — CL1 biological computer launched', '2026 — Pharma partnerships for Alzheimer’s research'],
  },
  {
    id: 4,
    tag: 'FOOD TECH',
    title: 'Nourish Bio',
    desc: 'Precision-fermented proteins that replace animal farming without taste compromise.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    funding: '$28M',
    year: '2023',
    status: 'Scaling',
    location: 'Singapore',
    founder: 'Priya Nair',
    problem: 'Animal farming uses 77% of global farmland and causes 14.5% of all greenhouse emissions.',
    solution: 'Yeast engineered to brew real milk, egg and meat proteins — identical taste, no animal, 90% less land.',
    impact: 'In 1,200 stores across Asia. 2.4M kg of animal protein replaced in 2025 alone.',
    milestones: ['2022 — First fermented cheese in market', '2023 — $28M Series A led by Blue Capital Horizon', '2024 — Regulatory approval in Singapore + USA', '2025 — 1,200 retail stores'],
  },
  {
    id: 5,
    tag: 'OCEAN / MATERIALS',
    title: 'Notpla Ocean',
    desc: 'Biodegradable seaweed packaging that disappears in water in weeks, not centuries.',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    funding: '$22M',
    year: '2022',
    status: 'Scaling',
    location: 'London, UK',
    founder: 'Maya Okafor',
    problem: '8 million tonnes of plastic enter the ocean every year. A plastic bottle lives for 450 years.',
    solution: 'Packaging made from seaweed and plants that is edible, compostable, and dissolves in water in 4-6 weeks.',
    impact: 'Used at London Marathon — 36,000 plastic bottles replaced in one race. 12M plastic units avoided.',
    milestones: ['2021 — Earthshot Prize winner', '2022 — $22M led by Blue Capital Horizon', '2023 — Supply deal with Just Eat', '2025 — 12M units deployed'],
  },
  {
    id: 6,
    tag: 'SPACE / ENERGY',
    title: 'Orbital Solar',
    desc: 'Space-based solar arrays beaming clean energy back to Earth, day and night.',
    img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
    funding: '$95M',
    year: '2025',
    status: 'Active',
    location: 'California, USA',
    founder: 'James Whitfield',
    problem: 'Solar panels on Earth only work when the sun shines. Clouds, night, and winter cut output by 70%.',
    solution: 'Giant solar arrays in orbit, collecting sunlight 24/7 and beaming it to Earth as safe microwaves.',
    impact: 'Demo satellite delivered 2kW to Earth in 2025. Full array will power 500,000 homes continuously.',
    milestones: ['2023 — Ground demo beams power 1km', '2025 — $95M Series C led by Blue Capital Horizon', '2025 — First orbital demo successful', '2027 — First commercial array launch'],
  },
  {
    id: 7,
    tag: 'FINTECH FOR GOOD',
    title: 'EqualWealth',
    desc: 'Micro-investment platform giving underserved communities access to global markets.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    funding: '$18M',
    year: '2024',
    status: 'Active',
    location: 'Lagos, Nigeria',
    founder: 'Chiamaka Eze',
    problem: '2 billion people have no access to investing. Inflation eats their savings while the wealthy compound theirs.',
    solution: 'An app that lets anyone invest from $1 in fractional global stocks, with education in 12 African languages.',
    impact: '480,000 users. Average user saved $340 in year one — up from $0 before joining.',
    milestones: ['2023 — 50,000 users in beta', '2024 — $18M led by Blue Capital Horizon', '2025 — 480,000 users across Nigeria, Ghana, Kenya', '2026 — Launch in Brazil + India'],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="bg-black text-white">
      {/* HEADER */}
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-[110px] md:px-10 md:pt-[170px]">
        <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-white/50">
          SPONSORED BY BLUE CAPITAL HORIZON
        </p>
        <h1 className="m-0 font-['Archivo_Black'] text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-[-0.02em]">
          PROJECTS
        </h1>
        <p className="mt-5 max-w-[700px] font-['Playfair_Display'] text-[clamp(20px,2.5vw,30px)] italic leading-[1.3] text-white/90">
          Seven bets on deep science and technology that can propel humanity towards a radically better future.
        </p>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-[16px] border border-white/10 bg-[#111] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur">{p.tag}</span>
                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-black">{p.status.toUpperCase()}</span>
              </div>

              <div className="p-6">
                <h3 className="m-0 font-['Playfair_Display'] text-[24px] font-bold leading-[1.15]">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-white/70">{p.desc}</p>
                <p className="mt-3 text-[12px] text-white/50">{p.location} • Founded by {p.founder}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[12px] tracking-wide text-white/50">
                    Funded <span className="font-bold text-white">{p.funding}</span> • {p.year}
                  </span>
                  <button
                    onClick={() => setSelected(p)}
                    className="cursor-pointer border-none bg-transparent pb-0.5 text-[11px] font-bold tracking-[0.2em] text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
                  >
                    VIEW →
                  </button>
                </div>
              </div>
            </article>
          ))}

          <div className="flex flex-col items-start justify-center rounded-[16px] border border-dashed border-white/25 bg-white/[0.03] p-8">
            <h3 className="m-0 font-['Playfair_Display'] text-[28px] font-bold italic leading-[1.15]">Have the next<br />breakthrough?</h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-white/70">We back founders solving fundamental, universal problems.</p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-[11px] font-bold tracking-[0.25em] text-black transition hover:bg-white/80">PITCH US</button>
          </div>
        </div>
      </section>

      {/* DETAIL MODAL — FULL CONTENTS */}
      {selected && (
        <div className="fixed inset-0 z-[200] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm md:items-center md:p-6" onClick={() => setSelected(null)}>
          <div
            className="max-h-[92vh] w-full max-w-[760px] overflow-y-auto rounded-t-[20px] bg-[#111] md:rounded-[20px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[260px] md:h-[320px]">
              <img src={selected.img} alt={selected.title} className="h-full w-full object-cover" />
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-[18px] text-white backdrop-blur">✕</button>
              <div className="absolute bottom-4 left-5">
                <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-black">{selected.tag}</span>
                <h2 className="m-0 mt-3 font-['Archivo_Black'] text-[clamp(24px,4vw,36px)] leading-[1.05]">{selected.title}</h2>
              </div>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px]">📍 {selected.location}</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px]">👤 {selected.founder}</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px]">💰 {selected.funding} • {selected.year}</span>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-black">{selected.status}</span>
              </div>

              <div>
                <h4 className="m-0 mb-2 text-[11px] font-bold tracking-[0.25em] text-white/50">THE PROBLEM</h4>
                <p className="m-0 text-[15px] leading-[1.7] text-white/85">{selected.problem}</p>
              </div>

              <div>
                <h4 className="m-0 mb-2 text-[11px] font-bold tracking-[0.25em] text-white/50">THE SOLUTION</h4>
                <p className="m-0 text-[15px] leading-[1.7] text-white/85">{selected.solution}</p>
              </div>

              <div className="rounded-[12px] bg-white/[0.06] p-5">
                <h4 className="m-0 mb-2 text-[11px] font-bold tracking-[0.25em] text-white/50">IMPACT SO FAR</h4>
                <p className="m-0 font-['Playfair_Display'] text-[18px] italic leading-[1.5]">{selected.impact}</p>
              </div>

              <div>
                <h4 className="m-0 mb-3 text-[11px] font-bold tracking-[0.25em] text-white/50">MILESTONES</h4>
                <ul className="m-0 list-none space-y-2 p-0">
                  {selected.milestones.map((m, i) => (
                    <li key={i} className="flex gap-3 text-[14px] leading-[1.6] text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => setSelected(null)} className="w-full rounded-full bg-white py-3.5 text-[11px] font-bold tracking-[0.25em] text-black">
                BACK TO PROJECTS
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}