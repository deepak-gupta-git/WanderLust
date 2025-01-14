import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { NavLink } from "react-router-dom";
import Booking from "./Booking";
// import Booking from "./Booking";

const CheckOut = () => {

   
 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [unavailableDates] = useState([
    new Date(2025, 0, 10),
    new Date(2025, 0, 12),
    new Date(2025, 0, 15),
  ]); // Example of unavailable dates

  const checkAvailability = (date) => {
    const isBooked = unavailableDates.some(
      (unavailableDate) => unavailableDate.toDateString() === date.toDateString()
    );
    return isBooked;
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
 
    <div className="p-6 min-h-screen flex flex-col items-center mt-20">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Choose The Date You Want!
        </h1>

        {/* Calendar */}
        <Calendar
          onChange={onDateChange}
          value={selectedDate}
          tileClassName={({ date, view }) =>
            view === "month" && checkAvailability(date)
              ? "bg-red-200 text-red-600" // Mark unavailable dates
              : null
          }
        />

        {/* Selected Date */}
        <div className="mt-6 text-center">
          <p className="text-lg">
            Selected Date:{" "}
            <span className="font-bold">
              {selectedDate.toLocaleDateString()}
            </span>
          </p>

          {checkAvailability(selectedDate) ? (
            <p className="mt-4 text-red-600 text-lg font-semibold">
              Sorry, the villa is booked on this date.
            </p>
          ) : (
             <NavLink to="/book">
                {/* <button className="p-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer">
              Book Now
            </button> */}
             </NavLink>

          )}
        </div>
      </div>
    </div>
    <Booking/>
    </>
  
  );
};

export default CheckOut;
