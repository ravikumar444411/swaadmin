const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.hioak.mongodb.net/<dbname>?retryWrites=true&w=majority')


mongoose.connection.on('error',err=>{
    console.log('error found')
});
mongoose.connection.on('connected',connected=>{
    console.log('conntected database')
});


// module.exports = 