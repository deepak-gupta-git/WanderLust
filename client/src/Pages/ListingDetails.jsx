import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ListingDetails = () => {
  const onClick = () => {
    toast.error("You are not the Owner of this listing")
  }
  const location = useLocation();
  const { state } = location;
  const { price, description, location: loc, image, title, country } = state || {};

  return (
    
    <div className="container mt-[9rem] h-[150vh]">
      <h5 className="card-title text-4xl">{title}</h5>
      {state ? (
        <div className="card h-[45rem] rounded-2xl mt-[1rem] ">
          <img src={image} className="card-img-top h-[25rem]" alt={title} />
          <div className="card-body">
            
            <p className="card-text text-2xl ">{description}</p>
            <p className="card-text text-xl mt-3"><small className="text-muted">{loc}, {country}</small></p>
            <p className="card-text font-weight-bold text-xl mt-3">${price} per night</p>

            <div className="mt-2">
            <NavLink to="/editListing"><button className="bg-blue-500 btn hover:bg-blue-500">Edit</button></NavLink>
            <button onClick={onClick} className="bg-red-500 btn hover:bg-red-500 ml-[10rem]">Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <p>No listing details available.</p>
      )}
    </div>
  );
};

export default ListingDetails;
