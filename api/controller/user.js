const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const User = require("../model/user");



//get single data of user by id
exports.getSingleUser = (req,res,next)=>{
    User.findById(req.params.id)
    .then(result=>{ res.status(200).json({  user:result  })  })
    .catch(err=>{  res.status(500).json({  error:err  })  })
}

// get All user
exports.getAllUser = (req,res,next)=>{
    // console.log(req.userData)
    User.find()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
           UserData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
}


//signup new user
exports.signUpUser = (req,res,next)=>{
    
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({  error: err  });
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                username:req.body.username,
                name:req.body.name,
                password:hash,
                phone: req.body.phone,
                email:req.body.email,
                gender:req.body.gender
            })
            user.save()
            .then(result=>{
                res.status(200).json({   newUser:result  })
            })
            .catch(err=>{
                res.status(500).json({  error:err  })
            })
        }
    })
    
 }

 //login user

 exports.loginUser = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    User.find({username:username})
    .exec()
    .then(user=>{

                if(user.length<1)   // username if not match
                {
                    res.status(404).json({   message: "invalid username/password"  })
                }
                else        //username match
                {
                    // password authentication start
                    bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                            if(err)
                            {
                                res.status(404).json({  message: "invalid username/password"   });
                            }
                            if(result)
                            {
                                var token = jwt.sign({
                                    username: user[0].username,
                                    userid: user[0]._id
                                  }, 
                                  'secret', 
                                  { expiresIn: "1h"});
                                res.status(201).json({
                                    message: "user found",
                                    token:token
                                })  
                            }
                        else
                            {
                                res.status(404).json({  message: "invalid username/password"  });
                            }

                    })
                 // password authentication end
                }
    })
    .catch(err=>{
        res.status(500).json({ message: "invalid username/password" })
    })
}