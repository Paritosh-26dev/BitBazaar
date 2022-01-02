const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

//API for registering new user
router.post('/api/register', userController.register);

//API for loging in user
router.post('/api/login', userController.login); 

//API for forget password
router.post("/api/forgot_pass", userController.forgot);

//API for reset password
router.post("/api/reset_pass", auth, userController.reset);

// router.patch("/api/user_update", auth, userController.update);
// router.get("/api/logout", userController.logout);
// router.post("/api/google_signing", userController.google);

module.exports = router;  