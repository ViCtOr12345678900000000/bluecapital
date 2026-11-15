export default function Manifesto() {
  return (
    <section id="about" style={{ background: '#000', padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#fff', fontSize: 'clamp(26px, 3.5vw, 46px)', lineHeight: 1.25, margin: 0 }}>
        We believe that breakthrough science and technology are the most powerful forces for human progress. We partner with founders from first principles to company building.
      </p>
      <div style={{ display: 'flex', gap: 48, marginTop: 60, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h4 style={{ color: '#fff', fontSize: 13, letterSpacing: '0.15em', marginBottom: 12 }}>DEEP SCIENCE</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: 15 }}>From synthetic biology to fusion, we back the hard problems others avoid.</p>
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <h4 style={{ color: '#fff', fontSize: 13, letterSpacing: '0.15em', marginBottom: 12 }}>LONG HORIZON</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: 15 }}>We invest for decades, not quarters. Real breakthroughs take time.</p>
        </div>
      </div>
    </section>
  );
}