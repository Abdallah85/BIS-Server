const ProductModel =require('../models/productmodel') ;
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')
const ApiError =require('../utils/ApiErrors')