const express =require('express')
const router =express.Router()
const  {getCategories,createCategory ,getcategory,updatecategory,deletecategory}  =require('../services/categoryservices')

router.route('/').get(getCategories).post(createCategory) ;
router.route('/:id').get(getcategory).put(updatecategory).delete(deletecategory) ;

module.exports =router

