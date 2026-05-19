import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;
  
  const [formData, setFormData] = useState({ name: '', phone: '' });

  if (!plan) {
    return (
      <main style={{ paddingTop: '120px', minHeight: '60vh', textAlign: 'center' }}>
        <h2>No Plan Selected</h2>
        <button className="btn-primary" onClick={() => navigate('/plans')} style={{ marginTop: 20 }}>
          View Memberships
        </button>
      </main>
    );
  }

  // UPI configuration
  const upiId = '9644962108@ybl'; // Target UPI ID
  const merchantName = 'The Fitness Empire';
  const transactionNote = `${plan.name} Membership`;
  
  // Generate the direct UPI link
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${plan.price}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return alert('Please enter your name and phone number first.');
    
    try {
      // Save member to DB (assuming success for intent link)
      await fetch('http://localhost:5000/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, phone: formData.phone, plan: plan.name })
      });
    } catch (err) {
      console.error("Could not save to DB", err);
    }

    // Redirect to UPI app directly
    // Note: This works correctly on mobile devices. Desktop browsers might show no response.
    window.location.href = upiDeepLink;
  };

  return (
    <main style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: 'calc(100vh - 300px)' }}>
      <div className="container" style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: 10 }}>Complete <span className="gradient-text">Booking</span></h2>
          <div className="orange-line center" style={{ marginBottom: 30 }} />
          
          <div style={{ background: 'var(--bg-2)', padding: '24px', borderRadius: '16px', marginBottom: '30px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-2)', fontWeight: 600 }}>Selected Plan: <span style={{ color: plan.color, fontWeight: 800 }}>{plan.name} ({plan.period})</span></h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Bebas Neue', letterSpacing: '2px', color: 'var(--text)' }}>₹{plan.price.toLocaleString('en-IN')}</p>
          </div>

          <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="input-label">Full Name</label>
              <input 
                type="text" 
                className="input-light" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="input-label">Phone Number</label>
              <input 
                type="tel" 
                className="input-light" 
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            {/* Direct UPI Redirection Button */}
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px', fontSize: '1rem', padding: '16px', background: '#5F259F' }} 
            >
              Pay ₹{plan.price.toLocaleString('en-IN')} via PhonePe / GPay
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}
