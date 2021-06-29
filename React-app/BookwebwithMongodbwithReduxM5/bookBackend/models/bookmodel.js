const mongoose = require('mongoose')

const bookschema= new mongoose.Schema({
    
    id:{
      type: String,
      required:true
    },
        cover: {
            type: String,
            required: true
        },
       title: {
        type: String,
        required: true
        },
        author:{
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        votes: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
   
})

module.exports = mongoose.model('myBooks',bookschema);