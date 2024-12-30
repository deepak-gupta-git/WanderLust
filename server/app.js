const express = require("express");
require("dotenv").config();
const app = express();
const router = require("../server/Router/auth-router");
const ConnectDb = require("../server/Utils/utils");
const listingRouter = require("../server/Router/newListings-router");
const cors = require("cors");
const Razorpay = require("razorpay");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// const PORT = process.env.PORT || 2000; 

app.get("/", (req, res) => {
    res.status(200).send("Hello From root");
});

app.use("/api/auth", router);
app.use("/api/listings", listingRouter);

app.post("/book", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        if(!req.body){
            return res.status(400).send("Bad Request");

        }
        const options = req.body;

        const order = await razorpay.orders.create(options);

        if(!order){
            return res.status(400).send("Bad Request");
        }

        res.json(order);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

ConnectDb()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });


module.exports = app;
