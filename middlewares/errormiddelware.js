//MiddelWare for Handling Error
const ErrormiddelWare=(err,req,res,next) => {
    err.statusCode= err.statusCode ||500 ;
    err.status=err.status||'error';
if(process.env.Node_Env=="development"){
sendEroorforDevelopment(err,res);
}else{
    sendEroorforproduction(err,res);
}
} ;

sendEroorforDevelopment=(err,res) => {
    res.status(err.statusCode).json({
        status:err.status , // for error status
        error:err ,
        message:err.message,
        stack:err.stack // display place of error
    });
}

sendEroorforproduction=(err,res) => {
    res.status(err.statusCode).json({
        status:err.status , 
        message:err.message
    });
}




module.exports=ErrormiddelWare ;