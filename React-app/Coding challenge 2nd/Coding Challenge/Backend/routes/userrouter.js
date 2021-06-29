
const express = require('express')
const router = express.Router()

const usercontroller= require("../controller/usercontroller");

router.post('/signUp', usercontroller.signUp)
router.post('/login', usercontroller.login)
router.get('/shop', usercontroller.getAllShop)
router.get('/getShop/shop/:shop', usercontroller.getShopbyShop) 
router.get('/getShop/owner/:owner', usercontroller.getShopbyOwner) 
router.get('/getShop/location/:location', usercontroller.getShopbyLocation) 
router.get('/getShop/category/:category', usercontroller.getShopbyCategory) 


module.exports = router