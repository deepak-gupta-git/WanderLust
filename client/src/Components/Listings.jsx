import React from "react";
import { Link } from "react-router-dom";

const Listings = ({ listings = [] }) => {
  if (listings.length === 0) {
    // If no listings are provided, just return null (fallback handled in Filters)
    return null;

  }
  return (
    <div className="container mx-auto px-4">
      <div className="row mt-4">
        {listings.length > 0 ? (
          listings.map((curEle, index) => {
            const { price, description, location, image, title, country, latitude, longitude, geometry} = curEle;
            return (
              <div key={`${title}-${index}`} className="col-12 col-sm-6 col-md-3 mb-3">
                <Link
                  to={`/listingDetails`}
                  state={{ price, description, location, image, title, country, latitude, longitude,geometry }}
                >
                  <div className="card h-[21rem] rounded-2xl overflow-hidden">
                    <img
                      src={image}
                      className="card-img-top h-[12rem] cursor-pointer hover:opacity-80"
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
        )
         
        : (
          <p className="text-center w-full mt-4">No Listings match your search.</p>
        )
        }
      </div>
    </div>
  );
};

export default Listings;
