const express = require('express');

const externalModule = require('../logger/logger')
const utils = require('../util/helper')
const validator = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    externalModule.welcome()

    console.log("current date......: "+utils.printDate())
    console.log("current month.....: "+utils.printMonth())
    console.log("Batch Info........: "+utils.getBatchInfo())
    
    console.log("original string..........: "+validator.str)
    console.log("after using toLowerCase(): "+validator.lCase())
    console.log("after using toUpperCase(): "+validator.uCase())
    console.log("after using trim().......: "+validator.trim())

    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason