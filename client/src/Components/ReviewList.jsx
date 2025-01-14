// ReviewList.jsx
import React, { useEffect, useState } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`http://localhost:3000/api/reviews`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {/* <h3>Reviews</h3> */}
      <div className="mt-12">
      <h3 className="text-3xl font-semibold text-center text-blue-600 mb-8">Customer Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="text-lg font-medium text-gray-800">{review.user}</div>
              <div className="ml-2 text-yellow-500">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">No reviews yet. Be the first to review!</p>
      )}
    </div>
  
    </div>
  );
};

export default ReviewList;
