const mongoose = require('mongoose')


const filmschema= new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    },
    dname: {
        type: String,
        required: true,
    },

    boxOfficeCollection: {
        type: Number,
        required: true
    },
       
    rating: {
            type: Number,
            required: true
    }   
})

module.exports = mongoose.model('films',filmschema);