import React from 'react';
import './dashboard.module.css'; // Import your CSS file for styling
import Title from '../../components/Title/Title';

const Dashboard = () => {
  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("User clicked on 'Get Subscription'");
    // You can redirect to the subscription plans page or trigger a modal, etc.
  };

  return (
    <center className="dashboard-container">
          <Title title="Choose the Plan" />
          <p>Manage your trading subscriptions and analytics here.</p>

      <button className="subscribe-button" onClick={handleSubscribe}>
        Get Subscription
      </button>
    </center>
  );
}

export default Dashboard;
