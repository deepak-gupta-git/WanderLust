const express = require("express");
const router = express.Router();
const {addListings, getListings
    // , deleteListing
} = require("../Controllers/listings-controllers")




router.route("/listings").get(getListings);
// router.route("/listing").post(createListings);

router.route("/listings").post(addListings);
// router.route("/listings/:id").delete(deleteListing)

module.exports = router;