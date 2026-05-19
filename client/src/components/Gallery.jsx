import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop', // Gym wide
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop', // Dumbbells
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop', // Trainer & Client
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop', // Yoga/Stretch
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop', // Treadmills
  'https://images.unsplash.com/photo-1526506159807-6c0025a469ce?q=80&w=1374&auto=format&fit=crop', // Ropes
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span className="section-tag">📸 Inside The Empire</span>
          <h2 className="section-title">Premium <span className="gradient-text">Facility</span></h2>
          <div className="orange-line center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Experience our state-of-the-art equipment and energetic atmosphere.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img src={src} alt={`Fitness Empire Gallery ${idx + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/contact" className="btn-outline-dark">
            Visit Us For A Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
