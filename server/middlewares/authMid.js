const jwt=require('jsonwebtoken')

const validateToken=(req,res,next)=>{
    const accessToken=req.headers["x-access-token"]
    if(!accessToken){
        return res.send({message: 'no token'})
    }
    try{
        const validToken=jwt.verify(accessToken, 'projectwork')
        if(validToken){return next()}    
    }catch(err){
        return res.send({error: err})
    }
}

module.exports=validateToken