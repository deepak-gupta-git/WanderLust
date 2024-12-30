import React, { useRef, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import mapboxgl from "mapbox-gl";

const ListingDetails = () => {
  const mapContainer = useRef(null);

  const onClick = () => {
    toast.error("You are not the Owner of this listing");
  };

  const location = useLocation();
  const { state } = location;
  const { price, description, location: loc, image, title, country, latitude, longitude } = state || {};

  useEffect(() => { 
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlY2xhc3Nyb29tIiwiYSI6ImNscnJ6dXo4ajAxYTMya3A0NG55cW1pMjYifQ.oLJ-X878O9NJFYwI_rwiLQ';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude || 77.1025, latitude || 28.7041], // Default to Delhi if no coordinates provided
      zoom: 9
    });

    // Add a marker at the listing's location
    if (latitude && longitude) {
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
    }

    return () => map.remove(); // Cleanup on unmount
  }, [latitude, longitude]);

  return (
    <>
      <div className="container mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg">
        <h5 className="text-4xl font-bold text-center mb-8">{title}</h5>
        
        {state ? (
          <div className="md:flex gap-8">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img src={image} alt={title} className="rounded-lg w-full h-[20rem] object-cover shadow-md" />
            </div>

            {/* Listing Info Section */}
            <div className="md:w-1/2 flex flex-col justify-between">
              <div className="text-2xl mb-4">
                <p>{description}</p>
                <p className="text-lg text-gray-500 mt-2">
                  <small>{loc}, {country}</small>
                </p>
                <p className="font-bold text-xl text-gray-800 mt-3">₹{price} per night</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-start gap-6 mt-6">
                <NavLink to="/editListing">
                  <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                    Edit
                  </button>
                </NavLink>

                <button 
                  onClick={onClick} 
                  className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>

                <NavLink 
                  to="/book"
                  state={{ price, title, loc, country, image, latitude, longitude }} // Pass location details
                >
                  <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                    Book
                     onClick={onClick} 
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">No listing details available.</p>
        )}
      </div>

      {/* Map Section */}
      <div className="text-center mt-12 p-8 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">You will be there</h1>
        <div ref={mapContainer} className="w-full h-96 mt-3 rounded-lg shadow-md"></div>
      </div>
    </>
  );
};

export default ListingDetails;
