const express = require("express");
const app = express();

app.set('port',process.env.PORT || 8000);
var port = app.get('port');

app.get('/',(req,res)=>{
    res.send('<h1>Hello world 3 </h1>');
})
app.get('/check',(req,res)=>{
    res.send('<h1>check page </h1>');
    res.json({msg:'it fine'});
})



app.listen(port,function(){
   console.log('server running on port' + port)
})