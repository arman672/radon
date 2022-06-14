const express = require('express');
const router = express.Router();
const ProductController= require("../controllers/productController")
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const commonMD= require("../middlewares/commonMiddlewares")

router.post("/createProduct", ProductController.createProduct)
router.post("/createUser", commonMD.checkFreeAppUser, UserController.createUser) 
router.post("/createOrder", commonMD.checkFreeAppUser, OrderController.createOrder)

module.exports = router;  