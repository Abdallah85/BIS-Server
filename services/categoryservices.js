const CategoryModel =require('../models/categorymodel')
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')
const ApiError =require('../utils/ApiErrors')

// get method to res all categories in database
exports.getCategories = asyncHandler(async (req,res) => {
const page =req.query.page * 1 || 1 ;
const limit =req.query.limit * 1 || 5 ;
const skip =(page-1)*limit;
const allCategories = await CategoryModel.find({}).skip(skip).limit(limit) ;
res.status(201).json({ result : allCategories.length , data:allCategories})  
})



// post method to create category (Only Adamin)
exports.createCategory =asyncHandler(  async (req ,res) => {
const name =req.body.name ;
const category =await CategoryModel.create({name , slug:slugify(name)}) ;
res.status(201).json({data : category}) ;
} )


// get method to get category by id (specific category)
exports.getcategory=asyncHandler( async (req , res ,next) => {
const { id } = req.params ;
const category =await CategoryModel.findById(id);
if(!category){
 return next(new ApiError(`No category By This Id ${id}`,404))
}
res.status(201).json({data:category}) ;
})






//update for category by id (Admin)
exports.updatecategory= asyncHandler( async(req,res) => {
const { id } =req.params ;
const { name } =req.body ;
const category =await CategoryModel.findByIdAndUpdate({_id:id},{name , slug:slugify(name) },{new:true})
if(!category){
    return next(new ApiError(`No category By This Id ${id}`,404))  
    }
    res.status(201).json({data:category})

})


//delete a category by id (Admin)
exports.deletecategory=asyncHandler( async(req,res) => {
    const { id } =req.params ;
    const category =await CategoryModel.findByIdAndDelete(id);
    if(!category){
        return next(new ApiError(`No category By This Id ${id}`,404))  
        }
        res.status(204).json()
    
    })






