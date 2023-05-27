import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      {journey && <JourneyDetail journey={journey} />}
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <div className="container">
          Nalezeno spojení s id {journey.journeyId}
        </div>
      )}
    </main>
  );
};
