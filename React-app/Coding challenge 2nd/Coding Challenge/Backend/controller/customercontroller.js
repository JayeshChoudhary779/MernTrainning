
const customercopy = require('../models/customermodel');

const categorycopy = require('../models/categorymodel');
const shopcopy = require('../models/shopmodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register the details
exports.signUp =(req,res)=>{
    var customername= req.body.email


    customercopy.findOne({email:customername})
    .then(customer=>{
        if(customer){
            res.json({
                message : "customer already exsist, Please try with other email"
            })
        }else{
    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            res.json({
               
                message:"error occured in encyrption"
            })
        }
        let customer = new customercopy({
            cname:req.body.uname,
            phoneNo:req.body.phoneNo,
            email: req.body.email,
            password: hashedPass
    })
    customer.save()
    .then(customer=>{
        res.json({
            message:'customer added succesfully, You can sign In now!'
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



// login customer
exports.login =(req,res)=>{
    var customername= req.body.email
    var password= req.body.password

    customercopy.findOne({email:customername})
    .then(customer=>{
        if(customer)
        {
         bcrypt.compare(password, customer.password, function(err,result) {
             if(err){
                 res.json({
                     error:err
                 })
             }
             if(result){
          
                 let token =jwt.sign({name:customer.name}, "jh",{expiresIn : "30min"})
                 res.json({
                     message: "login successfull!",
                     token : token,
                     customer:customer
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


//get shop by customer...

exports.getShop =async(req,res)=>{
    try{
        const newshop = await shopcopy.find({customer:req.params.customer})
        res.status(200).send(newshop)
    }
    catch(error){
      res.send(error);
    }
}

//get shop by name...

exports.getShopByName =async(req,res)=>{
    try{
        const newshop = await shopcopy.find({sname:req.params.shopName})
        res.status(200).send(newshop)
    }
    catch(error){
      res.send(error);
    }
}


//add shop..

exports.addShop =(req,res)=>{
    const newshop = new shopcopy({
        sname: req.body.sname,
        owner: req.body.owner,
        location: req.body.location,
        category: req.body.category,
        products: req.body.products,
        offer: req.body.offer,
        customer:req.body.customer

    })
    newshop.save()
    .then(data=>{
        res.json({message:"unique name"})
    })
    .catch(error=>{
        // res.json(error)
        res.json({ message:"Shop name should be unique"})
    })
}


//update shop..

exports.updateShop =async (req,res)=>{


    try{
        const name= req.params.shopName;
        const updates=req.body;
        const options={new :true};
        const updatedData= await shopcopy.findOneAndUpdate({sname:name},updates,options);
        return res.status(200).json({status: true, data: updatedData});

    }catch(error){
        return res.status(400).json({status: false, error: error});
    }
}

//delete shop by name
exports.deleteShop= (req,res)=> {
    shopcopy.deleteOne({sname:req.params.sname})
    .then((result)=>{
     res.status(200).json(result)
})
.catch((err)=>{
    res.status(500).json({
    error:err
})
})
}

//reuest category......

exports.requestCategory =(req,res)=>{
    const newcategory = new categorycopy({
        name:req.body.request,
        requestStatus: true,
        customer:req.body.customer
    })
    newcategory.save()
    .then(data=>{
        res.json({message:"unique name"})
    })
    .catch(error=>{
        res.json({ message:"Category name should be unique"})
    })
}