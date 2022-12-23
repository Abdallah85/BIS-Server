const { check } = require('express-validator');
const validatormiddelware =require('../middlewares/validatormiddelware')
exports.getcategoryvalidation=[
check('id').isMongoId().withMessage("Invaild Category Id"),
validatormiddelware 
]