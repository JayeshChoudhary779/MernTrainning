const mongoose = require('mongoose')


const categoryschema= new mongoose.Schema({
    name: {
        type: String,
        require:true,
        unique: true
    },
    customer:{
        type: String,
        require:true,
    },
    requestStatus:{
        type: String,
        require:true,
    }
})

module.exports = mongoose.model('category',categoryschema);