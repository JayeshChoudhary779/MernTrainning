
const myDirectorscopy = require('../models/directormodel');

exports.addDirector =(req,res,next)=>{
    const newdirector = new myDirectorscopy({
        dname: req.body.dname,
        age: req.body.age,
        gender: req.body.gender,
        awardCount:req.body.awardCount
    })
    newdirector.save()
    .then(data=>{
        res.json({message:"unique name"})
    })
    .catch(error=>{
        res.json({ message:error})
    })
}

exports.getDirector =async(req,res)=>{
    try{
        const newdirectors = await myDirectorscopy.find()
        res.send(newdirectors)
    }
    catch(error){
      res.send(error);
    }
}

//delete director by name
exports.deleteDirector= (req,res,next)=> {

    myDirectorscopy.remove({id:req.params.id})
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



