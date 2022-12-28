const ProductModel =require('../models/productmodel') ;
const factory = require('./handlersFactory');



// @desc    Get list of products
// @route   GET /api/v1/products
// @access  Public
exports.getProducts = factory.getAll(ProductModel, 'Products');
// exports.getProducts = asyncHandler(async (req,res) => {
//     const page =req.query.page * 1 || 1 ;
//     const limit =req.query.limit * 1 || 5 ;
//     const skip =(page-1)*limit;
//     const products = await ProductModel.find({}).skip(skip).limit(limit) ;
//     res.status(201).json({ result : products.length , data:products})  
//     })



// @desc    Get specific product by id
// @route   GET /api/v1/products/:id
// @access  Public
exports.getProduct = factory.getOne(ProductModel, 'reviews');
// exports.getProduct=asyncHandler( async (req , res ,next) => {
//     const { id } = req.params ;
//     const product =await ProductModel.findById(id);
//     if(!product){
//      return next(new ApiError(`No product By This Id ${id}`,404))
//     }
//     res.status(201).json({data:product}) ;
//     })



// @desc    Create product
// @route   POST  /api/v1/products
// @access  Private
exports.createProduct = factory.createOne(ProductModel);
// exports.createProduct =asyncHandler(  async (req ,res) => {
//     const product =await ProductModel.create(req.body) ;
//     res.status(201).json({data : product}) ;
//         } )




// @desc    Update specific product
// @route   PUT /api/v1/products/:id
// @access  Private
exports.updateProduct = factory.updateOne(ProductModel);
// exports.updateProduct= asyncHandler( async(req,res) => {
//     const { id } =req.params ;
//     const product =await ProductModel.findByIdAndUpdate({_id:id},req.body,{new:true})
//     if(!product){
//         return next(new ApiError(`No product By This Id ${id}`,404))  
//         }
//         res.status(201).json({data:product})
    
//     })



// @desc    Delete specific product
// @route   DELETE /api/v1/products/:id
// @access  Private
exports.deleteproduct = factory.deleteOne(ProductModel);
// exports.deleteproduct=asyncHandler( async(req,res) => {
//     const { id } =req.params ;
//     const product =await ProductModel.findByIdAndDelete(id);
//     if(!product){
//         return next(new ApiError(`No product By This Id ${id}`,404))  
//         }
//         res.status(204).json()
    
//     })


