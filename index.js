const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const categoryRoute = require('./api/routes/category')
const voucherRoute = require('./api/routes/voucher')
const vendorRoute = require('./api/routes/vendor')
const userRoute = require('./api/routes/user')
const adminRoute = require('./api/routes/admin')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('port',process.env.PORT || 8000);
var port = app.get('port');


app.use('/voucher',voucherRoute);
app.use('/category',categoryRoute);
app.use('/admin',adminRoute);
app.use('/user',userRoute);
app.use('/vendor',vendorRoute);





app.get('/',(req,res)=>{
    res.send('<h1>Hello world 3 </h1>');
})
app.get('/check',(req,res)=>{
    res.send('<h1>check page </h1>');
    res.json({msg:'it fine'});
})




mongoose.connect('mongodb+srv://ravi:Ravi12345@cluster0.hioak.mongodb.net/test?retryWrites=true&w=majority')


mongoose.connection.on('error',err=>{
    console.log('error found')
});
mongoose.connection.on('connected',connected=>{
    console.log('conntected database')
});



app.listen(port,function(){
   console.log('server running on port' + port)
})