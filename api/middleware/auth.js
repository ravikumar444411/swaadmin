var jwt = require('jsonwebtoken');

exports.checkAuth= (req,res,next) =>{

    try{
    var token = req.headers.authorization.split(" ")[1];
    var decode = jwt.verify(token,'secret');
    req.userData = decode;
    next();

    }
    catch(error){
        res.status(401).json({
            error: "Invalid token"
        })
    }
}