const mongoose = require("mongoose");

const  vendorSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,

    gender:String,
    email:String,
    name:String,
    productCode:String,
    category:String,
    subCategory:String,
    otherDeails:String,
    address:String,
    phone:Number,
    logoPath:String,
    coverPath:String

})


module.exports = mongoose.model('vendor',vendorSchema);