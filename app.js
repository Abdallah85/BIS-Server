const express =require('express') ;
const dotenv =require('dotenv')
const morgan =require('morgan')
const mongoose =require('mongoose')
// const categoryRoute =require('./routes/categoryRoute')
const ApiErrors =require('./utils/ApiErrors')
dotenv.config({path:'config.env'})
const app = express() ;

//DataBase Connection
mongoose.connect(process.env.DB_URL).then((conn) => {
    console.log(`DataBase Is Connected: ${conn.Connection.host}`)
}).catch((err) => {
    console.error(`DataBase Error ${err}`)
    process.exit(1)
})


//middelware

app.use(express.json());
app.use(morgan('dev'));


//router
const globalError = require('./middlewares/errorMiddleware');
const mountRoutes = require('./routes');



mountRoutes(app);
//handel route erros 
app.use('*',(req,res,next) => {
next(new ApiErrors(`Can't Find This Route On ${req.originalUrl}`,400))
})

app.use(globalError);




//MiddelWare for Handling Error
app.use((err,req,res,next) => {
    err.statusCode= err.statusCode ||500 ;
    err.status=err.status||'error';
    res.status(err.statusCode).json({
        status:err.status , // for error status
        error:err ,
        message:err.message,
        stack:err.stack // display place of error
    });
})




const PORT =process.env.port||8000 ;
app.listen(PORT , () => {
    console.log("server done")
})