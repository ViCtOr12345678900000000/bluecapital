export default function About() {
  return (
    <main className="bg-black text-white">
      {/* TOP HEADER */}
      <section className="mx-auto max-w-[1400px] px-5 pt-[130px] md:px-10 md:pt-[210px]">
        <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-white/50">ABOUT</p>
        <h1 className="m-0 max-w-[900px] font-['Archivo_Black'] text-[clamp(36px,6vw,72px)] leading-[1.02]">
          We invest in deep science<br />for a radically better future.
        </h1>
        <p className="mt-6 max-w-[700px] font-['Playfair_Display'] text-[clamp(18px,2.2vw,26px)] italic leading-[1.4] text-white/80">
          See problem, solve problem, repeat.
        </p>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/10 px-5 py-12 md:grid-cols-4 md:px-10">
        {[
          ['250M+', 'Fund III'],
          ['30+', 'Companies backed'],
          ['480K', 'EqualWealth users'],
          ['36K', 'CO2 removed / year'],
        ].map(([num, label]) => (
          <div key={label} className="bg-black p-6">
            <p className="m-0 font-['Archivo_Black'] text-[32px] md:text-[40px]">{num}</p>
            <p className="m-0 mt-1 text-[11px] tracking-[0.2em] text-white/60">{label}</p>
          </div>
        ))}
      </section>

      {/* ORANGE SECTION — Founded with optimism. Run for impact. */}
      <section className="bg-[#E85D3D] text-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <h2 className="m-0 font-['Archivo_Black'] text-[clamp(32px,4.5vw,56px)] leading-[1.05]">
              Founded with optimism.<br />Run for impact.
            </h2>
            <img
              src="/founder-woman.jpg"
              alt="Founder, Blue Capital Horizon"
              className="mt-8 h-[220px] w-[220px] rounded-full object-cover md:h-[280px] md:w-[280px]"
            />
            <p className="mt-4 text-[13px] tracking-[0.15em] text-white/80">
              FOUNDER — BLUE CAPITAL HORIZON
            </p>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.8] text-white/90 md:text-[16px]">
            <p>
              Blue Capital Horizon was founded with a simple belief: see problem, solve problem, repeat.
              We believe in a world that is equal, equitable, and just for all people.
            </p>
            <p>
              We back deep science and technology that can pave the way to a fairer, safer world —
              from gene editing that cures sickle cell, to space solar that powers homes,
              to fintech that lets anyone invest from $1.
            </p>
            <p>
              Our record is built on the fact that we invest in companies that could not
              be built by anyone else, and we are driven by optimism that those
              companies will change the world for the better.
            </p>
          </div>
        </div>
      </section>

      {/* ===== NEW — TEAM SIDE YOU SHOWED IN VIDEO ===== */}
      <section className="bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
          <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-white/50">TEAM</p>

          <h2 className="m-0 font-['Archivo_Black'] text-[clamp(40px,6vw,84px)] leading-[1.02]">
            Many minds.<br />One goal.
          </h2>

          <p className="mt-8 max-w-[700px] text-[15px] leading-[1.8] text-white/70 md:text-[16px]">
            Our team is not defined by any one person. It is defined by a shared
            belief that the future must be fairer, safer, and built for everyone.
            A scientist, a traveler, a Christian, a reader — different stories,
            same mission: invest in companies that change the world for the better.
          </p>

          {/* Names — like in your video, big serif list */}
                  <p className="mt-12 font-['Playfair_Display'] text-[clamp(20px,3vw,36px)] leading-[1.6] text-white">
                      Amara Okafor, Luis Herrera, Sofia Marino, Kenji Tanaka,
                      Priya Sharma, Mateo Alvarez, Aisha Bello, Noah Williams,
                      Elena Petrova, David Osei, Camila Duarte, Omar Haddad,
                      Yuki Sato, Zara Khan, Leo Fischer, Nia Thompson,
                      Rafael Costa, Ingrid Larsen, Carlos Mendez, Fatima Diallo,
                      Ethan Cole, Lina Haddad, Victor Reyes, Maya Chen,
                      Samuel Adeyemi, Isabella Rossi, James Carter, Hana Kim.
                  </p>

          <p className="mt-10 max-w-[600px] text-[14px] leading-[1.7] text-white/50">
            One team. Many minds. One goal — a radically better future.
          </p>
        </div>
      </section>

      {/* WHAT WE BACK */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-white/50">WHAT WE BACK</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ['BIOTECH', 'Cures, not treatments. Gene editing, cell therapy, and diagnostics that save lives.'],
            ['CLIMATE', 'Energy and materials that remove CO2 and power the world cleanly.'],
            ['AI + FINTECH', 'Tools that make wealth, health and knowledge available to everyone.'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-[16px] border border-white/10 bg-[#111] p-6">
              <h3 className="m-0 font-['Archivo_Black'] text-[18px]">{title}</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}