const express = require("express");
const app = express();
// const adminController = require("./api/controller/admin")
const {checkAuth} = require("./api/middleware/auth")


app.set('port',process.env.PORT || 8000);
var port = app.get('port');

// app.use('/admin',checkCon.checkAuth);

app.get('/',(req,res)=>{
    res.send('<h1>Hello world 3 </h1>');
})
app.get('/check',(req,res)=>{
    res.send('<h1>check page </h1>');
    res.json({msg:'it fine'});
})




// mongoose.connect('mongodb+srv://ravi:Ravi12345@cluster0.hioak.mongodb.net/test?retryWrites=true&w=majority')


// mongoose.connection.on('error',err=>{
//     console.log('error found')
// });
// mongoose.connection.on('connected',connected=>{
//     console.log('conntected database')
// });



app.listen(port,function(){
   console.log('server running on port' + port)
})