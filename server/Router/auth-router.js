const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth-controllers")


// router.get("/", (req, res) => {
//     res.status(200).send("Hello from router");
// })
router.route("/").post(authController.Home);
router.route("/signUp").post(authController.signUp);
router.route("/login").post(authController.login);


module.exports = router;