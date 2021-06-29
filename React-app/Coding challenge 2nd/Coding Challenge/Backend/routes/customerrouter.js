
const express = require('express')
const router = express.Router()

const customercontroller= require("../controller/customercontroller");

router.post('/signUp', customercontroller.signUp)
router.post('/login', customercontroller.login)
router.get('/shop/:customer', customercontroller.getShop)
router.get('/shop/getShop/:shopName', customercontroller.getShopByName)
router.patch('/shop/updateShop/:shopName', customercontroller.updateShop)
router.post('/shop/add', customercontroller.addShop)
router.post('/category/request', customercontroller.requestCategory)
router.delete('/shop/delete/:sname', customercontroller.deleteShop)

module.exports = router