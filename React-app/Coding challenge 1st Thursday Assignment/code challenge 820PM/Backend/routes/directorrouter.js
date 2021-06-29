
const express = require('express')
const router = express.Router()
const directorcontroller= require("../controller/directorcontroller");


router.post('/addDirector', directorcontroller.addDirector) 
router.get('/getDirector', directorcontroller.getDirector) 
router.delete('/deleteDirector/:name', directorcontroller.deleteDirector)
// router.get('/getDirector/:name', directorcontroller.getDirectorbyName) 


module.exports = router