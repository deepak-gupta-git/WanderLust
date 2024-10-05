const express = require("express");
require("dotenv").config();
const app = express();
const router = require("../server/Router/auth-router");
const listingRouter = require("../server/Router/newListings-router");
const cors = require("cors");

const corsOptions = {
    origin: "https://wander-lust-frontend.vercel.app", // Make sure this is correct
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
};

app.use(cors(corsOptions)); // CORS middleware should be applied here
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello From root");
});

app.use("/api/auth", router);
app.use("/api/listings", listingRouter);

ConnectDb()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });

module.exports = app;
