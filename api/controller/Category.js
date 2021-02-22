const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Category = require("../model/category");


// get All category
exports.getAllCategory = (req,res,next)=>{
    Category.find()
    .then(result=>{  res.status(200).json({  categoryData:result  })  })
    .catch(err=>{  res.status(500).json({  error:err  })  })
}


//delete category 
exports.deleteCategory = (req,res,next)=>{

    Category.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({  message: 'Category has been deleted'  })
    })
    .catch(err=>{ res.status(500).json({  error:err  })   })
}



//put category or update category by id

exports.updateCategory = (req,res,next)=>{
    Category.findOneAndUpdate({_id:req.params.id},{
        $set:{
            categoryName:req.body.categoryName
        }
    })
    .then(result=>{
        res.status(200).json({  msg: "Category has been update successfully"  })
    })
    .catch(err=>{  res.status(500).json({  error:err  })
    })
}




//add new Category
exports.addCategory = (req,res,next)=>{

            const category = new Category({
                _id: new mongoose.Types.ObjectId,
                categoryName:req.body.categoryName
            })
            category.save()
            .then(result=>{
                res.status(200).json({ msg: 'new category has been inserted' })
            })
            .catch(err=>{   res.status(500).json({  error:err  }) })
        

    
 }
