const jwt=require('jsonwebtoken')

const validateToken=(req,res,next)=>{
    const accessToken=req.headers["accessToken"]
    if(!accessToken){
        return res.send({error: 'no token'})
    }
    try{
        const validToken=jwt.verify(accessToken, 'projectwork')
        req.user=validToken 
        if(validToken){return next()}    
    }catch(err){
        return res.send({error: err})
    }
}

module.exports=validateToken