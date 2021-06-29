
const myDirectorscopy = require('../models/directormodel');

exports.addDirector =(req,res)=>{
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
        res.json({ message:"Director name should be unique"})
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


//update director by name
exports.updateDirector= async (req,res)=> {

    try{
        const dname= req.params.dname;
        const updates=req.body;
        const options={new :true};
        const updatedData= await myDirectorscopy.findOneAndUpdate({dname:dname},updates,options);
        return res.status(200).json({status: true, data: updatedData});

    }catch(error){
        return res.status(400).json({status: false, error: error});
    }
}

//delete Director by name
exports.deleteDirector= (req,res)=> {

    myDirectorscopy.remove({dname:req.params.dname})
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


//get director by name
exports.getDirectorByName= (req,res)=> {
    
    const dname=new RegExp(req.params.dname,'i');
    myDirectorscopy.find({dname:dname})
    .then((result)=>{
     res.status(200).json(result)
})
.catch((err)=>{
    res.status(500).json({
    error:err
})
})
}