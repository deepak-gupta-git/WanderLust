import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Razorpay from 'razorpay';


const Booking = () => {
  const location = useLocation();
  const { price } = location.state || {}; 


  const calculateTotal = (amount) => {
    const gst = 0.18; 
    return amount + amount * gst; 
  };

  const totalAmount = price ? calculateTotal(price) : 0; 

  const paymentHandler = async (event) => {
    event.preventDefault();

    const amount = totalAmount * 100; 
    const currency = "INR";
    const receiptId = "1234567890";

    try {
      const response = await fetch("https://wander-lust-server.vercel.app/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          currency,
          receipt: receiptId,
        }),
      });

      const order = await response.json();
      console.log("order", order);

      const options = {
        key: "rzp_test_UbEMBNtpJ23kNG", // Razorpay key
        amount, // Amount in paise
        currency,
        name: "User XYZ",
        description: "Test Transaction",
        image: "https://i.ibb.co/5Y3m33n/test.png",
        order_id: order.id, // Order ID from your backend
        handler: async function (response) {
          console.log(response);
          // Here you can send the order details to your backend
        },
        prefill: {
          name: "Deepak Gupta",
          email: "deepak@example.com",
          contact: "9000000000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 mt-[4rem]">
        <h1 className="text-3xl font-semibold text-center mb-8">Enter Your Details Here</h1>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Total Amount With GST</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>₹{price}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <p>GST 18%</p>
              <p>₹{(price * 0.18).toFixed(2)}</p> {/* Display GST amount */}
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-4">
              <p>Total</p>
              <p>₹{totalAmount.toFixed(2)}</p> {/* Display total amount */}
            </div>

            <button
              onClick={paymentHandler}
              type="submit"
              className="btn bg-red-500 p-2 text-white w-full mt-4 rounded-md hover:bg-red-500"
            >
              PROCEED TO BOOK
            </button>
          </div>

          <form className="w-full md:w-1/2 flex flex-col gap-3 shadow-md rounded-md p-2">
            <label htmlFor="username">Name</label>
            <input
              placeholder="Enter Your Name"
              className="p-3 border rounded-md"
              name="username"
              required
              type="text"
              id="username"
              autoComplete="off"
            />

            <label htmlFor="email">Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              className="p-3 border rounded-md"
              name="email"
              required
              id="email"
              autoComplete="off"
            />

            <label htmlFor="area">Email</label>
            <input
              placeholder="Lucknow, Gomatinagar"
              className="p-3 border rounded-md"
              name="area"
              type="text"
              required
              id="area"
              autoComplete="off"
            />

            <label htmlFor="mobile">Mobile No</label>
            <input
              placeholder="+91-900000000"
              className="p-3 border rounded-md"
              name="mobile"
              type="text"
              required
              id="mobile"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
