const express = require("express");
const router = express.Router();
var checkAuth = require("../middleware/auth")
const categoryController = require("../controller/Category")




//get single category by id
router.post('/',checkAuth,categoryController.addCategory);
//get all categorys
router.get('/',checkAuth,categoryController.getAllCategory);
//delete  category by id
router.delete('/:id',checkAuth,categoryController.deleteCategory);
// //update  category
router.put('/:id',checkAuth,categoryController.updateCategory);












module.exports = router;