const slugify = require('slugify');
const { check, body } = require('express-validator');
const validatormiddelware =require('../middlewares/validatorMiddleware')
exports.getcategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id"),
validatormiddelware 
]

exports.createCategoryvalidation=[
check('name').notEmpty().withMessage("Category requried").
isLength({min:3}).withMessage("Too Short For Category Name").
isLength({max:40}).withMessage("Too Long For Category Name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
}),
validatormiddelware,
]
exports.updatecategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id"),
body('name').optional().custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
}),
validatormiddelware, 
];
exports.deletecategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id format"),
validatormiddelware 
]