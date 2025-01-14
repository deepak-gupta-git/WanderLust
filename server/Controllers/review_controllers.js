// controllers/review.controller.js
const Review = require("../Models/Review.model");
// const Listing = require("../Models/Listings.model");


// Add a new review
const addReview = async (req, res) => {
  try {
      const {user, rating, comment} = req.body;
      // console.log(req.body)
     const reviewData =  await Review.create ({user, rating, comment});
     res.status(200).json({msg : req.body,
      // token: await listingData.generateToken(),
      // userId: listingData._id.toString(),
     })
     console.log(reviewData)
  } catch (error) {
      console.log(error)
  }

}

// Get all reviews for a particular listing
const getReviews = async (req, res) => {
    try {
      const reviews = await Review.find(); // Replace `Review` with your Mongoose model
      res.status(200).json(reviews);
      
    } catch (error) {
      res.status(500).send({ message: 'Error fetching reviews', error: err });
    
    }
  };
  
module.exports = { addReview, getReviews };
