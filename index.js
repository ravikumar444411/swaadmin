const express = require("express");
const app = express();

app.set('port',3001);
var port = app.get('port');

app.get('/',(req,res)=>{
    res.send('<h1>Hello world </h1>');
})



app.listen(port,function(){
   console.log('server running on port' + port)
})