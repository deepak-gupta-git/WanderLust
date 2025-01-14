const express = require("express");
require("dotenv").config();
const app = express();
const router = require("../server/Router/auth-router");
const ConnectDb = require("../server/Utils/utils");
const listingsRoutes = require("./Router/listing-router");
const errorMiddleware = require("./Middlewares/error-middleware")
const reviewRoutes = require("./Router/review.router")
const cors = require("cors");
const Razorpay = require("razorpay");

const corsOptions = {
    origin: "https://wander-lust-frontend.vercel.app",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(errorMiddleware);

const PORT = process.env.PORT || 2000; 

app.get("/", (req, res) => {
    res.status(200).send("Hello From root");
});

app.use("/api/auth", router);
app.use("/api", listingsRoutes);
app.use("/api", reviewRoutes);


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

ConnectDb().then(() => {
    app.listen(PORT, () => {
        console.log("App is listening on port", PORT);
    })
})

module.exports = app;
