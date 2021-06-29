const jwt= require("jsonwebtoken");

const authenticate =(req,res,next)=>{
    // const header=req.header("Authorization")
    // const token=header && header.split(' ')[1];

    // if(token==null){
    //     return res.sendStatus(401)
    // }
    // jwt.verify(token,'jh',(err,user)=>{
    //     if(err){
    //       return res.status(401).json("token is expired")
        
    // }
    // req.user=user;
    // next();
    //   })
    // }
    try{
        const token=req.headers.authorization;
        const decode = jwt.verify(token,"jh")
        req.user=decode
        next()
    }
    catch(error){
        res.json({
            message:"Authentication Failed"
        })
    }
}
module.exports=authenticate;