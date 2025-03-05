const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

const auth=async(req,res,next)=>{
    const tokenauth=req.headers.Authorization
    const token=tokenauth.split(' ')[1]
    const secret = process.env.secretkey;

    jwt.verify(token, secret, function(err, decoded) {
        if(err){
            console.log("error in auth middleware",err)
        }
        else{
            next()
        }
    });


}

module.exports = auth