import React, { useState } from 'react';
import sampleListings from "../data/data";
import Listings from './Listings'; // Import the Listings component

const Filters = () => {
  const [filteredListings, setFilteredListings] = useState(sampleListings);

  // Function to filter data based on category
  const filterData = (category) => {
    const filtered = sampleListings.filter((item) => item.category === category);
    setFilteredListings(filtered);
  };

  return (
    <div className="filters p-3 bg-white mt-[6rem]">
      <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-5">
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Trending')}>
          <i className="fa-solid fa-fire text-xl"></i>
          <p>Trending</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Rooms')}>
          <i className="fa-solid fa-bed text-xl"></i>
          <p>Rooms</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Lake')}>
          <i className="fa-solid fa-water text-xl"></i>
          <p>Lake</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Field')}>
          <i className="fa-solid fa-parachute-box text-xl"></i>
          <p>Field</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Building')}>
          <i className="fa-solid fa-hotel text-xl"></i>
          <p>Building</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('House')}>
          <i className="fa-solid fa-house-user text-xl"></i>
          <p>House</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Play')}>
          <i className="fa-solid fa-volleyball text-xl"></i>
          <p>Play</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Boats')}>
          <i className="fa-solid fa-ferry text-xl"></i>
          <p>Boats</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Skiing')}>
          <i className="fa-solid fa-person-skiing-nordic text-xl"></i>
          <p>Skiing</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Natural')}>
          <i className="fa-solid fa-tree text-xl"></i>
          <p>Natural</p>
        </div>
        <div className="filter flex flex-col items-center cursor-pointer" onClick={() => filterData('Beach')}>
          <i className="fa-solid fa-umbrella-beach text-xl"></i>
          <p>Beach</p>
        </div>
      </div>

      <Listings listings={filteredListings} />
    </div>
  );
};

export default Filters;
