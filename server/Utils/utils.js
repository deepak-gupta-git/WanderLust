const mongoose = require("mongoose");
const URI = process.env.URI
// const sampleListings = require("../../client/src/data/data");
// const { insertMany } = require("../Models/Listings.model");
// const Listing = require("../Models/Listings.model")

const ConnectDb = async (req, res) => {
    try {
        mongoose.connect(URI)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

// const initData = async () => {
//     try {
//         await Listing.insertMany(sampleListings.initData)
//     } catch (error) {
//         console.log(error)
//     }
// }

// initData();

module.exports = ConnectDb ; 