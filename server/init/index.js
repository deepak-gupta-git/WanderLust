const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../Models/Listings.model");
const Review  = require("../Models/Review.model")

const URI = "mongodb+srv://deepakgupta18122003:rgjA3SHxP17YPvGa@cluster1.ykbw8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"


main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

async function main (){
    await mongoose.connect(URI);
}
const initDB = async () => {
    await Listing.deleteMany({});
    // await Review.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("db was initialized");
}

initDB();
