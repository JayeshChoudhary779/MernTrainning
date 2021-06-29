const { request } = require('express')
const express = require('express')
const router = express.Router()
const filmcontroller= require("../controller/filmcontroller");

router.post('/addFilm', filmcontroller.addFilm) 
router.get('/getFilm', filmcontroller.getFilm) 
router.delete('/deleteFilm/:name', filmcontroller.deleteFilm)
// router.get('/getFilm/:name', filmcontroller.getFilmbyName) 

// router.post('/signUp', Usercontroller.signUp) 
// router.post('/login', Usercontroller.login) 


module.exports = router;