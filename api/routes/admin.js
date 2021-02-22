const express = require("express");
const router = express.Router();
// const router = express();
var checkAuth = require("../middleware/auth")
const adminController = require("../controller/admin")



router.get('/',(req,res)=>{
    res.send('<h1>this is sign</h1>');
})

//update  admin
router.put('/:id',checkAuth,adminController.updateAdmin);

// login request
router.post('/login',adminController.loginAdmin)

// sign up request 
router.post('/signup',adminController.signUpAdmin);










module.exports = router;