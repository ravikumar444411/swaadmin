const http = require('http')
const app = require('./app');
const server = http.createServer(app);

// app.get("/posts",(req,res)=>{
//     res.send({
//         name: "ravi"
//     })
// })


server.listen(3001,function(){
   
})