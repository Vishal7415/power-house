import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Suresh Raina',
    role: 'Software Engineer',
    rating: 5,
    text: "The equipment is top-notch and the trainers are incredibly helpful. I've been a member for 2 years and it feels like a second home.",
    initial: 'S'
  },
  {
    name: 'Megha Singh',
    role: 'Doctor',
    rating: 5,
    text: "Clean environment, respectful crowd, and great hygiene. The yoga classes are exactly what I need after a stressful day.",
    initial: 'M'
  },
  {
    name: 'Karan Malhotra',
    role: 'Student',
    rating: 5,
    text: "Best gym in Sehore hands down! The monthly plans are very affordable for students and they don't compromise on quality.",
    initial: 'K'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-pad">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-tag">⭐ Member Reviews</span>
          <h2 className="section-title">What Our <span className="gradient-text">Empire Says</span></h2>
          <div className="orange-line center" />
        </div>

        <div className="testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">
                {Array(r.rating).fill('⭐').join('')}
              </div>
              <p className="testi-text">"{r.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{r.initial}</div>
                <div>
                  <div className="testi-name">{r.name}</div>
                  <div className="testi-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
