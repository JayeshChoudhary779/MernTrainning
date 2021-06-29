
const categorycopy = require('../models/categorymodel');

//get categories...

exports.getCategory =async(req,res)=>{
    try{
        const newcategory = await categorycopy.find( {requestStatus:false})
        res.status(200).send(newcategory)
    }
    catch(error){
      res.send(error);
    }
}

//get requested categories...

exports.getRequestCategory =async(req,res)=>{
    try{
        const newcategory = await categorycopy.find( {requestStatus:true})
        res.status(200).send(newcategory)
    }
    catch(error){
      res.send(error);
    }
}

//add category..

exports.addCategory =(req,res)=>{
    const newcategory = new categorycopy({
        name: req.body.name,
        requestStatus:false,
        customer:false
    })
    newcategory.save()
    .then(data=>{
        res.json({message:"unique name"})
    })
    .catch(error=>{
        // res.json(error)
        res.json({ message:"Category name should be unique"})
    })
}


//add Requested category..

exports.addRequest = async (req,res)=>{

    try{
        const name= req.params.name;
        const updates=req.body;
        const options={new :true};
        const updatedData= await categorycopy.findOneAndUpdate({name:name},updates,options);
        return res.status(200).json({status: true, data: updatedData});

    }catch(error){
        return res.status(400).json({status: false, error: error});
    }
}



//delete category by name
exports.deleteCategory= (req,res)=> {
    categorycopy.deleteOne({name:req.params.name})
    .then((result)=>{
     res.status(200).json(result)
})
.catch((err)=>{
    res.status(500).json({
    error:err
})
})
}