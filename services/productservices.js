const ProductModel =require('../models/productmodel') ;
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')
const ApiError =require('../utils/ApiErrors')


// get all product
exports.getProducts = asyncHandler(async (req,res) => {
    const page =req.query.page * 1 || 1 ;
    const limit =req.query.limit * 1 || 5 ;
    const skip =(page-1)*limit;
    const products = await ProductModel.find({}).skip(skip).limit(limit) ;
    res.status(201).json({ result : products.length , data:products})  
    })




    // get method to get product by id (specific category)
exports.getProduct=asyncHandler( async (req , res ,next) => {
    const { id } = req.params ;
    const product =await ProductModel.findById(id);
    if(!product){
     return next(new ApiError(`No product By This Id ${id}`,404))
    }
    res.status(201).json({data:product}) ;
    })