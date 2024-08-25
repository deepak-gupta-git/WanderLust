import React from 'react';
import { Link } from 'react-router-dom';

const Listings = ({ listings }) => {
  if (!Array.isArray(listings)) {
    return null;
  }

  return (
    <div className="container mt-[8rem]">
      <div className="row m-5">
        {listings.map((curEle, index) => {
          const { price, description, location, image, title, country } = curEle;
          return (
            <div key={`${title}-${index}`} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link
                to={`/listingDetails`}
                state={{ price, description, location, image, title, country }}
              >
                <div className="card h-[26rem] rounded-2xl">
                  <img src={image} className="card-img-top h-[17rem] cursor-pointer hover:opacity-80" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title text-xl font-bold">{title}</h5>
                    <p className="card-text"><small className="text-muted">{location}, {country}</small></p>
                    <p className="card-text font-weight-bold">${price} per night</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
