const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Voucher = require("../model/voucher");


// get All Voucher
exports.getAllVoucher = (req,res,next)=>{
    Voucher.find()
    .then(result=>{  res.status(200).json({  voucherData:result  })  })
    .catch(err=>{  res.status(500).json({  error:err  })  })
}


//delete Voucher 
exports.deleteVoucher = (req,res,next)=>{

    Voucher.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({  message: 'Voucher has been deleted'  })
    })
    .catch(err=>{ res.status(500).json({  error:err  })   })
}



//put Voucher or update Voucher by id

exports.updateVoucher = (req,res,next)=>{
    Voucher.findOneAndUpdate({_id:req.params.id},{
        $set:{
            voucherName:req.body.voucherName,
            title:req.body.title,
            expiry:req.body.expiry,
            coupenCode:req.body.coupenCode,
            category:req.body.category,
            description:req.body.description,
            term:req.body.term,
        }
    })
    .then(result=>{
        res.status(200).json({  msg: "Voucher has been update successfully"  })
    })
    .catch(err=>{  res.status(500).json({  error:err  })
    })
}




//add new Voucher
exports.addVoucher = (req,res,next)=>{

            const voucher = new Voucher({
                _id: new mongoose.Types.ObjectId,
                voucherName:req.body.voucherName,
                title:req.body.title,
                expiry:req.body.expiry,
                coupenCode:req.body.coupenCode,
                category:req.body.category,
                description:req.body.description,
                term:req.body.term,
            })
            voucher.save()
            .then(result=>{
                res.status(200).json({ msg: 'new Voucher has been inserted' })
            })
            .catch(err=>{   res.status(500).json({  error:err  }) })
        

    
 }
