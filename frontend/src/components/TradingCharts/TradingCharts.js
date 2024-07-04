import React, { useEffect } from 'react';
import './tradingCharts.module.css';

const TradingCharts = () => {
  useEffect(() => {
    const animateBackground = () => {
      const bg = document.querySelector('.trading-chart');
      let position = 0;
      setInterval(() => {
        position -= 1;
        bg.style.backgroundPosition = `${position}px 0`;
      }, 50);
    };

    animateBackground();
  }, []);

  return (
    <div className="trading-chart"></div>
  );
};

export default TradingCharts;
