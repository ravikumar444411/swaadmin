const express = require("express");
const router = express.Router();
var checkAuth = require("../middleware/auth")
const adminController = require("../controller/admin")




// //update  admin
router.put('/:id',checkAuth,adminController.updateAdmin);

// login request
router.post('/login',adminController.loginAdmin)

// sign up request
router.post('/signup',adminController.signUpAdmin);










module.exports = router;