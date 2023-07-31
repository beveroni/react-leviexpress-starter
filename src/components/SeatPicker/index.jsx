import React from 'react';
import './style.css';
// import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

// export const SeatPicker = ({ seats, journeyId }) => {
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((row, index) => (
//           <SeatRow key={index} seats={row} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export const SeatPicker = ({ seats, journeyId }) => {
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((row, rowIndex) => (
//           <SeatRow key={rowIndex} seats={row} journeyId={journeyId} />
//         ))}
//       </div>
//     </div>
//   );
// };

export const SeatPicker = ({ seats, journeyId, selectedSeat }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, rowIndex) => (
          <SeatRow
            key={rowIndex}
            seats={row}
            journeyId={journeyId}
            rowSelectedSeat={selectedSeat}
          />
        ))}
      </div>
    </div>
  );
};
