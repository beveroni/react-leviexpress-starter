import React from 'react';
import './style.css';
import { BusStop } from '../BusStop';

// export const JourneyDetail = ({ journey }) => {
//   console.log(journey); // Vypíše objekt journey do konzole prohlížeče
//   return (
//     <div className="journey-detail container">
//       <h2>Podrobnosti cesty</h2>
//       <div className="stops"></div>
//       <BusStop name="Praha" station="ÚAN Florenc" time="15:55" />
//     </div>
//   );
// };
export const JourneyDetail = ({ journey }) => {
  console.log(journey); // Vypíše objekt journey do konzole prohlížeče

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey &&
          journey.stops &&
          journey.stops.map((stop, index) => (
            <BusStop
              // key={index}
              key={stop.code}
              name={stop.name}
              station={stop.station}
              time={stop.time}
            />
          ))}
      </div>
    </div>
  );
};
