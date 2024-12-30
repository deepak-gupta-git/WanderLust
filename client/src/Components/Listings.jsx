import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Listings = ({ listings }) => {
  const [search, setSearch] = useState("");

  if (!Array.isArray(listings)) {
    return null;
  }

  // Filter listings based on search input
  const filteredListings = listings.filter((curEle) => {
    return search.toLowerCase() === "" ? curEle :
      curEle.country.toLowerCase().includes(search);
  });

  return (
    <div className="container mx-auto px-4">
      <div className='searchBar mt-8 flex justify-center items-center'>
        <div className="navbar-nav nav-search w-full max-w-lg">
          <form className="flex items-center justify-center w-full" role="search">
            <input
              className="form-control form-input w-full p-2 border border-gray-300 rounded"
              type="search"
              placeholder="Search Destination"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-search form-btn text-white px-4 py-2 rounded ml-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        {filteredListings.length > 0 ? (
          filteredListings.map((curEle, index) => {
            const { price, description, location, image, title, country, latitude, longitude } = curEle;
            return (
              <div key={`${title}-${index}`} className="col-12 col-sm-6 col-md-4 mb-4">
                <Link
                  to={`/listingDetails`}
                  state={{ price, description, location, image, title, country, latitude, longitude }}
                >
                  <div className="card h-[26rem] rounded-2xl overflow-hidden">
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
                      <p className="card-text font-weight-bold">₹{price} per night</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-center w-full mt-4">No Listings match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
