const mongoose = require("mongoose");

const  userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    name:String,
    phone:Number,
    gender:String,
    email:String

})


module.exports = mongoose.model('user',userSchema);