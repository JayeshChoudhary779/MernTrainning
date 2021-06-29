
const express = require('express')
const router = express.Router()

const usercontroller= require("../controller/usercontroller");

router.post('/signUp', usercontroller.signUp)
router.post('/login', usercontroller.login)
router.post('/loginWithOtp', usercontroller.loginWithOtp)



// router.get('/', Usercontroller.getdetails)
// router.delete('/:id', Usercontroller.deletedata)
// router.patch('/:id', Usercontroller.changepwd) 

module.exports = router