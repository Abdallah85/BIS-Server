const express =require('express') ;
const dotenv =require('dotenv')
const morgan =require('morgan')
const mongoose =require('mongoose')
const categoryRoute =require('./routes/categoryRoute')
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


app.use('/api/v1/categories',categoryRoute )

//handel route erros 
app.use('*',(req,res,next) => {
//creat error and sending it to next MiddelWare
const err =new Error(`Can't Find This Route ${req.originalUrl}`)
next(err.message)
})





//MiddelWare for Handling Error
app.use((err,req,res,next) => {
    res.status(400).json({err});
})




const PORT =process.env.port||8000 ;
app.listen(PORT , () => {
    console.log("server done")
})