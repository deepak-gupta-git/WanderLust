const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth-controllers")
const {signupSchema, emailSchema} = require("../Validator/auth-validator")
const validate = require("../Middlewares/validate-middleware")

// router.get("/", (req, res) => {
//     res.status(200).send("Hello from router");
// })
router.route("/").post(authController.Home);
router.route("/signUp")
.post(validate(signupSchema), authController.signUp);
router.route("/login")
.post(validate(emailSchema), authController.login);


module.exports = router;