const Listing = require("../Models/Listings.model")


const createListings = async (req, res) => {
    try {
        const {title,description, image, location,  price, country} = req.body;
        // console.log(req.body)
       const listingData =  await Listing.create ({title,description, image, location,  price, country});
       res.status(200).json({msg : req.body,
        // token: await listingData.generateToken(),
        // userId: listingData._id.toString(),
       })
    //    console.log(listingData)
    } catch (error) {
        console.log(error)
    }

}

module.exports = createListings;