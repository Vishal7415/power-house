import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const highlights = [
  { icon: '🏆', title: 'Award Winning', desc: 'Best Gym in Sehore 2023 & 2024' },
  { icon: '🎓', title: 'Expert Guidance', desc: 'Personalized programs and support' },
  { icon: '🔬', title: 'Science-Based', desc: 'Proven fitness & nutrition protocols' },
  { icon: '❤️', title: 'Community First', desc: 'Supportive, welcoming environment' },
];

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <div className="about-grid">
          {/* Left visual */}
          <div className="about-left">
            <div className="about-img-stack">
              <div className="about-img-main">
                <div className="about-img-placeholder">
                  <span>🏋️‍♂️</span>
                  <p>State-of-the-art facility</p>
                </div>
              </div>
              <div className="about-img-accent">
                <div className="about-img-small">
                  <span>💪</span>
                </div>
              </div>
              <div className="about-badge-founded glass-card">
                <div className="about-badge-year bebas">2020</div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Founded</div>
              </div>
              <div className="about-badge-members glass-card">
                <div style={{ fontSize: '1.3rem' }}>😊</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1A1A2E' }}>500+ Happy</div>
                  <div style={{ fontSize: '0.72rem', color: '#6B7280' }}>Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="about-right">
            <span className="section-tag">⚡ Our Story</span>
            <h2 className="section-title">The Empire Was Built<br /><span className="gradient-text">For You</span></h2>
            <div className="orange-line" />
            <p className="section-sub" style={{ marginBottom: 24 }}>
              The Fitness Empire was founded in 2020 with one mission — to make premium fitness accessible 
              to everyone in Sehore. We believe every person deserves a world-class gym experience without 
              compromising on quality or community.
            </p>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Today, we are Sehore's most trusted fitness destination with state-of-the-art equipment, 
              certified trainers, and a community that lifts each other up — literally and figuratively.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div key={h.title} className="about-highlight-item">
                  <div className="about-highlight-icon">{h.icon}</div>
                  <div>
                    <div className="about-highlight-title">{h.title}</div>
                    <div className="about-highlight-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-ctas">
              <Link to="/contact" className="btn-primary">
                Visit Us Today 📍
              </Link>
              <Link to="/plans" className="btn-outline-dark">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
