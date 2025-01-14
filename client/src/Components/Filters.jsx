import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import sampleListings from "../data/data";
import Listings from "./Listings";

const Filters = () => {
  const [allListings, setAllListings] = useState([]); // Store all listings
  const [filteredListings, setFilteredListings] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);


  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/listings");
        if (response.ok) {
          const data = await response.json();
          setAllListings(data);
          setFilteredListings(data); // Initialize with all listings
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };
    fetchListings();
  }, []);
// const listingsArray = Array.isArray(Listings) ? Listings : [Listings];
// const filtered = category === "All" ? listingsArray : listingsArray.filter((item) => item.category === category);


  const filterData = (category) => {
    setIsFiltering(true); // Start filtering
    setTimeout(() => {
      if (category === "All") {
        setFilteredListings(allListings);
      } else {
        const filtered = allListings.filter((item) => item.category === category);
        setFilteredListings(filtered);
      }
      setIsFiltering(false);
    }, 300); 
  };

  return (
    <div className="filters p-6 mt-[5rem]">

      {/* Filter Options */}
      <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-3">
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("All")}
        >
          <i className="fa-solid fa-border-all text-lg"></i>
          <p className="text-s">All</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Trending")}
        >
          <i className="fa-solid fa-fire text-lg"></i>
          <p className="text-s">Trending</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Rooms")}
        >
          <i className="fa-solid fa-bed text-lg"></i>
          <p className="text-s">Rooms</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Lake")}
        >
          <i className="fa-solid fa-water text-lg"></i>
          <p className="text-s">Lake</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Field")}
        >
          <i className="fa-solid fa-parachute-box text-lg"></i>
          <p className="text-s">Field</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Building")}
        >
          <i className="fa-solid fa-hotel text-lg"></i>
          <p className="text-s">Building</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("House")}
        >
          <i className="fa-solid fa-house-user text-lg"></i>
          <p className="text-s">House</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Play")}
        >
          <i className="fa-solid fa-volleyball text-lg"></i>
          <p className="text-s">Play</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Boats")}
        >
          <i className="fa-solid fa-ferry text-lg"></i>
          <p className="text-s">Boats</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Skiing")}
        >
          <i className="fa-solid fa-person-skiing-nordic text-lg"></i>
          <p className="text-s">Skiing</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Natural")}
        >
          <i className="fa-solid fa-tree text-lg"></i>
          <p className="text-s">Natural</p>
        </div>
        <div
          className="filter flex flex-col items-center cursor-pointer hover:opacity-80"
          onClick={() => filterData("Beach")}
        >
          <i className="fa-solid fa-umbrella-beach text-lg"></i>
          <p className="text-s">Beach</p>
        </div>
      </div>

      {/* Listings with smooth filtering */}
      <div className={`transition-opacity duration-300 ${isFiltering ? "opacity-50" : "opacity-100"}`}>
        <Listings listings={filteredListings} />
      </div>
    </div>
  );
};

export default Filters;
