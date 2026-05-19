import React from 'react';
import './Services.css';

const services = [
  {
    icon: '🏋️',
    title: 'Weight Training',
    desc: 'Build muscle and strength with our premium free weights and machines. Structured progressive overload programs.',
    color: '#FF5A1F',
  },
  {
    icon: '🏃',
    title: 'Cardio Zone',
    desc: 'Modern treadmills, ellipticals, and cycles. Burn fat effectively with our structured cardio programs.',
    color: '#E63946',
  },
  {
    icon: '👤',
    title: 'Personal Training',
    desc: '1-on-1 sessions with certified coaches. Customized workouts designed for your specific goals.',
    color: '#FF5A1F',
  },
  {
    icon: '🧘',
    title: 'Yoga & Flexibility',
    desc: 'Improve mobility, reduce stress, and enhance recovery with expert-led yoga sessions.',
    color: '#E63946',
  },
  {
    icon: '⚡',
    title: 'CrossFit Training',
    desc: 'High-intensity functional fitness combining strength, cardio, and agility for peak performance.',
    color: '#FF5A1F',
  },
  {
    icon: '🥗',
    title: 'Diet Consultation',
    desc: 'Personalized nutrition plans by expert dietitians to fuel your transformation journey.',
    color: '#E63946',
  },
];

export default function Services() {
  return (
    <section id="services" className="services section-pad">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">⚡ What We Offer</span>
          <h2 className="section-title">World-Class <span className="gradient-text">Services</span></h2>
          <div className="orange-line center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Everything you need to transform your body under one roof — expert-guided, science-backed.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon-wrap" style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-arrow">
                <span>Learn more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
