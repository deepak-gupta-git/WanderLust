// const { query } = require("express");
const Listing = require("../Models/Listings.model")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

const MAP_TOKEN = "pk.eyJ1IjoidGhlY2xhc3Nyb29tIiwiYSI6ImNscnJ6dXo4ajAxYTMya3A0NG55cW1pMjYifQ.oLJ-X878O9NJFYwI_rwiLQ"
const geoCodingClient = mbxGeocoding({accessToken: MAP_TOKEN})

const addListings = async (req, res) => {
    try {
        const result = await geoCodingClient.forwardGeocode({
            query: req.body.location,
            limit: 1,
        }).send();

        const { title, description, image, location, price, country } = req.body;

        // Save the listing to the database
        const listingData = await Listing.create({
            title,
            description,
            image,
            location,
            price,
            country,
            geometry: result.body.features[0].geometry,
        });
        res.status(200).json({
            msg: req.body,
            // geometry: listingData.geometry
            listing: listingData,
        });
        console.log(listingData);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding the listing." });
    }
};

// const deleteListing = async (req, res) => {
//     try {
//       const {id} = req.params;
//       const deletedListing = await Listing.findByIdAndDelete(id);
//       console.log(deletedListing);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Error deleting listing' });
//     }
//   };
  



  
  // Get all reviews for a particular listing
  const getListings = async (req, res) => {
      try {
        const listings = await Listing.find(); // Replace `Review` with your Mongoose model
        res.status(200).json(listings);
        // console.log(coordinates);
        // res.status(200).json({ listings, coordinates });
      } catch (error) {
        res.status(500).send({ message: 'Error fetching reviews', error: error.message});
      
      }
    };


    

module.exports = {addListings, getListings
    // ,deleteListing
};