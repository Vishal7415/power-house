import React, { useState } from 'react';
import './Transformations.css';

const results = [
  {
    name: 'Rohit M.',
    duration: '3 Months',
    lostKg: 12,
    gain: 'Lean Muscle',
    before: '88kg',
    after: '76kg',
    quote: 'Incredible transformation! The trainers were so supportive throughout my journey.',
    emoji: '🔥',
  },
  {
    name: 'Priya S.',
    duration: '4 Months',
    lostKg: 9,
    gain: 'Toned Body',
    before: '72kg',
    after: '63kg',
    quote: 'I feel more confident and energetic than ever. Best investment in myself!',
    emoji: '⭐',
  },
  {
    name: 'Ankit K.',
    duration: '6 Months',
    lostKg: 18,
    gain: 'Strength',
    before: '102kg',
    after: '84kg',
    quote: 'From couch potato to lifting 100kg. The Fitness Empire changed my life completely.',
    emoji: '💪',
  },
  {
    name: 'Sneha R.',
    duration: '2 Months',
    lostKg: 6,
    gain: 'Flexibility',
    before: '68kg',
    after: '62kg',
    quote: 'The yoga and diet consultation combined gave me amazing results fast!',
    emoji: '🧘',
  },
];

export default function Transformations() {
  const [active, setActive] = useState(0);
  const t = results[active];

  return (
    <section id="transformations" className="transformations section-pad">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-tag">🔥 Real Results</span>
          <h2 className="section-title">Real Members.<br /><span className="gradient-text">Real Transformations.</span></h2>
          <div className="orange-line center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            These aren't stock photos — these are your neighbors who trained with us.
          </p>
        </div>

        <div className="trans-layout">
          {/* Big showcase card */}
          <div className="trans-showcase glass-card">
            <div className="trans-before-after">
              <div className="trans-ba-card trans-before">
                <div className="trans-ba-emoji">😔</div>
                <div className="trans-ba-weight">{t.before}</div>
                <div className="trans-ba-label">Before</div>
              </div>
              <div className="trans-arrow">
                <div className="trans-arrow-icon">→</div>
                <div className="trans-duration">{t.duration}</div>
              </div>
              <div className="trans-ba-card trans-after">
                <div className="trans-ba-emoji">😎</div>
                <div className="trans-ba-weight">{t.after}</div>
                <div className="trans-ba-label">After</div>
              </div>
            </div>

            <div className="trans-stats-row">
              <div className="trans-stat-pill">
                <span className="gradient-text">-{t.lostKg}kg</span>
                <span>Lost</span>
              </div>
              <div className="trans-stat-pill">
                <span className="gradient-text">{t.gain}</span>
                <span>Gained</span>
              </div>
              <div className="trans-stat-pill">
                <span className="gradient-text">{t.duration}</span>
                <span>Duration</span>
              </div>
            </div>

            <div className="trans-quote">
              <span className="trans-quote-mark">"</span>
              {t.quote}
            </div>
            <div className="trans-member">— {t.name} {t.emoji}</div>
          </div>

          {/* Selector cards */}
          <div className="trans-selector">
            {results.map((r, i) => (
              <button
                key={r.name}
                className={`trans-sel-card ${active === i ? 'trans-sel-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="trans-sel-emoji">{r.emoji}</span>
                <div>
                  <div className="trans-sel-name">{r.name}</div>
                  <div className="trans-sel-info">-{r.lostKg}kg · {r.duration}</div>
                </div>
                {active === i && <div className="trans-sel-dot" />}
              </button>
            ))}

            <div className="trans-cta-box">
              <p>Ready to start your transformation?</p>
              <a
                href="https://wa.me/919644962108?text=Hi%2C%20I%20want%20to%20start%20my%20transformation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                🔥 Start My Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
