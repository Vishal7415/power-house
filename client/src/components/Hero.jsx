import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const stats = [
  { value: 500, suffix: '+', label: 'Happy Members' },
  { value: 8,   suffix: '+', label: 'Expert Trainers' },
  { value: 4,   suffix: '+', label: 'Years of Trust' },
  { value: 95,  suffix: '%', label: 'Success Rate' },
];

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, animate }) {
  const count = useCounter(value, 2000, animate);
  return (
    <div className="hero-stat">
      <div className="hero-stat-num">{count}{suffix}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero" ref={ref}>
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-bg-grid" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            🏆 Sehore's #1 Premium Gym
          </div>

          <h1 className="hero-headline bebas">
            Transform Your<br />
            <span className="gradient-text">Body & Lifestyle</span>
          </h1>

          <p className="hero-sub">
            Build Strength • Burn Fat • Transform Yourself.<br />
            Join 500+ members who changed their lives at The Fitness Empire.
          </p>

          <div className="hero-ctas">
            <Link to="/plans" className="btn-primary" style={{ padding: '16px 38px', fontSize: '1rem' }}>
              🔥 Join Now — Free Trial
            </Link>
            <a href="https://wa.me/919644962108" target="_blank" rel="noopener noreferrer" className="btn-wa"
               style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Animated counters */}
          <div className="hero-stats">
            {stats.map(s => (
              <StatCard key={s.label} {...s} animate={animate} />
            ))}
          </div>
        </div>

        {/* Right side floating card */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <div className="hero-img-bg" />
            <div className="hero-img-card glass-card">
              <div className="hero-img-emoji">💪</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A1A2E' }}>Start Your Journey</div>
              <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: 4 }}>Free trial available today</div>
              <Link to="/plans" className="btn-primary" style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}>
                Get Free Trial
              </Link>
            </div>

            <div className="hero-float-badge glass-card" style={{ top: '18%', right: '-28px' }}>
              <span style={{ fontSize: '1.3rem' }}>🏋️</span>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1A1A2E' }}>Daily Classes</div>
                <div style={{ fontSize: '0.72rem', color: '#6B7280' }}>Morning & Evening</div>
              </div>
            </div>

            <div className="hero-float-badge glass-card" style={{ bottom: '22%', left: '-32px' }}>
              <span style={{ fontSize: '1.3rem' }}>⭐</span>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1A1A2E' }}>4.9 Rating</div>
                <div style={{ fontSize: '0.72rem', color: '#6B7280' }}>500+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-dot" />
      </div>
    </section>
  );
}
