const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test", UserController.test)

router.get("/test1", UserController.test1)

router.get("/test2", UserController.test2)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;