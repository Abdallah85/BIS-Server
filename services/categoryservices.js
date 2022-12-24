const CategoryModel =require('../models/categorymodel')
const asyncHandler = require('express-async-handler');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const factory = require('./handlersFactory');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');

//upload single image
exports.uploadCategoryImage = uploadSingleImage('image');

//Image processing
exports.resizeImage = asyncHandler(async (req, res, next) => {
    const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;
  
    if (req.file) {
      await sharp(req.file.buffer)
        .resize(600, 600)
        .toFormat('jpeg')
        .jpeg({ quality: 95 })
        .toFile(`uploads/categories/${filename}`);
  
      // Save image into our db
      req.body.image = filename;
    }
  
    next();
  });


// @desc    Get list of categories
// @route   GET /api/v1/categories
// @access  Public  
exports.getCategories = factory.getAll(CategoryModel);
// exports.getCategories = asyncHandler(async (req,res) => {
// const page =req.query.page * 1 || 1 ;
// const limit =req.query.limit * 1 || 5 ;
// const skip =(page-1)*limit;
// const allCategories = await CategoryModel.find({}).skip(skip).limit(limit) ;
// res.status(201).json({ result : allCategories.length , data:allCategories})  
// })



// @desc    Create category
// @route   POST  /api/v1/categories
// @access  Private/Admin-Manager
exports.createCategory = factory.createOne(CategoryModel);
// exports.createCategory =asyncHandler(  async (req ,res) => {
// const name =req.body.name ;
// const category =await CategoryModel.create({name , slug:slugify(name)}) ;
// res.status(201).json({data : category}) ;
// } )



// @desc    Get specific category by id
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getcategory = factory.getOne(CategoryModel);
// exports.getcategory=asyncHandler( async (req , res ,next) => {
// const { id } = req.params ;
// const category =await CategoryModel.findById(id);
// if(!category){
//  return next(new ApiError(`No category By This Id ${id}`,404))
// }
// res.status(201).json({data:category}) ;
// })



// @desc    Update specific category
// @route   PUT /api/v1/categories/:id
// @access  Private/Admin-Manager
exports.updatecategory = factory.updateOne(CategoryModel);
// exports.updatecategory= asyncHandler( async(req,res) => {
// const { id } =req.params ;
// const { name } =req.body ;
// const category =await CategoryModel.findByIdAndUpdate({_id:id},{name , slug:slugify(name) },{new:true})
// if(!category){
//     return next(new ApiError(`No category By This Id ${id}`,404))  
//     }
//     res.status(201).json({data:category})
// })


// @desc    Delete specific category
// @route   DELETE /api/v1/categories/:id
// @access  Private/Admin
exports.deletecategory = factory.deleteOne(CategoryModel);
// exports.deletecategory=asyncHandler( async(req,res) => {
//     const { id } =req.params ;
//     const category =await CategoryModel.findByIdAndDelete(id);
//     if(!category){
//         return next(new ApiError(`No category By This Id ${id}`,404))  
//         }
//         res.status(204).json()
    
//     })

