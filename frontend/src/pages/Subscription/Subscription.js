import React, { useState } from 'react';
import './subscription.module.css'; // Import your CSS file for styling
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';

const plans = [
  { id: 1, name: '7 Days Plan', price: '$19.99' },
  { id: 2, name: '2 Weeks Plan', price: '$29.99' },
  { id: 3, name: '1 Month Plan', price: '$49.99' },
  { id: 4, name: '6 Months Plan', price: '$199.99' },
  { id: 5, name: '1 Year Plan', price: '$399.99' },
];

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayNow = () => {
    if (selectedPlan) {
      console.log(`User selected plan: ${selectedPlan.name}`);
      // Handle payment logic here
    }
  };

  return (
    <div className="subscription-container">
      <Title title="Choose Your Subscription Plan" />
      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan === plan ? 'selected' : ''}`}
            onClick={() => handleSelectPlan(plan)}
          >
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
      <Button
        className={`pay-button ${selectedPlan ? 'active' : ''}`}
        text="Pay Now"
        onClick={handlePayNow}
        disabled={!selectedPlan}
      />
    </div>
  );
};

export default SubscriptionPage;
