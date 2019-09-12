const jwt = require('jsonwebtoken');
const key = process.env.KEY || 'key';
const signOptions = {
    expiresIn:process.env.TOKENEXPIRETIME || '3h'
};

function jwtTokenSign(object){
    return new Promise((res,rej)=>{ 
    const payload = {email:object.emailId,roles:object.roles};
    jwt.sign(payload,key,signOptions,(err,token)=>{
        if(err) return rej("can't create token");
        else
         return res(token);
    });    
   })
}

function jwtTokenVerify(token){
    return new Promise((res,rej)=>{
        jwt.verify(token,key,(err,decoded)=>{
            if(err){
               return rej('token expired')
            }
            else
             return res(decoded); 
        });
    })    
}

module.exports.jwtTokenSign = jwtTokenSign;
module.exports.jwtTokenVerify = jwtTokenVerify;