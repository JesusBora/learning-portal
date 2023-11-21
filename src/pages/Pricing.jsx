import React from 'react';
import './styles/Pricing.css';

const Pricing = () => {
  return (
    <main className='main-pricing'>
      <h1>Choose Your Plan</h1>
      <div className='pricing-options'>
        <div className='pricing-option'>
          <h2>Basic</h2>
          <p>Access to essential features</p>
          <p className='price'>$19.99/month</p>
        </div>
        <div className='pricing-option'>
          <h2>Standard</h2>
          <p>More features for a better experience</p>
          <p className='price'>$29.99/month</p>
        </div>
        <div className='pricing-option'>
          <h2>Premium</h2>
          <p>All features included</p>
          <p className='price'>$39.99/month</p>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
