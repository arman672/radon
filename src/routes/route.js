const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash');
const { get } = require('express/lib/response');

const router = express.Router();



//
const arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//1
router.get('/GET/movies', function(req, res){
    res.send(arr)
})

//2 & 3
router.get('/GET/movies/:indexNumber', function(req, res){
  const movieIndex = req.params.indexNumber
  if(movieIndex < arr.length)
  {
    const movie = arr[movieIndex]
    res.send(movie)
  }
  else
  res.send("error: enter a valid index")
})


const arrFilm = [{
  'id': 1,
  'name': 'The Shining'
 },
 {
  'id': 2,
  'name': 'Incendies'
 },
 {
  'id': 3,
  'name': 'Rang de Basanti'
 },
 {
  'id': 4,
  'name': 'Finding Nemo'
 }
 ]
 //4
 router.get('/GET/films', function(req, res){
   res.send(arrFilm)
})
 //5
router.get('/GET/films/:filmId', function(req, res){
  const fId = parseInt(req.params.filmId)
  if(fId <= arr.length && fId !== 0)
    res.send(arrFilm[fId-1])
  else
  res.send('No movie exists with this id')
})

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

module.exports = router;
// adding this comment for no reason