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