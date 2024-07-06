import React, { useState } from 'react';
import './subscription.module.css'; // Import your CSS file for styling
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';
import PlanCard from '../../components/PlanCard/PlanCard.js';

const starterPlans = [
  { id: 1, title: '7 Days Plan', price: '$19.99', duration: 'Monthly', member: 'Single User' },
  { id: 2, title: '2 Weeks Plan', price: '$29.99', duration: 'Monthly', member: 'Single User' },
  { id: 3, title: '1 Month Plan', price: '$49.99', duration: 'Monthly', member: 'Single User' },
];

const otherPlans = [
  { id: 4, title: '2 Months Plan', price: '$89.99', duration: 'Monthly', member: 'Single User' },
  { id: 5, title: '6 Months Plan', price: '$199.99', duration: 'Annually', member: 'Single User' },
  { id: 6, title: '1 Year Plan', price: '$399.99', duration: 'Annually', member: 'Single User' },
];

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayNow = () => {
    if (selectedPlan) {
      console.log(`User selected plan: ${selectedPlan.title}`);
      // Handle payment logic here
    }
  };

  return (
    <div className="subscription-container">
      <Title text='Starter Plans' />
      <div className="plans-grid">
        {starterPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            member={plan.member}
            onClick={() => handleSelectPlan(plan)}
            selected={selectedPlan === plan}
          />
        ))}
      </div>
      <Title text='Other Plans' />
      <div className="plans-grid">
        {otherPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            member={plan.member}
            onClick={() => handleSelectPlan(plan)}
            selected={selectedPlan === plan}
          />
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
