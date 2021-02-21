const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const app = express();
const categoryRoute = require('./api/routes/category')
const voucherRoute = require('./api/routes/voucher')
const vendorRoute = require('./api/routes/vendor')
const userRoute = require('./api/routes/user')
const adminRoute = require('./api/routes/admin')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/voucher',voucherRoute);
app.use('/category',categoryRoute);
app.use('/admin',adminRoute);
app.use('/user',userRoute);
app.use('/vendor',vendorRoute);




mongoose.connect('mongodb+srv://ravi:Ravi12345@cluster0.hioak.mongodb.net/test?retryWrites=true&w=majority')


mongoose.connection.on('error',err=>{
    console.log('error found')
});
mongoose.connection.on('connected',connected=>{
    console.log('conntected database')
});













app.use((req,res,next)=>{
    res.status(404).json({
        error: 'url not found'
    })
})

module.exports = app;