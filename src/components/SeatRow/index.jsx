import React from 'react';
// import './style.css';
import { Seat } from '../Seat';

// const testRow = [
//   {
//     number: 33,
//     isOccupied: false,
//   },
//   {
//     number: 29,
//     isOccupied: true,
//   },
//   {
//     number: 25,
//     isOccupied: false,
//   },
// ];

// export const SeatRow = ({ row }) => {
//   return (
//     <div className="seat-row">
//       {row.map((seat) => (
//         <Seat
//           key={seat.number}
//           number={seat.number}
//           isOccupied={seat.isOccupied}
//         />
//       ))}
//     </div>
//   );
// };

export const SeatRow = ({ seats }) => {
  return (
    <div className="seat-row" style={{ display: 'flex' }}>
      {seats.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          isOccupied={seat.isOccupied}
        />
      ))}
    </div>
  );
};
