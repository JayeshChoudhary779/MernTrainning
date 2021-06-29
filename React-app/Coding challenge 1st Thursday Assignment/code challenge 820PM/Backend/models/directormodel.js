const mongoose = require('mongoose')


const directorschema= new mongoose.Schema({
 
  dname: {
    type: String,
    required: true,
    unique: true
},
  age: {
      type: Number,
      required: true
  },
     
  gender: {
          type: String,
          required: true
  },   

  awardCount: {
    type: Number,
    required: true
},
       
})

module.exports = mongoose.model('filmDirectors',directorschema);