const express = require('express');
const {
    getProductValidator,
    createProductValidation,
    updateProductValidator,
    deleteProductValidator 
    } = require('../validator/productValidator')

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteproduct,
    uploadProductImages,
    resizeProductImages, 
    } = require('../services/productservices');

const authService = require('../services/authService');

const router = express.Router();

router
    .route('/')
    .get(getProducts)
    .post(
        authService.protect,
        authService.allowedTo('admin', 'manager'),
        uploadProductImages,
        resizeProductImages,
        createProductValidation,
        createProduct
        );
router
    .route('/:id')
    .get( getProductValidator,getProduct)
    .put(
        authService.protect,
        authService.allowedTo('admin', 'manager'),
        uploadProductImages,
        resizeProductImages,
        updateProductValidator,
        updateProduct
        )
    .delete(
        authService.protect,
        authService.allowedTo('admin'),
        deleteProductValidator,
        deleteproduct
        );

    module.exports = router;