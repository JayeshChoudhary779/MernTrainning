

const myBookscopy = require('../models/bookmodel')

exports.addBook =(req,res,next)=>{
    const newbook = new myBookscopy({
        id:req.body.id,
        cover: req.body.cover,
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        rating: req.body.rating,
        votes:req.body.votes,
        description:req.body.description
    })
    newbook.save()
    // .then(data=>{
    //     if(newbook.id===req.body.id){
    //     res.json({
    //         message:"Please enter unique Id"
    //     })}
    //     })
    // .catch(error=>{
    //     res.json(error)
    // })

    .then(data=>{
        res.json({message:"unique Id"})
    })
    // .then(data=>{
    //     res.json()
    // })
    .catch(error=>{
        res.json({ message:"This Id is already taken, Please enter unique Id"})
    })
}

exports.getBook =async(req,res)=>{
    try{
        const newbooks = await myBookscopy.find()
        res.send(newbooks)
    }
    catch(error){
      res.send(error);
    }
}

//delete data
exports.deleteBook= (req,res,next)=> {

    myBookscopy.remove({id:req.params.id})
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

//search book by title

 exports.getBookbyAuthor =async(req,res)=>{

    try{
        const newbooks = await myBookscopy.find({$or:[{author:req.params.author}]})
        res.send(newbooks)
        return res
        .status(200)
    }
    catch(error){
      res.send(error);
      return res
      .status(400)
    }
}



exports.getBookbyId =async(req,res)=>{
    myBookscopy.findOne({$or:[{id:req.params.id}]})
    .then(data=>{
        if(data){
            return res
            .status(200)
            .send([{
                     id: data.id,
                     cover: data.cover,
                     title: data.title,
                     author: data.author,
                     price:  data.price,
                     rating: data.rating,
                     votes: data.votes,
                     description:data.description
            }])
        }}).catch(error=>{
           return res
           .status(400)
           .send({error: "error occured"});
        })
}


exports.getBookbyTitle =async(req,res)=>{
    myBookscopy.findOne({$or:[{title:req.params.title}]})
    .then(data=>{
        if(data){
            return res.status(200)
            .send([{
                     id: data.id,
                     cover: data.cover,
                     title: data.title,
                     author: data.author,
                     price:  data.price,
                     rating: data.rating,
                     votes: data.votes,
                     description:data.description
            }])
        }}).catch(error=>{
           res.send(error);
           return res
           .status(400)
        })
}



exports.getBookbyPrice =async(req,res)=>{

    try{
        const newbooks = await myBookscopy.find(
            {$and : [{price:{$gte:req.params.min}},
            {price:{$lte:req.params.max}}]
            }
        )
        res.send(newbooks)
        return res.status(200)
    }
    catch(error){
        res.send(error);
        return res
        .status(400)
      
    }
}



exports.getBookbyRating = async(req,res)=>{
    try{
        const newbooks = await myBookscopy.find({$or:[{rating:req.params.rating}]})
        res.send(newbooks)
        return res
            .status(200)
    }
    catch(error){
        res.send(error);
        return res
        .status(400)
      
    }
              
}


exports.getBookbyVotes =async(req,res)=>{

    try{
        const newbooks = await myBookscopy.find({$or:[{votes:req.params.votes}]})
        res.send(newbooks)
        return res
            .status(200)
    }
    catch(error){
        res.send(error);
        return res
        .status(400)
      
    }
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