const express = require("express");
require("dotenv").config();
const app = express();
const router = require("../server/Router/auth-router");
const listingRouter = require("../server/Router/newListings-router");
const cors = require("cors");
const ConnectDb = require("./db");

const corsOptions = {
  origin: "(link unavailable)",
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello From root");
});

app.use("/api/auth", router);
app.use("/api/listings", listingRouter);

// Database connection
(async () => {
  try {
    await ConnectDb();
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
})();

module.exports = app;
