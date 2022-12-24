const express = require('express');
const { getcategoryvalidation, createCategoryvalidation, updatecategoryvalidation, deletecategoryvalidation } = require('../validator/categoryValidator')
const { getCategories, getcategory, createCategory, updatecategory, deletecategory } = require('../services/categoryservices');
const router = express.Router();
router
    .route('/')
    .get(getCategories)
    .post(createCategoryvalidation,createCategory);
router
    .route('/:id')
    .get(getcategoryvalidation,getcategory)
    .put(updatecategoryvalidation,updatecategory)
    .delete(deletecategoryvalidation,deletecategory);

    module.exports = router;

