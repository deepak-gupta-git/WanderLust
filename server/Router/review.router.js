// routes/review.routes.js
const express = require('express');
const { addReview, getReviews } = require("../Controllers/review_controllers");
const router = express.Router();

// Route to post a review
router.route("/reviews").post(addReview);

// Route to get reviews for a specific listing
router.route("/reviews").get(getReviews);  

module.exports = router;
