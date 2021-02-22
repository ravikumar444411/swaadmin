const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../model/student");
var checkAuth = require("../middleware/auth")

//get single data of student by id
router.get('/:id',(req,res,next)=>{

    Student.findById(req.params.id)
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


// get all data of student
router.get('/',checkAuth,(req,res,next)=>{
    // console.log(req.userData)
    Student.find()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});

//post data of student
router.post('/',(req,res,next)=>{
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        phone: req.body.phone,
        email:req.body.email,
        gender:req.body.gender
    })
    student.save()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});


//delete single data of student by id
router.delete('/:id',(req,res,next)=>{

    Student.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message: 'product deleted',
            Removestudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


//put data or update data of student by id
router.put('/:id',(req,res,next)=>{
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            phone: req.body.phone,
            email:req.body.email,
            gender:req.body.gender
        }
    })
    .then(result=>{
        res.status(200).json({
            UpdatedStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});


module.exports = router;