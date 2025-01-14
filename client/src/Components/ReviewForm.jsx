// ReviewForm.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ReviewForm = ({ listingId }) => {
  const [review, setReview] = useState({
    user: '',
    rating: 1,
    comment: '',
    listingId: listingId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { ...review, listingId };
    try {
      const response = await fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      });
      console.log('Request Body:', newReview);
      console.log('Response:', response);
      if (response.ok) {
        toast.success('Review submitted successfully!');
        setReview({ user: '', rating: 1, comment: '' });
      } else {
        toast.error('Failed to submit review.');
        console.log(response)
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    }
  };
  
  return (
    <div>
      {/* <h3>Submit a Review</h3> */}
      <div className="bg-white shadow-lg rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="user"
            value={review.user}
            onChange={handleChange}
            required
            className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Rating</label>
          <select
            name="rating"
            value={review.rating}
            onChange={handleChange}
            required
            className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Comment</label>
          <textarea
            name="comment"
            value={review.comment}
            onChange={handleChange}
            required
            className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review..."
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  
    </div>
  );
};

export default ReviewForm;
