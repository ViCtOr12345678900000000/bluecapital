import { useEffect, useRef, useState } from 'react';

export default function BlobSection() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let raf;
    const loop = () => { setTick((t) => t + 1); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const t = tick / 60;

  // 0 = fully apart, 1 = fully merged - slow cycle like in video
  const merge = (Math.sin(t * 0.35) + 1) / 2; // 0 -> 1 -> 0 over ~18s
  const mergeEased = merge * merge * (3 - 2 * merge); // smoothstep - slow at ends

  // When merged they stretch toward each other + grow
  const pinkX = mergeEased * 90;      // pink moves right toward blue
  const blueX = mergeEased * -90;     // blue moves left toward pink
  const stretch = 1 + mergeEased * 0.25; // both stretch when touching
  const squash = 1 - mergeEased * 0.12;

  // Morph - edges get wavy, more wavy when merging
  const morph = (a, b, c, d, speed, offset) => {
    const w = (v, amt) => v + Math.sin(t * speed + offset) * amt;
    const amt = 6 + mergeEased * 10; // wavier when merging
    return `${w(a, amt)}% ${w(b, amt)}% ${w(c, amt)}% ${w(d, amt)}% / ${w(c, amt)}% ${w(d, amt)}% ${w(a, amt)}% ${w(b, amt)}%`;
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-[58%_42%]">

        {/* LEFT - TEXT on black, always readable */}
        <div className="relative z-10 px-5 py-16 md:px-10 md:py-24 font-serif  text-[clamp(16px,4.2vw,46px)] font-bold  leading-[1.15] text-white">
          <p className='italic font-["Playfair_Display"]'>A brighter future for humanity is within our grasp.</p>
          <br /><br />
          But we know there are great barriers - entrenched inequities - preventing humanity from reaching this horizon.
          <br /><br />
          <p className='italic font-["Playfair_Display"]'>We inhabit the deep science and tech community, seeking out and investing in <span className='text-orange-400'>next normal</span> companies.</p>
          <br /><br />
          Whose impact can smash the barriers to human potential.
          <br /><br />
          <p className='italic font-["Playfair_Display"]'>Code in kindness and respect.</p>
          <br /><br />
          And propel humanity towards a <p className='italic font-["Playfair_Display"]'>radically better future.</p>
        </div>

        {/* RIGHT - BLOBS ONLY HERE, not over text */}
        <div className="relative hidden mt-50 md:block min-h-[400px] overflow-hidden">
          {/* Dark bg for blob area */}
          <div className="absolute inset-0 bg-black" />

          {/* PINK BLOB - left of the pair */}
          <div
            className="absolute top-[18%] left-[5%] h-[200px] w-[200px] bg-[#F2C6D6] will-change-transform"
            style={{
              borderRadius: morph(50, 40, 60, 40, 0.6, 0),
              transform: `translateX(${pinkX}px) scaleX(${stretch}) scaleY(${squash}) rotate(-8deg)`,
            }}
          />

          {/* LIGHT BLUE BLOB - right of the pair */}
          <div
            className="absolute top-[38%] right-[5%] h-[360px] w-[300px] bg-[#CDE3F5] will-change-transform"
            style={{
              borderRadius: morph(55, 45, 50, 50, 0.8, 2),
              transform: `translateX(${blueX}px) scaleX(${stretch}) scaleY(${squash}) rotate(10deg)`,
            }}
          />

          {/* Small red blob peeking - like 0:01s in your video */}
          <div
            className="absolute top-[8%] left-[35%] h-[90px] w-[90px] bg-[#E83A2E] will-change-transform"
            style={{
              borderRadius: morph(60, 40, 55, 45, 1, 1),
              transform: `translateX(${pinkX * 0.5}px) translateY(${Math.sin(t * 0.5) * 8}px)`,
            }}
          />

          {/* Merge glow - appears only when they touch */}
          <div
            className="absolute top-[38%] left-1/2 h-[180px] w-[120px] -translate-x-1/2 rounded-full bg-[#F2C6D6] blur-2xl transition-opacity duration-700"
            style={{ opacity: mergeEased > 0.7 ? (mergeEased - 0.7) * 2 : 0 }}
          />
        </div>

        {/* MOBILE - SAME blobs, SAME animation, just smaller + behind text */}
        <div className="pointer-events-none absolute inset-0 md:hidden overflow-hidden opacity-30">
          {/* PINK - mobile */}
          <div
            className="absolute right-[10px] top-[12%] h-[150px] w-[140px] bg-[#F2C6D6] will-change-transform"
            style={{
              borderRadius: morph(50, 40, 60, 40, 0.6, 0),
              transform: `translateX(${pinkX * 0.4}px) scaleX(${stretch}) scaleY(${squash}) rotate(-8deg)`,
            }}
          />
          {/* BLUE - mobile */}
          <div
            className="absolute right-[40px] top-[32%] h-[170px] w-[150px] bg-[#CDE3F5] will-change-transform"
            style={{
              borderRadius: morph(55, 45, 50, 50, 0.8, 2),
              transform: `translateX(${blueX * 0.4}px) scaleX(${stretch}) scaleY(${squash}) rotate(10deg)`,
            }}
          />
          {/* RED - mobile */}
          <div
            className="absolute right-[120px] top-[5%] h-[55px] w-[55px] bg-[#E83A2E] will-change-transform"
            style={{
              borderRadius: morph(60, 40, 55, 45, 1, 1),
              transform: `translateX(${pinkX * 0.2}px) translateY(${Math.sin(t * 0.5) * 6}px)`,
            }}
          />
          {/* Extra small blob bottom - so mobile feels alive too */}
          <div
            className="absolute right-[20px] bottom-[8%] h-[90px] w-[90px] bg-[#F2C6D6] will-change-transform"
            style={{
              borderRadius: morph(50, 50, 40, 60, 0.5, 4),
              transform: `translateX(${blueX * 0.3}px) translateY(${Math.cos(t * 0.4) * 8}px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}