import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  const handleBuy = () => {
    // console.log('Funguju!');
    // navigate('/reservation'); // Přesměrování na stránku '/rezervace'
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/reservation/${data.results.reservationId}`); // Přesměrování na stránku detailu rezervace
      });
  };

  return (
    <main>
      {journey && <JourneyDetail journey={journey} />}
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <SelectedSeat number={journey.autoSeat} />}
      {journey === null ? null : (
        <div className="container">
          Nalezeno spojení s id {journey.journeyId}
        </div>
      )}
      <div className="controls container">
        <button className="btn btn--big" onClick={handleBuy} type="button">
          Rezervovat
        </button>
      </div>
    </main>
  );
};
