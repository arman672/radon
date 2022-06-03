const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const app = express.Router();

app.get("/sol1", function (req, res) {

    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array

    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        total +=arr[index]      
    }
  
    let n= arr[arr.length-1]
    let consecutiveSum= n * (n+1) / 2 //here n is the last no
    let missingNo= consecutiveSum - total
  
    console.log(arr.length)
    res.send(  { data: missingNo }  );

  });
 
app.get("/sol2", function (req, res) {

    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing

   let arr= [33, 34, 35, 37, 38]
   let n= arr.length + 1 //because one no is missing
   let total = 0;
   for (let index = 0; index < arr.length; index++) {
       total +=arr[index]      
   }
 
   let firstNo= arr[0]
   let lastNo= arr[arr.length-1]
   let consecutiveSum= n * (firstNo+ lastNo ) / 2 //here n is the length of arraywhich is 5 + 1 because 1 number is missing
   let missingNo= consecutiveSum - total
   console.log(n)
   res.send(  { data: missingNo  }  );
 });


module.exports = app;
// adding this comment for no reason