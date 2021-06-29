const express = require('express')
const router = express.Router()
const bookcontroller= require("../controller/bookcontroller");

router.post('/addBook', bookcontroller.addBook) 
router.get('/getBook', bookcontroller.getBook) 
router.delete('/deleteBook/:id', bookcontroller.deleteBook)
router.get('/getBook/:id', bookcontroller.getBookbyId) 
router.get('/getBook/title/:title', bookcontroller.getBookbyTitle) 
router.get('/getBook/author/:author', bookcontroller.getBookbyAuthor) 
router.get('/getBook/price/:min/:max', bookcontroller.getBookbyPrice) 
router.get('/getBook/rating/:rating', bookcontroller.getBookbyRating) 
router.get('/getBook/votes/:votes', bookcontroller.getBookbyVotes) 


module.exports = router