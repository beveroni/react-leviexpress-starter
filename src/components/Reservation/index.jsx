import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';

export const Reservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        setReservation(results);
        console.log(results);
      });
  }, [id]);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      {reservation && (
        <div className="reservation__body">
          <div className="reservation__headings">
            <p>
              Datum cesty:<strong>{reservation.date}</strong>
            </p>
            <p>
              Odjezd:{' '}
              <strong>
                {reservation.fromCity.name},{reservation.fromCity.station},{' '}
                {reservation.fromCity.time}
              </strong>
              ,
            </p>
            <p>
              {' '}
              Příjezd:{' '}
              <strong>
                {' '}
                {reservation.toCity.name}, {reservation.toCity.station},{' '}
                {reservation.toCity.time}
              </strong>
            </p>
            <p>
              Sedadlo: <strong>{reservation.seatNumber}</strong>
            </p>
          </div>
        </div>
      )}
      {!reservation && <p>Načítání jízdenky...</p>}
    </div>
  );
};
