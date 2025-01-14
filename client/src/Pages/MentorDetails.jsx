import React from "react";
import { FaMusic, FaGamepad, FaHiking,FaPhone, FaEnvelope } from "react-icons/fa";

const MentorDetails = () => {
  const mentor = {
    name: "Deepak Gupta",
    profilePicture: "Profile_photo.jpg",
    bio: "Deepak is an experienced traveler and guide with over 3 years of expertise in exploring and sharing the beauty of hidden destinations. He has mentored countless travel enthusiasts, helping them craft unforgettable journeys.",
    bornDate: "Dec 18, 2005",
    reviews: [
     "Deepak is an exceptional guide! His knowledge about destinations is unmatched.",
      "I had the most amazing travel experience thanks to Deepak's guidance.",
      "Highly recommend Deepak for anyone looking to explore offbeat locations."
    ],
    hobby: "Hiking in the mountains",
    favoriteSong: "Chasing Cars by Snow Patrol",
    bestGame: "Chess",
    Mobile:"XXXXXXXXXX",
    Email : "deepakgupta6707@gmail.com"
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          {/* Mentor Section */}
          <div className="text-center">
           <h1 className="text-red-500 text-3xl font-bold">Mentor Details</h1> 
            <img
              src={mentor.profilePicture}
              alt="Mentor Profile"
              className="w-40 h-40 rounded-full mx-auto mb-2 mt-3"
            />
            <h1 className="text-2xl font-bold mb-2">{mentor.name}</h1>
            <p className="text-gray-600">Born: {mentor.bornDate}</p>
            <p className="mt-4 text-gray-800">{mentor.bio}</p>
          </div>

          <div className="revies">
          <h1 className="text-3xl font-bold mt-10">Reviews</h1>
          <p className="mt-2">{mentor.reviews}</p>
          </div>

          {/* Additional Details Section */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Additional Details</h2>
            <div className="flex items-center mb-4">
              <FaHiking className="text-green-500 mr-2" />
              <p className="text-gray-800">Hobby: {mentor.hobby}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMusic className="text-blue-500 mr-2" />
              <p className="text-gray-800">Favorite Song: {mentor.favoriteSong}</p>
            </div>
            <div className="flex items-center">
              <FaGamepad className="text-red-500 mr-2" />
              <p className="text-gray-800">Best Game: {mentor.bestGame}</p>
            </div>

            <div className="flex items-center mt-4">
              <FaPhone className="text-orange-500 mr-2" />
              <p className="text-gray-800">Mobile Number : {mentor.Mobile}</p>
            </div>

            <div className="flex items-center mt-4">
              <FaEnvelope className="text-violet-500 mr-2" />
              <p className="text-gray-800">Email : {mentor.Email}</p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
