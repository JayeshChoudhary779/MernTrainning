const { request } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const myBookscopy = require('../models/bookmodel')
const bookcontroller= require("../controller/bookcontroller");

const usercontroller= require("../controller/usercontroller");

router.post('/addBook', bookcontroller.addBook) 
router.get('/getBook', bookcontroller.getBook) 
router.delete('/deleteBook/:id', bookcontroller.deleteBook)
router.post('/signUp', usercontroller.signUp)
router.post('/login', usercontroller.login)


router.get('/getBook/:id', bookcontroller.getBookbyId) 
router.get('/getBook/title/:title', bookcontroller.getBookbyTitle) 
router.get('/getBook/author/:author', bookcontroller.getBookbyAuthor) 

router.get('/getBook/price/:min/:max', bookcontroller.getBookbyPrice) 
router.get('/getBook/rating/:rating', bookcontroller.getBookbyRating) 
router.get('/getBook/votes/:votes', bookcontroller.getBookbyVotes) 


// const Usercontroller = require('../controller/usercontroller')


// router.post('/signUp', Usercontroller.signUp) 
// router.post('/login', Usercontroller.login) 
// router.get('/', Usercontroller.getdetails)
// router.delete('/:id', Usercontroller.deletedata)
// router.patch('/:id', Usercontroller.changepwd) 


module.exports = router