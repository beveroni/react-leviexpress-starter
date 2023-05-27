import React, { useEffect, useState } from 'react';
import './style.css';

// komponenta DatesOptions

export const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateCs}
        </option>
      ))}
    </>
  );
};

// komponenta CityOptions

export const CityOptions = ({ cities }) => {
  // console.log(cities);
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

// komponenta JourneyPicker

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Odesílám formulář s cestou');
    // console.log('Odkud:', fromCity);
    // console.log('Kam:', toCity);
    // console.log('Datum:', date);

    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => response.json())
      .then((data) => onJourneyChange(data.results));
  };

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then((response) => response.json())
      .then((data) => setCities(data.results));
  }, []);

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates').then(
      (response) => response.json().then((data) => setDates(data.results)),
    );
  }, []);

  // useEffect(() => {
  //   // Simulace načítání seznamu měst
  //   setTimeout(() => {
  //     setCities([
  //       { name: 'Praha', code: 'CZ-PRG' },
  //       { name: 'Brno', code: 'CZ-BRQ' },
  //     ]);
  //   }, 1000);
  // }, []);

  // const isSubmitDisabled = !(fromCity && toCity && date);

  let submitDisabled = false;
  if (fromCity === '' || toCity === '' || date === '') {
    submitDisabled = true;
  }

  if (fromCity === toCity) {
    submitDisabled = true;
  }

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form
          className="journey-picker__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              {' '}
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit" disabled={submitDisabled}>
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
