//MiddelWare for Handling Error
const ErrormiddelWare=(err,req,res,next) => {
    err.statusCode= err.statusCode ||500 ;
    err.status=err.status||'error';
    res.status(err.statusCode).json({
        status:err.status , // for error status
        error:err ,
        message:err.message,
        stack:err.stack // display place of error
    });
}
module.exports=ErrormiddelWare ;