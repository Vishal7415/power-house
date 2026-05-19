import React from 'react';
import Hero from '../components/Hero';
import Transformations from '../components/Transformations';
import BMICalculator from '../components/BMICalculator';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Transformations />
      <BMICalculator />
      <Testimonials />
    </main>
  );
}
