const mongoose = require("mongoose");

const  voucherSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    voucherName:String,
    title:String,
    expiry:String,
    coupenCode:String,
    category:String,
    description:String,
    term:String,
})


module.exports = mongoose.model('voucher',voucherSchema);