const mongoose = require('mongoose')


const userschema= new mongoose.Schema({
    
    uname:{
      type: String,
    },
        email: {
            type: String,
        },
       password: {
        type: String,
        }
       
})

module.exports = mongoose.model('userDetails',userschema);