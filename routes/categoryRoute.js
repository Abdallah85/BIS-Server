const express = require('express');

const { 
    getcategoryvalidation,
    createCategoryvalidation,
    updatecategoryvalidation,
    deletecategoryvalidation 
} = require('../validator/categoryValidator')

const { 
    getCategories,
    getcategory, 
    createCategory, 
    updatecategory, 
    deletecategory,
} = require('../services/categoryservices');

const authService = require('../services/authService');

const router = express.Router();
router
    .route('/')
    .get(getCategories)
    .post(
        authService.protect,
       authService.allowedTo('admin', 'manager'),
        createCategoryvalidation,
        createCategory
    );
router
    .route('/:id')
    .get(getcategoryvalidation,getcategory)
    .put(
         authService.protect,
         authService.allowedTo('admin' , 'manager'),
        updatecategoryvalidation,
        updatecategory
        )
    .delete(
        authService.protect,
        authService.allowedTo('admin'),
        deletecategoryvalidation,
        deletecategory
        );

    module.exports = router;

