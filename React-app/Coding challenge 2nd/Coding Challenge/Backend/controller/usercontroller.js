
const usercopy = require('../models/usermodel');

const myShopscopy = require('../models/shopmodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register the details
exports.signUp =(req,res)=>{
    var username= req.body.email
    usercopy.findOne({email:username})
    .then(user=>{
        if(user){
            res.json({
                message : "user already exsist, Please try with other email"
            })
        }else{
    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            res.json({
               
                message:"error occured in encyrption"
            })
        }
        let user = new usercopy({
            uname:req.body.uname,
            phoneNo:req.body.phoneNo,
            email: req.body.email,
            password: hashedPass,
            isAdmin:false
    })
    user.save()
    .then(user=>{
        res.json({
            message:'user added succesfully, You can sign In now!'
        })
    })
    .catch(error =>{
        res.json({
            message:'error'
        })
    })
})

}}
)}



// login user
exports.login =(req,res)=>{
    var username= req.body.email
    var password= req.body.password

    usercopy.findOne({email:username})
    .then(user=>{
        if(user)
        {
         bcrypt.compare(password, user.password, function(err,result) {
             if(err){
                 res.json({
                     error:err
                 })
             }
             if(result){
          
                 let token =jwt.sign({name:user.name}, "jh",{expiresIn : "30min"})
                 res.json({
                     message: "login successfull!",
                     token : token,
                     user
                 })
                
                }else{
                    res.json({
                        message: "password doesnot match, Please fill the correct password!"
                    })
                }
    })
}else{
    res.json({
        message : "Invalid email, Please try with correct email"
    })
}
})
}


// login user with otp
exports.loginWithOtp =(req,res)=>{
    var moNumber= req.body.moNumber

    usercopy.findOne({phoneNo:moNumber})
    .then(result=>{
        if(result){
            res.status(200).json({
                     message: "registered Number"
                 })
        }else{
            res.json({
                message : "Not a registered Number"
                })}
})
.catch(error=>{
    error
})
}

//get shop...

exports.getAllShop =async(req,res)=>{
    try{
        const newshop = await myShopscopy.find()
        res.status(200).send(newshop)
    }
    catch(error){
      res.send(error);
    }
}


//search shop by 

exports.getShopbyOwner =async(req,res)=>{

    const owner=new RegExp(req.params.owner,'i');
    try{
        const newshops = await myShopscopy.find({$or:[{owner:owner}]})
        res.send(newshops)
        return res
        .status(200)
    }
    catch(error){
      res.send(error);
      return res
      .status(400)
    }
}



exports.getShopbyLocation =async(req,res)=>{
    
    const location=new RegExp(req.params.location,'i');
    myShopscopy.find({$or:[{location:location}]})
    .then(data=>{
        if(data){
            return res
            .status(200)
            .send(data)
        }}).catch(error=>{
            res.send(error);
           return res
           .status(400)
           .send({error: "error occured"});
        })
}


exports.getShopbyShop =async(req,res)=>{
    
    const shop=new RegExp(req.params.shop,'i');
    myShopscopy.find({$or:[{sname:shop}]})
    .then(data=>{
        if(data){
            return res.status(200)
            .send(data)
        }}).catch(error=>{
           res.send(error);
           return res
           .status(400)
        })
}


exports.getShopbyCategory = async(req,res)=>{
    
    const category=new RegExp(req.params.category,'i');
    try{
        const newshops = await myShopscopy.find({$or:[{category:category}]})
        res.send(newshops)
        return res
            .status(200)
    }
    catch(error){
        res.send(error);
        return res
        .status(400)
      
    }
              
}


exports.getShopbyVotes =async(req,res)=>{

    try{
        const newshops = await myShopscopy.find({$or:[{votes:req.params.votes}]})
        res.send(newshops)
        return res
            .status(200)
    }
    catch(error){
        res.send(error);
        return res
        .status(400)
      
    }
}

