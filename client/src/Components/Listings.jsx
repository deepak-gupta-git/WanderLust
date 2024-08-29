import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Listings = ({ listings }) => {
  const [search, setSearch] = useState("")
  console.log(search);

  if (!Array.isArray(listings)) {
    return null;
  }

  return (

    <div>

<div className='searchBar mt-8 flex justify-center items-center'>
  <div className="navbar-nav nav-search w-[80%] max-w-lg ">
    <form className="flex items-center justify-center w-full" role="search">
      <input
        className="form-control form-input w-full max-w-xs sm:max-w-sm lg:max-w-md p-2 mr-2 border border-gray-300 rounded"
        type="search"
        placeholder="Search Destination"
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="btn btn-search form-btn text-white px-4 py-2 rounded "
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
</div>

        <div className="container">
       <div className="row m-5">
         {listings.filter((curEle) => {
           return search.toLowerCase() === "" ? curEle :
           curEle.country.toLowerCase().includes(search);
         })
           .map((curEle, index) => {
             const { price, description, location, image, title, country } = curEle;
             return (
               <div key={`${title}-${index}`} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                 <Link
                   to={`/listingDetails`}
                   state={{ price, description, location, image, title, country }}
                 >
                   <div className="card h-[26rem] rounded-2xl">
                     <img
                       src={image}
                       className="card-img-top h-[17rem] cursor-pointer hover:opacity-80"
                       alt={title}
                     />
                     <div className="card-body">
                       <h5 className="card-title text-xl font-bold">{title}</h5>
                       <p className="card-text">
                         <small className="text-muted">
                           {location}, {country}
                         </small>
                       </p>
                       <p className="card-text font-weight-bold">${price} per night</p>
                     </div>
                   </div>
                 </Link>
               </div>
             );
           })}
       </div>
     </div>
    </div>
    
   
  );
};

export default Listings;
