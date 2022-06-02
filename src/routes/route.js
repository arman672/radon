const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash');
const { get } = require('express/lib/response');

const router = express.Router();

router.get('/hello', function (req, res) {
    

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const getMonths = lodash.chunk(months, 4)
    console.log(getMonths)


    const oddNos = []
    let i = 0
    while(oddNos.length < 10)
    {
        if(i%2!==0)
        oddNos.push(i)
        i++
    }
    const getLastNine = lodash.tail(oddNos)
    console.log(getLastNine)


    const arr1 = [0,3,4,2,1]
    const arr2 = [4,5,6,6,9]
    const arr3 = [3,3,8,2,1]
    const arr4 = [1,9,4,1,1]
    const arr5 = [5,3,5,2,5]
    const getUnion = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(getUnion)


    let arr = [['horror','The Shining'],['drama','Titanic'], ['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    const getPair = lodash.fromPairs(arr)
    console.log(getPair)
});

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason