
const express = require('express')
const router = express.Router()

const admincontroller= require("../controller/admincontroller");

router.get('/category/getCategory', admincontroller.getCategory)
router.patch('/category/addRequest/:name', admincontroller.addRequest)
router.get('/category/getRequestCategory', admincontroller.getRequestCategory)
router.post('/category/addCategory', admincontroller.addCategory)
router.delete('/category/delete/:name', admincontroller.deleteCategory)


module.exports = router