import React from 'react';
// import './style.css';
import { Seat } from '../Seat';

// export const SeatRow = ({ seats }) => {
//   return (
//     <div className="seat-row" style={{ display: 'flex' }}>
//       {seats.map((seat) => (
//         <Seat
//           key={seat.number}
//           number={seat.number}
//           isOccupied={seat.isOccupied}
//         />
//       ))}
//     </div>
//   );
// };
// export const SeatRow = ({ seats, journeyId }) => {
//   return (
//     <div className="seat-row" style={{ display: 'flex' }}>
//       {seats.map((seat, index) => (
//         <Seat
//           key={seat.number}
//           number={seat.number}
//           isOccupied={seat.isOccupied}
//           isSelected={seat.number === journeyId}
//         />
//       ))}
//     </div>
//   );
// };
export const SeatRow = ({ seats, journeyId, rowSelectedSeat }) => {
  return (
    <div className="seat-row" style={{ display: 'flex' }}>
      {seats.map((seat, index) => (
        <Seat
          key={seat.number}
          number={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={seat.number === rowSelectedSeat}
        />
      ))}
    </div>
  );
};
