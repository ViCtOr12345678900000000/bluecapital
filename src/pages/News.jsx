import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NEWS = [
  {
    id: 1,
    slug: 'fund-iii',
    tag: 'FUNDING',
    title: 'Blue Capital Horizon Closes $250M Deep Science Fund III',
    date: 'November 12, 2026',
    author: 'By Blue Capital Horizon Team',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    excerpt: 'Our largest fund yet — backing founders solving climate, health, and inequality.',
    quote: 'We don’t invest in trends. We invest in problems that must be solved.',
    content: [
      'Blue Capital Horizon today announced the close of Fund III at $250M, oversubscribed by 40%. The fund will back 30 early-stage companies in biotech, climate tech, AI for health, and fintech for good across Africa, Asia, Europe and the United States.',
      'Fund III is our largest fund to date, and it comes at a moment when deep science is moving faster than ever. Gene editing that was theoretical five years ago is now curing patients. Direct air capture that was a lab experiment is now removing 36,000 tonnes of CO2 a year. Biological computing that sounded like science fiction is now shipping to labs.',
      'Our thesis has not changed since day one: see problem, solve problem, repeat. We look for fundamental, universal problems — gender inequality, uneven wealth, poor health, climate adaptation — and we back the deep science and technology that can pave the way to a fairer, safer world for us all.',
      'Of the $250M, $90M will go to biotech and health, $80M to climate and energy, $50M to AI and computing, and $30M to fintech for good. Half of the fund is reserved for follow-on investments in our existing portfolio companies.',
      '“We don’t invest in trends. We invest in problems that must be solved,” said our Managing Partner. “Fund III lets us go earlier, stay longer, and back founders who are willing to spend ten years on a problem that matters.”',
      'The fund’s first five investments have already been announced, including a gene-editing company targeting sickle cell disease, a space-based solar company, and a Lagos-based micro-investment platform now serving 480,000 users.',
      'Fund III was anchored by returning limited partners, with new partners joining from Lagos, London, Singapore and New York. The first close was held in Lagos, the second in London.',
    ],
    points: [
      '$250M total — our largest fund to date',
      '40% oversubscribed by returning LPs',
      '30 companies to be backed over 5 years',
      'First 5 investments already announced',
    ],
  },
  {
    id: 2,
    slug: 'helixgen',
    tag: 'PORTFOLIO',
    title: 'HelixGen Cures First 12 Sickle Cell Patients With Single-Dose Gene Edit',
    date: 'October 28, 2026',
    author: 'By Amara Chen, Founder, HelixGen',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
    excerpt: '100% of patients free of pain crises 18 months after treatment.',
    quote: 'For the first time, these children can imagine a life without pain.',
    content: [
      'HelixGen Therapeutics, backed by Blue Capital Horizon in 2024, today reported Phase 1 results: all 12 patients treated with its one-time CRISPR therapy remain free of sickle cell pain crises after 18 months.',
      'Sickle cell disease affects over 300,000 children born each year. In Nigeria alone, 150,000 babies are born with the disease annually. Until now, the only cure was a bone marrow transplant — expensive, risky, and unavailable to most patients.',
      'HelixGen’s approach is different. Doctors take the patient’s own stem cells, edit them in a lab to restore healthy haemoglobin production, and return them to the patient in a single dose. No donor needed. No lifelong drugs.',
      '“For the first time, these children can imagine a life without pain,” said Dr. Amara Chen, founder of HelixGen. “One of our patients, a 9-year-old girl from Lagos, has not had a single pain crisis since treatment. She is back in school full-time.”',
      'The trial was conducted in Lagos and Boston. Haemoglobin levels in all 12 patients returned to the normal range within 3 months. No serious adverse events were reported.',
      'The US FDA has granted fast-track designation, and the European Medicines Agency has granted PRIME designation. Phase 2 will expand to 80 patients across Nigeria, Ghana, the US and the UK, starting Q1 2027.',
      'Blue Capital Horizon led HelixGen’s $42M Series A in 2024 and has followed on in every round since.',
    ],
    points: [
      'Phase 1: 12 patients, 0 pain crises',
      'Haemoglobin restored to normal range',
      'FDA fast-track + EMA PRIME designation',
      'Phase 2 starts Q1 2027 — 80 patients',
    ],
  },
  {
    id: 3,
    slug: 'terracarbon',
    tag: 'CLIMATE',
    title: 'TerraCarbon Opens Second Plant — 36,000 Tonnes Of CO2 Removed A Year',
    date: 'October 14, 2026',
    author: 'By Elena Vasquez, CEO, TerraCarbon',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80',
    excerpt: 'Engineered minerals now capture CO2 40x faster than natural rock.',
    quote: 'We don’t just capture CO2. We turn it into stone, forever.',
    content: [
      'TerraCarbon opened its second direct air capture plant in Iceland this week. The plant uses engineered basalt minerals to absorb CO2 from the air and lock it underground as solid stone — permanently.',
      'Even if we stop all emissions today, the 400ppm of CO2 already in the air will keep warming the planet for centuries. Removal is no longer optional. It is necessary.',
      'TerraCarbon’s breakthrough is speed. Natural basalt takes decades to absorb CO2. TerraCarbon’s engineered minerals do it 40x faster, then mineralise it into rock in under two years.',
      '“We don’t just capture CO2. We turn it into stone, forever,” said CEO Elena Vasquez. “There is no leak. No reversal. It is gone.”',
      'The new plant will remove 36,000 tonnes of CO2 per year — the equivalent of taking 7,800 cars off the road. Cost per tonne is down 32% versus Plant 1, thanks to cheaper energy and a redesigned mineral reactor.',
      'Microsoft has extended its carbon credit deal with TerraCarbon to 2030. Plant 3 is planned for Kenya in 2027, where geothermal energy will power the process.',
    ],
    points: [
      'Plant 2 operational in Reykjavik',
      'Microsoft extends carbon credit deal to 2030',
      'Cost per tonne down 32% vs Plant 1',
      'Plant 3 planned for Kenya in 2027',
    ],
  },
  {
    id: 4,
    slug: 'cortical-labs',
    tag: 'AI',
    title: 'Cortical Labs Launches CL1 — The First Biological Computer',
    date: 'September 30, 2026',
    author: 'By Kenji Sato, Founder, Cortical Labs',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80',
    excerpt: 'Lab-grown neurons that learn 1,000x more efficiently than GPUs.',
    quote: 'The human brain runs on 20 watts. AI should too.',
    content: [
      'Cortical Labs launched CL1, the world’s first commercial biological computer. Living neurons grown on a silicon chip learn in minutes what takes GPUs days — using a fraction of the energy.',
      'AI models now use more electricity than entire countries. Training a single large model can emit as much CO2 as five cars over their lifetimes. The human brain does the same work on 20 watts — the power of a dim lightbulb.',
      'CL1 is built on that insight. Biological neurons are grown in a lab, placed on a chip, and taught to perform tasks. In 2022, the first version learned to play Pong in five minutes. Today, CL1 is being used for drug discovery screening.',
      '“The human brain runs on 20 watts. AI should too,” said founder Dr. Kenji Sato. “We are not trying to replace silicon. We are trying to learn from biology.”',
      'The first 50 CL1 units have shipped to pharma labs for Alzheimer’s drug screening. Three top pharma companies have signed partnerships. CL2, with 10x more neurons, is in development.',
      'Blue Capital Horizon led Cortical Labs’ $35M round in 2024.',
    ],
    points: [
      'CL1 now shipping to 50 labs',
      'Uses 20 watts — same as a human brain',
      'Partnership with 3 top pharma companies',
      'Next: CL2 with 10x neurons',
    ],
  },
  {
    id: 5,
    slug: 'equalwealth',
    tag: 'AFRICA',
    title: 'EqualWealth Hits 480,000 Users Across Africa',
    date: 'September 10, 2026',
    author: 'By Chiamaka Eze, Founder, EqualWealth',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1600&q=80',
    excerpt: 'From $0 saved to $340 saved in year one — investing from $1.',
    quote: 'Wealth should not depend on where you were born.',
    content: [
      'EqualWealth, our Lagos-based fintech, passed 480,000 users across Nigeria, Ghana and Kenya. Users can invest from $1 in fractional global stocks, with education in 12 African languages.',
      'Two billion people have no access to investing. Inflation eats their savings while the wealthy compound theirs. In Nigeria, inflation has averaged over 20% in recent years — money under a mattress loses value every month.',
      'EqualWealth changes that. For $1, anyone can own a fraction of Apple, Tesla, or a global ETF. The app teaches investing in Yoruba, Hausa, Igbo, Swahili and eight other languages.',
      '“Wealth should not depend on where you were born,” said founder Chiamaka Eze. “Our average user saved $340 in year one — up from $0 before joining. That is rent. That is school fees. That is a business.”',
      'Users have grown 9x in 18 months. The company launched in Ghana and Kenya this year. Brazil and India launch in 2027.',
    ],
    points: [
      '480k users — up 9x in 18 months',
      'Launched in Ghana + Kenya',
      '12 languages, including Yoruba, Hausa, Swahili',
      'Brazil + India launch in 2027',
    ],
  },
  {
    id: 6,
    slug: 'notpla',
    tag: 'MATERIALS',
    title: 'Notpla Ocean: 12 Million Plastic Units Avoided With Seaweed Packaging',
    date: 'August 22, 2026',
    author: 'By Maya Okafor, Founder, Notpla Ocean',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80',
    excerpt: 'Packaging that disappears in water in weeks, not centuries.',
    quote: 'A plastic bottle lives 450 years. Ours lives 4 weeks.',
    content: [
      'Notpla Ocean, our seaweed packaging company, has now replaced 12 million single-use plastic units with edible, compostable packaging that disappears in water in 4-6 weeks.',
      'Eight million tonnes of plastic enter the ocean every year. A plastic bottle lives for 450 years. A plastic bag lives for 20 years. Notpla’s packaging lives for 4 weeks — and then it is gone.',
      'The material is made from seaweed and plants. It is edible, compostable, and dissolves in water. It was used at the London Marathon, where 36,000 plastic bottles were replaced in a single race.',
      '“A plastic bottle lives 450 years. Ours lives 4 weeks,” said founder Maya Okafor. “That is the whole idea.”',
      'Notpla is now in 4,000 stores across the UK and EU. Just Eat has extended its supply deal to all UK stores. A new seaweed coffee cup launches this winter. US launch is planned for 2027.',
    ],
    points: [
      '12M units deployed',
      'Just Eat extends to all UK stores',
      'New: seaweed coffee cups',
      'US launch planned for 2027',
    ],
  },
  {
    id: 7,
    slug: 'orbital-solar',
    tag: 'SPACE',
    title: 'Orbital Solar Beams Power From Space To Earth — First Time Ever',
    date: 'August 05, 2026',
    author: 'By James Whitfield, CEO, Orbital Solar',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&q=80',
    excerpt: 'First demo: 2kW beamed from orbit. Full array will power 500,000 homes.',
    quote: 'The sun never sets in space.',
    content: [
      'Orbital Solar successfully beamed 2kW of power from its demo satellite to a receiver on Earth — the first time space solar has delivered usable power 24/7, day and night.',
      'Solar panels on Earth only work when the sun shines. Clouds, night, and winter cut output by 70%. In space, the sun never sets. There are no clouds. No night. No winter.',
      'Orbital Solar’s idea is simple: put giant solar arrays in orbit, collect sunlight 24/7, and beam it to Earth as safe microwaves. A receiver on the ground converts it back to electricity.',
      '“The sun never sets in space,” said CEO James Whitfield. “This demo proves it works. The next step is scale.”',
      'The demo delivered 2kW at 98% efficiency. The full commercial array, launching in 2027, will power 500,000 homes continuously. Blue Capital Horizon led Orbital Solar’s $95M Series C in 2025.',
    ],
    points: [
      'First orbital power beaming demo',
      '2kW delivered, 98% efficiency',
      '$95M Series C led by Blue Capital Horizon',
      'First commercial array: 2027 launch',
    ],
  },
];

export default function News() {
  const [selected, setSelected] = useState(null);
  const { hash } = useLocation();

  // If you arrive via /news#cortical-labs from the carousel, open that article
  useEffect(() => {
    if (hash) {
      const slug = hash.replace('#', '');
      const found = NEWS.find((n) => n.slug === slug);
      if (found) setSelected(found);
    }
  }, [hash]);

  /* ============ ARTICLE PAGE ============ */
  if (selected) {
    return (
      <main className="bg-black text-white">
        <section className="mx-auto max-w-[1400px] px-5 pt-[110px] md:px-10 md:pt-[210px]">
          <button onClick={() => setSelected(null)} className="mb-6 flex items-center gap-2 border-none bg-transparent text-[11px] font-bold tracking-[0.25em] text-white/70 hover:text-white">
            ← BACK TO NEWS
          </button>
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-white/50">NEWS</p>
          <p className="m-0 max-w-[700px] font-['Playfair_Display'] text-[clamp(20px,2.5vw,30px)] italic leading-[1.3] text-white/90">
            Discover how we're building tomorrow better.
          </p>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pt-10 md:px-10">
          <div className="relative overflow-hidden rounded-[16px]">
            <img src={selected.img} alt={selected.title} className="h-[420px] w-full object-cover md:h-[520px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-black">{selected.tag}</span>
              <h1 className="m-0 mt-4 max-w-[900px] font-['Archivo_Black'] text-[clamp(28px,4.5vw,56px)] leading-[1.05] tracking-[-0.01em]">
                {selected.title}
              </h1>
              <p className="m-0 mt-4 text-[12px] tracking-[0.15em] text-white/70">
                {selected.date.toUpperCase()} • {selected.readTime.toUpperCase()} • {selected.author.toUpperCase()}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 pb-24 pt-12 md:px-10">
          <p className="m-0 font-['Playfair_Display'] text-[clamp(20px,2.5vw,26px)] italic leading-[1.4] text-white/90">
            {selected.excerpt}
          </p>

          {selected.content.map((para, i) => (
            <p key={i} className="m-0 mt-7 text-[16px] leading-[1.85] text-white/80 md:text-[17px]">
              {para}
            </p>
          ))}

          <blockquote className="my-10 border-l-2 border-white pl-6">
            <p className="m-0 font-['Playfair_Display'] text-[clamp(22px,3vw,32px)] italic leading-[1.3]">“{selected.quote}”</p>
          </blockquote>

          <h3 className="m-0 mt-10 text-[11px] font-bold tracking-[0.25em] text-white/50">KEY POINTS</h3>
          <ul className="m-0 mt-4 list-none space-y-3 p-0">
            {selected.points.map((pt, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-[1.6] text-white/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-white/10 pt-8">
            <Link to="/projects" className="text-[11px] font-bold tracking-[0.25em] text-white underline decoration-white/50 underline-offset-4">
              VIEW RELATED PROJECT →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  /* ============ NEWS LIST PAGE ============ */
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-[110px] md:px-10 md:pt-[210px]">
        <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-white/50">NEWS</p>
        <p className="m-0 max-w-[700px] font-['Playfair_Display'] text-[clamp(20px,2.5vw,30px)] italic leading-[1.3] text-white/90">
          Discover how we're building tomorrow better.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => (
            <article key={n.id} id={n.slug} className={`group cursor-pointer scroll-mt-[120px] overflow-hidden rounded-[16px] border border-white/10 bg-[#111] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`} onClick={() => setSelected(n)}>
              <div className="relative h-[220px] overflow-hidden">
                <img src={n.img} alt={n.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur">{n.tag}</span>
                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-black">{n.date.toUpperCase()}</span>
              </div>
              <div className="p-6">
                <h3 className="m-0 font-['Playfair_Display'] text-[24px] font-bold leading-[1.15]">{n.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-white/70">{n.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[12px] text-white/50">{n.readTime} • {n.author}</span>
                  <span className="pb-0.5 text-[11px] font-bold tracking-[0.2em] underline decoration-white/50 underline-offset-4">READ →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}