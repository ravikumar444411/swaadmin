const express = require("express");
const app = express();

app.set('port',process.env.PORT || 8000);
var port = app.get('port');

app.get('/',(req,res)=>{
    res.send('<h1>Hello world 2 </h1>');
})



app.listen(port,function(){
   console.log('server running on port' + port)
})