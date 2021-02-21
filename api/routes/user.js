const express = require("express");
const router = express.Router();
var checkAuth = require("../middleware/auth")
const userController = require("../controller/user")




//get all users
router.get('/:id',checkAuth,userController.getSingleUser);
//get all users
router.get('/',checkAuth,userController.getAllUser);

// login request
router.post('/login',userController.loginUser)

// sign up request
router.post('/signup',userController.signUpUser);










module.exports = router;