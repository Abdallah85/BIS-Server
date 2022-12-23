const express =require('express')
const router =express.Router()
const {getcategoryvalidation,createCategoryvalidation,updatecategoryvalidation,deletecategoryvalidation}=require('../validator/categoryValidator')
const  {getCategories
,createCategory 
,getcategory,
updatecategory,
deletecategory}=require('../services/categoryservices');


router.route('/').get(getCategories).post(createCategoryvalidation,createCategory) ;
router.route('/:id').get(getcategoryvalidation,getcategory).put(updatecategoryvalidation,updatecategory).delete(deletecategoryvalidation,deletecategory) ;

module.exports =router

