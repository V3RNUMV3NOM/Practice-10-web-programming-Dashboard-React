// src/components/ActivityCard.jsx
import React from 'react';

// Цю логіку ми беремо прямо з вашого script.js
const previousTimeframeText = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month'
};

function ActivityCard({ title, timeframe, current, previous }) {
  // Форматуємо ID, як у вашому HTML
  const cardId = title.toLowerCase().replace(' ', '-');

  return (
    <div className="card activity-card" id={cardId}>
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <button className="card-menu" aria-label="Menu">...</button>
        </div>
        <div className="card-body">
          {/* Використовуємо тернарний оператор для "hr" vs "hrs" */}
          <p className="card-hours">{current}hr{current !== 1 ? 's' : ''}</p>
          <p className="card-previous">
            {previousTimeframeText[timeframe]} - {previous}hr{previous !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;