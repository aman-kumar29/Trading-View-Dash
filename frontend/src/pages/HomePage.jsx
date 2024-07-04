import React from 'react';

const HomePage = () => {
  const plans = [
    { name: '7 Days', price: '$10', duration: '7 days' },
    { name: '2 Weeks', price: '$18', duration: '14 days' },
    { name: '1 Month', price: '$30', duration: '30 days' },
    { name: '6 Months', price: '$150', duration: '180 days' },
    { name: '1 Year', price: '$250', duration: '365 days' },
  ];

  const handleSubscribe = (plan) => {
    // Handle subscription logic here
    alert(`Subscribed to ${plan.name} plan`);
  };

  return (
    <div className="subscription-dashboard">
      <h1 className="dashboard-title">Choose Your Subscription Plan</h1>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card">
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-duration">{plan.duration}</p>
            <button className="subscribe-button" onClick={() => handleSubscribe(plan)}>
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
