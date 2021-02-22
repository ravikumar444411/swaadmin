const express = require("express");
const router = express.Router();
var checkAuth = require("../middleware/auth")
const vendorController = require("../controller/vendor")
var multer  = require('multer')

//for storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

//for filter
function fileFilter (req, file, cb) {
  if(file.mimetype  ===  'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/pdf')
  {
    cb(null,true);
  }
  else{
    cb(null,false);
  }
  
}
 
var upload = multer({ 
  storage: storage,
  fileFilter:fileFilter
})


var cpUpload = upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'cover', maxCount: 1}])



//to add vendor with file
// router.post('/',cpUpload,checkAuth,vendorController.addVendor);
router.post('/',cpUpload,vendorController.addVendor);

//get single vendor by id
router.get('/:id',checkAuth,vendorController.getSingleVendor);
//get all vendors
router.get('/',checkAuth,vendorController.getAllVendor);
//delete  vendor by id
router.delete('/:id',checkAuth,vendorController.deleteVendor);
// //update  vendor
router.put('/:id',cpUpload,checkAuth,vendorController.updateVendor);













module.exports = router;