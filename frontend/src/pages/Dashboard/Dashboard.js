import React from 'react';
import './dashboard.module.css'; // Import your CSS file for styling
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("User clicked on 'Get Subscription'");
    navigate("/subscription");
    // You can redirect to the subscription plans page or trigger a modal, etc.
  };

  return (
    <center className="dashboard-container">
          <Title title="Choose the Plan" />
          <h6>Manage your trading subscriptions and analytics here.</h6>

      <Button className="subscribe-button" text="Get Subscription" onClick={handleSubscribe} />
    </center>
  );
}

export default Dashboard;
