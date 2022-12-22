const express =require('express');
const router =express.Router();
const {getProducts , getProduct} =require('../services/productservices');
router.route('/').get(getProducts);
router.route('/:id').get(getProduct)
module.exports =router