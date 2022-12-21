const mongoose =require('mongoose') ;

// create Schema 

const categorySchema =new mongoose.Schema({
    name:{
        type:String ,
        required:[true,'Category Required'] ,
        unique:[true ,'Category Must Be Unique'],
        minlength:[3,'Too Short For Category Name'],
        maxlength:[40,'Too Long For Category Name']
    } ,
    slug :{
        type:String ,
        lowercase:true
    },
},{timestamps :true}) ;


//create model 
const CategoryModel =mongoose.model('Category',categorySchema)

module.exports =CategoryModel ;