const Cloudinary =require('cloudinary').v2 ;
const dotenv =require('dotenv')
dotenv.config({path:'config.env'})


    Cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
});

module.exports=Cloudinary ;