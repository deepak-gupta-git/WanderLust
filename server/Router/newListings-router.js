const express = require("express");
const router = express.Router();
const createListings = require("../Controllers/listings-controllers")


// router.get("/", (req, res) => {
//     res.status(200).send("Hello from router");
// })
router.route("/listing").post(createListings);

module.exports = router;