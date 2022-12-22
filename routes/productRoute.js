const express =require('express');
const router =express.Router();
const {getProducts} =require('../services/productservices');
router.route('/').get(getProducts);
module.exports =router