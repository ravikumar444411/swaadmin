const http = require('http')
const app = require('./app');
const server = http.createServer(app);


server.set('port',process.env.PORT || 8000);
var port = server.get('port');

server.get('/',(req,res)=>{
    res.send('<h1>Hello world </h1>');
})


server.listen(port,function(){
   console.log('sever running port '+port)
})
