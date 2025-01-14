import React, { useRef, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import MeetYourMentor from './MeetYourMentor';
import ReviewForm from '../Components/ReviewForm';
import ReviewList from '../Components/ReviewList';



const ListingDetails = () => {
  const mapContainer = useRef(null);

  const location = useLocation();
  const { state } = location;
  const { price, description, location: loc, image, title, country, geometry  } = state || {};

  const defaultCoordinates = [-73.935242, 40.730610];
  const coordinates = geometry?.coordinates?.length === 2 ? geometry.coordinates : defaultCoordinates;




  const onClick = () => {
    toast.success("You Can Contact To Our Mentor For More Extra Details");
  };

  useEffect(() => { 

    // if (!coordinates || coordinates.length !== 2) {
    //   console.error("Invalid coordinates", coordinates);
    //   return;
    // }
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlY2xhc3Nyb29tIiwiYSI6ImNscnJ6dXo4ajAxYTMya3A0NG55cW1pMjYifQ.oLJ-X878O9NJFYwI_rwiLQ';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates, 
      zoom: 9
    });

    new mapboxgl.Marker({color:"red"})
        .setLngLat(coordinates)
        .addTo(map);
   
     // add pop up
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(`<h3>${title}</h3><p>${description}</p>`)
    .addTo(map);


    return () => map.remove();
  }, [coordinates,title, description]
);

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
                <NavLink to="/mentorDetails" onClick={onClick} >
                  <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                    Want Some More Info
                  </button>
                </NavLink>

                <NavLink 
                  to="/checkout"
                  state={{ price, title, loc, country, image }} // Pass location details
                >
                  <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                     Check it Out
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

      <ReviewForm listingId={state._id} />
      <ReviewList listingId={state._id} />

      <MeetYourMentor/>
    </>
  );
};

export default ListingDetails;
