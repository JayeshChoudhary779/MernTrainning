
const express = require('express')
const router = express.Router()
const directorcontroller= require("../controller/directorcontroller");


router.post('/addDirector', directorcontroller.addDirector) 
router.get('/getDirector', directorcontroller.getDirector) 
router.patch('/updateDirector/:dname', directorcontroller.updateDirector)
router.delete('/deleteDirector/:dname', directorcontroller.deleteDirector)
router.get('/getDirector/:dname', directorcontroller.getDirectorByName) 


module.exports = router