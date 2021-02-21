const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Vendor = require("../model/vendor");

// var upload = multer({ dest: 'uploads/' })


//get single data of vendor by id
exports.getSingleVendor = (req,res,next)=>{
    Vendor.findById(req.params.id)
    .then(result=>{ res.status(200).json({  vendor:result  })  })
    .catch(err=>{  res.status(500).json({  error:err  })  })
}

// get All Vendor
exports.getAllVendor = (req,res,next)=>{
    // console.log(req.VendorData)
    Vendor.find()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
           vendorData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
}


//delete vendor data
exports.deleteVendor = (req,res,next)=>{

    Vendor.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({  message: 'vendor has been deleted'  })
    })
    .catch(err=>{ res.status(500).json({  error:err  })   })
}



//put data or update data of student by id
exports.updateVendor = (req,res,next)=>{
    Vendor.findOneAndUpdate({_id:req.params.id},{
        $set:{
            gender:req.body.gender,
            email:req.body.email,
            name:req.body.name,
            productCode:req.body.productCode,
            category:req.body.category,
            subCategory:req.body.subCategory,
            otherDeails:req.body.otherDeails,
            address:req.body.address,
            phone: req.body.phone,
            logoPath:req.files.logo[0].path,
            coverPath: req.files.cover[0].path
        }
    })
    .then(result=>{
        res.status(200).json({  msg: "vendor has been update successfully"  })
    })
    .catch(err=>{  res.status(500).json({  error:err  })
    })
}




//signup new Vendor
exports.addVendor = (req,res,next)=>{

    console.log(req.files.logo[0].path)
    // console.log(req.files[1])
    // console.log(req.body)
            const vendor = new Vendor({
                _id: new mongoose.Types.ObjectId,
                gender:req.body.gender,
                email:req.body.email,
                name:req.body.name,
                productCode:req.body.productCode,
                category:req.body.category,
                subCategory:req.body.subCategory,
                otherDeails:req.body.otherDeails,
                address:req.body.address,
                phone: req.body.phone,
                logoPath:req.files.logo[0].path,
                coverPath: req.files.cover[0].path
            })
            vendor.save()
            .then(result=>{
                res.status(200).json({   newVendor:result  })
            })
            .catch(err=>{
                res.status(500).json({  error:err  })
            })

    
 }

//  //login Vendor

//  exports.loginVendor = (req,res,next)=>{
//     const username = req.body.userorname;
//     const email = req.body.email;
//     Vendor.find({email:email})
//     .exec()
//     .then(vendor=>{

//                 if(vendor.length<1)   // vendorname if not match
//                 {
//                     res.status(404).json({   message: "invalid vendorname/password"  })
//                 }
//                 else        //vendorname match
//                 {
//                     // password authentication start
//                     bcrypt.compare(req.body.password,vendor[0].password,(err,result)=>{
//                             if(err)
//                             {
//                                 res.status(404).json({  message: "invalid vendorname/password"   });
//                             }
//                             if(result)
//                             {
//                                 var token = jwt.sign({
//                                     email: vendor[0].email,
//                                     vendorid: vendor[0]._id
//                                   }, 
//                                   'secret', 
//                                   { expiresIn: "1h"});
//                                 res.status(201).json({
//                                     message: "vendor found",
//                                     token:token
//                                 })  
//                             }
//                         else
//                             {
//                                 res.status(404).json({  message: "invalid vendorname/password"  });
//                             }

//                     })
//                  // password authentication end
//                 }
//     })
//     .catch(err=>{
//         res.status(500).json({ message: "invalid vendorname/password" })
//     })
// }