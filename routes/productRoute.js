const express =require('express');
const router =express.Router();
const {getProducts , getProduct , createProduct} =require('../services/productservices');
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProduct)
module.exports =router