// src/App.jsx
import { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';

// Імпортуємо дані напряму
import allDataFromFile from './data.json'; 

function App() {
  const [allData, setAllData] = useState([]);
  const [timeframe, setTimeframe] = useState('weekly');

  // useEffect встановлює дані з імпорту
  useEffect(() => {
    setAllData(allDataFromFile);
  }, []); // Виконається один раз при завантаженні

  return (
    <main className="dashboard-container">
      <ProfileCard 
        timeframe={timeframe} 
        setTimeframe={setTimeframe} 
      />
      {allData.map((activity) => {
        const timeData = activity.timeframes[timeframe];
        return (
          <ActivityCard
            key={activity.title}
            title={activity.title}
            timeframe={timeframe}
            current={timeData.current}
            previous={timeData.previous}
          />
        );
      })}
    </main>
  );
}

export default App;