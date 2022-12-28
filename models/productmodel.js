const mongoose = require('mongoose') ;

const productSchema = mongoose.Schema({
    title :{
       type:String ,
       required:true ,
       minlength:[3,"this too short"],
       maxlength:[100,"this too long"]
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    describtion:{
     type:String ,
     required:[true,"describtion of product required"] ,
     minlength:[50,"this too short"]
    },
    price:{
        type:Number ,
        required:[true,"price of product required"],
        max:[500000,"too much"]
    },
    quantity:{
    type :Number ,
    required:[true,"quantity of product required"]
    },
    sold:{
    type:Number,
    default:0
    },
    colors: [String],
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'Category' ,
        required:[true,"Category Of Prouct Required"]
    }
},{timestamps :true})
module.exports=mongoose.model('Product',productSchema) ;
