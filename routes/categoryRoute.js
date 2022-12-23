const express =require('express')
const router =express.Router()
const {getcategoryvalidation}=require('../validator/categoryValidator')
const  {getCategories
,createCategory 
,getcategory,
updatecategory,
deletecategory}=require('../services/categoryservices');


router.route('/').get(getCategories).post(createCategory) ;
router.route('/:id').get(getcategoryvalidation,getcategory).put(updatecategory).delete(deletecategory) ;

module.exports =router

