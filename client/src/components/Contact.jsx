import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send');
      
      setStatus('Message sent successfully!');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <span className="section-tag">📞 Get In Touch</span>
            <h2 className="section-title">Join The <span className="gradient-text">Empire</span></h2>
            <div className="orange-line" />
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Have questions about our memberships or personal training? Drop us a message or visit us directly.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="cd-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>charnal dist sehore MP 466665</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="cd-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9644962108, +91 7415062583</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="cd-icon">🕒</div>
                <div>
                  <h4>Hours</h4>
                  <p>Morning: 6 AM - 10 AM<br/>Evening: 6 PM - 10 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/919644962108" target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ marginTop: 24 }}>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="contact-form-wrap glass-card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="input-label">Full Name</label>
                <input 
                  type="text" 
                  className="input-light" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="input-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="input-light" 
                  required 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 9876543210"
                />
              </div>
              <div className="form-group">
                <label className="input-label">Message</label>
                <textarea 
                  className="input-light" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="I'm interested in the Pro plan..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                Send Message
              </button>
              {status && <div className="form-status">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
