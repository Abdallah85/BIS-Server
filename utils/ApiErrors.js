//this class for  errors in project (display the details of error)

class ApiErrors extends Error{
    constructor(messaage,statuscode){
        super(messaage) ;
        this.statuscode=statuscode ;
        this.status=`${statuscode}`.startsWith(4) ? 'fail' :'error';
        this.isOpertional=true ;
    }
}
module.exports=ApiErrors ;
