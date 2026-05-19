import React, { useState } from 'react';
import './BMICalculator.css';

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3B82F6', tip: 'Focus on muscle gain. Talk to our nutrition coach.' };
  if (bmi < 25)   return { label: 'Normal Weight', color: '#22C55E', tip: 'Great! Maintain with our Pro membership.' };
  if (bmi < 30)   return { label: 'Overweight', color: '#F59E0B', tip: 'Our fat-loss programs can help you reach normal.' };
  return           { label: 'Obese', color: '#EF4444', tip: 'Join now — our trainers specialize in weight loss.' };
}

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;
    const bmi = (w / (h * h)).toFixed(1);
    setResult({ bmi, ...getBMICategory(parseFloat(bmi)) });
  };

  const reset = () => { setHeight(''); setWeight(''); setResult(null); };

  const progressPct = result ? Math.min(((parseFloat(result.bmi) - 10) / 30) * 100, 100) : 0;

  return (
    <section id="bmi" className="bmi section-pad">
      <div className="container">
        <div className="bmi-layout">
          <div className="bmi-info">
            <span className="section-tag">📊 Health Check</span>
            <h2 className="section-title">Free BMI <span className="gradient-text">Calculator</span></h2>
            <div className="orange-line" />
            <p className="section-sub">
              Calculate your Body Mass Index instantly and get personalized advice on the right program for you.
            </p>
            <div className="bmi-benefits">
              {['Know your fitness baseline', 'Get plan recommendations', 'Track your progress monthly', 'Free consultation with trainers'].map(b => (
                <div key={b} className="bmi-benefit">
                  <span className="bmi-check">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bmi-card glass-card">
            <h3 className="bmi-card-title">Calculate Your BMI</h3>

            {!result ? (
              <div className="bmi-form">
                <div className="bmi-field">
                  <label className="input-label">Height (cm)</label>
                  <input
                    className="input-light bmi-input"
                    type="number"
                    placeholder="e.g. 170"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    min="100" max="250"
                  />
                </div>
                <div className="bmi-field">
                  <label className="input-label">Weight (kg)</label>
                  <input
                    className="input-light bmi-input"
                    type="number"
                    placeholder="e.g. 75"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    min="30" max="300"
                  />
                </div>
                <button className="btn-primary bmi-btn" onClick={calculate}>
                  Calculate BMI →
                </button>
              </div>
            ) : (
              <div className="bmi-result">
                <div className="bmi-score" style={{ color: result.color }}>
                  {result.bmi}
                </div>
                <div className="bmi-category" style={{ color: result.color, background: `${result.color}15`, border: `1px solid ${result.color}30` }}>
                  {result.label}
                </div>

                {/* Progress bar */}
                <div className="bmi-bar-wrap">
                  <div className="bmi-bar-track">
                    {[
                      { label: 'Under', width: 25, color: '#3B82F6' },
                      { label: 'Normal', width: 25, color: '#22C55E' },
                      { label: 'Over', width: 25, color: '#F59E0B' },
                      { label: 'Obese', width: 25, color: '#EF4444' },
                    ].map(seg => (
                      <div key={seg.label} className="bmi-bar-seg" style={{ width: `${seg.width}%`, background: seg.color }} />
                    ))}
                    <div className="bmi-bar-marker" style={{ left: `${progressPct}%`, background: result.color }} />
                  </div>
                  <div className="bmi-bar-labels">
                    <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
                  </div>
                </div>

                <div className="bmi-tip">
                  💡 {result.tip}
                </div>

                <div className="bmi-result-ctas">
                  <a
                    href="https://wa.me/919644962108?text=Hi%2C%20my%20BMI%20is%20and%20I%20need%20guidance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Get Free Consultation
                  </a>
                  <button className="btn-outline-orange" style={{ width: '100%', justifyContent: 'center' }} onClick={reset}>
                    Recalculate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
