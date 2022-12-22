const mongoose = require('mongoose') ;

const productSchema = mongoose.Schema({
    title :{
       type:String ,
       required:true ,
       minlength:[3,"this too short"],
       maxlength:[100,"this too long"]
    } ,
    describtion:{
     type:String ,
     required:[true,"describtion of product required"] ,
     minlength:[50,"this too short"]
    },
    price:{
        type:number ,
        required:[true,"price of product required"],
        max:[15,"too much"]
    },
    quantity:{
    type :number ,
    required:[true,"quantity of product required"]
    },
    sold:{
    type:number,
    default:0
    },
    image:{
        type:String,
        required:[true ,"product image required"]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'Category' ,
        required:[true,"Category Of Prouct Required"]
    }
},{timestamps :true})
module.exports=mongoose.model('Product',productSchema) ;