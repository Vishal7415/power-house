import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Plans.css';

const monthly = [
  {
    name: 'Basic',
    price: 1200,
    period: '3 Months',
    color: '#6B7280',
    features: [
      '✅ Full Gym Access',
      '✅ Locker Room',
      '✅ Basic Equipment',
      '✅ Group Classes',
      '❌ Personal Trainer',
      '❌ Diet Consultation',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: 2200,
    period: '6 Months',
    color: '#FF5A1F',
    features: [
      '✅ Full Gym Access',
      '✅ Locker Room',
      '✅ All Equipment',
      '✅ Group Classes',
      '✅ 4 PT Sessions/mo',
      '✅ Diet Consultation',
    ],
    cta: 'Join Now 🔥',
    popular: true,
  },
  {
    name: 'Elite',
    price: 4000,
    period: '12 Months',
    color: '#1A1A2E',
    features: [
      '✅ Full Gym Access',
      '✅ Premium Locker',
      '✅ All Equipment',
      '✅ Unlimited Classes',
      '✅ Unlimited PT Sessions',
      '✅ Monthly Diet Plan',
    ],
    cta: 'Go Elite',
    popular: false,
  },
];

const yearly = [
  { ...monthly[0], price: 3800, period: '6 Months' },
  { ...monthly[1], price: 7000, period: '12 Months' },
  { ...monthly[2], price: 12000, period: '24 Months' },
];

export default function Plans() {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const plans = isYearly ? yearly : monthly;

  return (
    <section id="plans" className="plans section-pad">
      <div className="container">
        <div className="plans-header">
          <span className="section-tag">💎 Membership</span>
          <h2 className="section-title">Choose Your <span className="gradient-text">Empire Plan</span></h2>
          <div className="orange-line center" />
          <p className="section-sub" style={{ margin: '0 auto 36px' }}>
            Transparent pricing with no hidden fees. Choose the plan that fits your goals.
          </p>

          {/* Toggle */}
          <div className="plans-toggle">
            <span className={!isYearly ? 'toggle-active' : ''}>Monthly</span>
            <button
              className={`toggle-btn ${isYearly ? 'toggle-on' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle billing period"
            >
              <span className="toggle-thumb" />
            </button>
            <span className={isYearly ? 'toggle-active' : ''}>
              Long Term <span className="toggle-save">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan-card ${plan.popular ? 'plan-popular' : ''}`}>
              {plan.popular && <div className="plan-badge">⭐ Most Popular</div>}
              <div className="plan-top">
                <div className="plan-name" style={{ color: plan.color }}>{plan.name}</div>
                <div className="plan-price">
                  <span className="plan-currency">₹</span>
                  <span className="plan-amount">{plan.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="plan-period">{plan.period} membership</div>
              </div>

              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f} className="plan-feature">{f}</li>
                ))}
              </ul>

              <div className="plan-ctas">
                <button
                  onClick={() => navigate('/checkout', { state: { plan } })}
                  className={plan.popular ? 'btn-primary' : 'btn-outline-orange'}
                  style={{ width: '100%', justifyContent: 'center', border: plan.popular ? 'none' : undefined }}
                >
                  {plan.cta}
                </button>
                <a
                  href="https://wa.me/919644962108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}
                >
                  WhatsApp to Join
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="plans-note">
          📍 Visit us at the gym for walk-in trials • All plans include locker access • No joining fee
        </p>
      </div>
    </section>
  );
}
