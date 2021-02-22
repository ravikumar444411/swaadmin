const express = require("express");
const router = express.Router();
var checkAuth = require("../middleware/auth")
const voucherController = require("../controller/voucher")




//get single voucher by id
router.post('/',checkAuth,voucherController.addVoucher);
//get all vouchers
router.get('/',checkAuth,voucherController.getAllVoucher);
//delete  voucher by id
router.delete('/:id',checkAuth,voucherController.deleteVoucher);
// //update  voucher
router.put('/:id',checkAuth,voucherController.updateVoucher);












module.exports = router;