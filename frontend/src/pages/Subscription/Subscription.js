import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './subscription.module.css'; // Import your CSS file for styling
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';
import PlanCard from '../../components/PlanCard/PlanCard.js';

const starterPlans = [
  { id: 1, title: '7 Days Plan', price: '$19.99', duration: 'Monthly', member: 'Single User' },
  { id: 2, title: '2 Weeks Plan', price: '$29.99', duration: 'Monthly', member: 'Single User' },
  { id: 3, title: '1 Month Plan', price: '$49.99', duration: 'Monthly', member: 'Single User' },
];

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayNow = () => {
    if (selectedPlan) {
      console.log(`User selected plan: ${selectedPlan.title}`);
      navigate('/payment', { state: { selectedPlan } });
    }
    else{
      toast.error("No Plan Selected");
    }
  };

  return (
    <center className="subscription-container">
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
      <Button
        className={`pay-button ${selectedPlan ? 'active' : ''}`}
        text="Pay Now"
        onClick={handlePayNow}
        disabled={!selectedPlan}
      />
    </center>
  );
};

export default SubscriptionPage;
