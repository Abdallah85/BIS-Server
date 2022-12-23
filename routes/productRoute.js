const express = require('express');
const { getProductValidator, createProductValidation, updateProductValidator, deleteProductValidator } = require('../validator/productValidator')
const { getProducts, getProduct, createProduct, updateProduct, deleteproduct } = require('../services/productservices');
const router = express.Router();
router
    .route('/')
    .get(getProducts)
    .post(createProductValidation,createProduct);
router
    .route('/:id')
    .get(getProduct, getProductValidator)
    .put(updateProduct,updateProductValidator)
    .delete(deleteproduct,deleteProductValidator);

    module.exports = router;