import React from 'react';
import styles from './planCard.module.css'; // Import your CSS file for styling

const PlanCard = ({ title, price, duration, onClick, selected }) => {
  return (
    <div
      className={`${styles.planCard} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.planDetails}>
        <p>{price} / {duration} / Member</p>
      </div>
    </div>
  );
};

export default PlanCard;
