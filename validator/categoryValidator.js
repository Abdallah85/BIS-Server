const { check } = require('express-validator');
const validatormiddelware =require('../middlewares/validatorMiddleware')
exports.getcategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id"),
validatormiddelware 
]
exports.createCategoryvalidation=[
check('name').notEmpty().withMessage("Category requried").
isLength({min:3}).withMessage("Too Short For Category Name").
isLength({max:40}).withMessage("Too Long For Category Name") ,
validatormiddelware
]
exports.updatecategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id"),
validatormiddelware 
]
exports.deletecategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id"),
validatormiddelware 
]