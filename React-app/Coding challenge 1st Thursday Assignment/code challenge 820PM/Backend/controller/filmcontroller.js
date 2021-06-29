

const myFilmscopy = require('../models/filmmodel')

exports.addFilm =(req,res,next)=>{
    const newfilm = new myFilmscopy({
        name: req.body.name,
        dname: req.body.dname,
        boxOfficeCollection: req.body.boxOfficeCollection,
        rating: req.body.rating
    })
    newfilm.save()
    .then(data=>{
        res.json({message:"unique name"})
    })
    .catch(error=>{
        res.json({ message:error})
    })
}

exports.getFilm =async(req,res)=>{
    try{
        const newfilms = await myFilmscopy.find()
        res.send(newfilms)
    }
    catch(error){
      res.send(error);
    }
}

//delete film by name
exports.deleteFilm= (req,res,next)=> {

    myFilmscopy.remove({name:req.params.name})
    .then(result=>{
     res.status(200).json({
    message: "delete successfully"
})
})
.catch(err=>{
    res.status(500).json({
    error:err
})
})
}























// // get the data.
// exports.getdetails=async (req,res) => {
//     try{
//            const user = await User.find()
//            res.json(user)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// }

// //delete data

// exports.deletedata= (req,res,next)=> {
//     // User.remove({email:req.body.email})

//     User.remove({_id:req.params.id})
//     .then(result=>{
//      res.status(200).json({
//     message: "delete successfully"
// })
// })
// .catch(err=>{
//     res.status(500).json({
//     error:err
// })
// })
// }


// ///// change password

// exports.changepwd=async (req,res,next)=> {

//     try{
//         const {id}= req.params;
//         const salt= await bcrypt.genSalt(10);
//         const password =await bcrypt.hash(req.body.password,salt);
//         const userpassword= await User.findByIdAndUpdate({_id:id},{password:password},{new:true});
//         return res.status(200).json({status: true, data: userpassword});

//     }catch(error){
//         return res.status(400).json({status: false, error: "error occured"});
//     }
// }

// // module.exports={
// //    register,login,getdetails,deletedata,changepwd
// // }