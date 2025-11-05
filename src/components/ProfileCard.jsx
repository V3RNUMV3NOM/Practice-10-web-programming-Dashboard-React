// src/components/ProfileCard.jsx
import React from 'react';
import avatar from '../assets/image0.gif'; // Імпортуємо зображення

function ProfileCard({ timeframe, setTimeframe }) {
  
  // Функція для обробки натискання (замість addEventListener)
  const handleClick = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="card profile-card">
      <div className="profile-header">
        {/* Використовуємо імпортований аватар */}
        <img src={avatar} alt="Avatar" className="profile-avatar" />
        <div>
          <p className="profile-subtitle">Report for</p>
          <h1 className="profile-name">Pavlo Krylov</h1>
        </div>
      </div>
      <nav className="view-switcher">
        {/* Динамічно додаємо клас 'active' і вішаємо onClick */}
        <button 
          type="button" 
          className={`view-btn ${timeframe === 'daily' ? 'active' : ''}`}
          onClick={() => handleClick('daily')}
        >
          Daily
        </button>
        <button 
          type="button" 
          className={`view-btn ${timeframe === 'weekly' ? 'active' : ''}`}
          onClick={() => handleClick('weekly')}
        >
          Weekly
        </button>
        <button 
          type="button" 
          className={`view-btn ${timeframe === 'monthly' ? 'active' : ''}`}
          onClick={() => handleClick('monthly')}
        >
          Monthly
        </button>
      </nav>
    </div>
  );
}

export default ProfileCard;