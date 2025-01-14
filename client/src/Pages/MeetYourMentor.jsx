import React from "react";
import { NavLink } from "react-router-dom";

const MeetYourMentor = () => {
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
  };

  const coHost = {
    name: "Hermione Granger",
    profilePicture: "co-host.jpeg",
    bio: "Hermione Granger is a front-end developer and UI/UX designer with a passion for creating intuitive user experiences. She co-hosts mentoring sessions alongside Hermione Granger.",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          {/* Mentor Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 text-">Meet Your Mentor</h1>
            <img
              src={mentor.profilePicture}
              alt="Mentor Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
           <NavLink to="/mentorDetails">
         
            <h1 className="text-2xl font-bold mb-2">{mentor.name}</h1>
           </NavLink>
            <p className="text-gray-600">Born: {mentor.bornDate}</p>
            <p className="mt-4 text-gray-800">{mentor.bio}</p>

          </div>

          <div className="revies">
          <h1 className="font-bold text-3xl mt-10">Reviews</h1>
          <p className="mt-2">{mentor.reviews}</p>
          </div>


          {/* Co-Host Section */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Co-Host</h2>
            <div className="flex items-center space-x-4">
              <img
                src={coHost.profilePicture}
                alt="Co-Host Profile"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{coHost.name}</h3>
                <p className="text-gray-800">{coHost.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetYourMentor;