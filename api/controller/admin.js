const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Admin = require("../model/admin");



//put data or update data of student by id
exports.updateAdmin = (req,res,next)=>{


    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({  error: err  });
        }
        else {
            Admin.findOneAndUpdate({_id:req.params.id},{
                $set:{
                    name:req.body.name,
                    password:hash,
                    phone: req.body.phone,
                    email:req.body.email,
                    gender:req.body.gender
                }
            })
            .then(result=>{
                res.status(200).json({  msg: "Profile has been update successfully", 
                result:result  })
            })
            .catch(err=>{  res.status(500).json({  error:err  })
            })
        }

    
    })

  
}


//signup new Admin
exports.signUpAdmin = (req,res,next)=>{
    
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({  error: err  });
        }
        else {
            const admin = new Admin({
                _id: new mongoose.Types.ObjectId,
                username:req.body.username,
                name:req.body.name,
                password:hash,
                phone: req.body.phone,
                email:req.body.email,
                gender:req.body.gender
            })
            admin.save()
            .then(result=>{  res.status(200).json({ msg: "Sign up successfully"})  })
            .catch(err=>{  res.status(500).json({  error:err  })  })
        }
    })
    
 }

 //login Admin

 exports.loginAdmin = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    Admin.find({username:username})
    .exec()
    .then(admin=>{

                if(admin.length<1)   // username if not match
                {
                    res.status(404).json({   message: "invalid username/password"  })
                }
                else        //username match
                {
                    // password authentication start
                    bcrypt.compare(req.body.password,admin[0].password,(err,result)=>{
                            if(err)
                            {
                                res.status(404).json({  message: "invalid username/password"   });
                            }
                            if(result)
                            {
                                var token = jwt.sign({
                                    username: admin[0].username,
                                    adminId: admin[0]._id
                                  }, 
                                  'secret', 
                                  { expiresIn: "1h"});
                                res.status(201).json({
                                    message: "admin found",
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