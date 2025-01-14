const mongoose = require("mongoose");
// const { set } = require("../app");
const listingSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        image: {
                type: String,
                default : 
                "https://www.istockphoto.com/photo/radhanagar-beach-havelock-island-andaman-islands-gm968845818-264108285?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach&utm_medium=affiliate&utm_source=unsplash&utm_term=beach%3A%3A%3A",
            set : (v) => 
                v === ""
            ? "https://www.istockphoto.com/photo/radhanagar-beach-havelock-island-andaman-islands-gm968845818-264108285?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach&utm_medium=affiliate&utm_source=unsplash&utm_term=beach%3A%3A%3A"
            : v,
        },
        

        description:{
            type:String,
            required:true
        },

        price:{
            type:Number,
            required:true
        },

        location:{
            type:String,
            required:true
        },

        country:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:false
        }
        ,
           geometry: {
                type: {
                  type: String,
                  enum: ['Point', 'LineString', 'Polygon'],
                  required: true
                },
                coordinates: {
                  type: [Number],
                  required: true
                }
              }
            
        },

        
)


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

