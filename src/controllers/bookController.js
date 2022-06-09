const bookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const PublisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let data = req.body
    let authorID = data.author
    let publisherID = data.publisher
    //console.log(authorID)

    let author = await AuthorModel.findOne({_id:authorID})//could have used found one
    let publisher = await PublisherModel.findOne({_id:publisherID})

    if(author === null){
        res.send({msg: "author is not present"})  
    }
    else if(publisher === null){
        res.send({msg: "publisher is not present"})
    }
    else{
        let bookCreated = await bookModel.create(data)
        res.send({bookCreated})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({data: specificBook})
}

const updatePrice = async function(req,res){
    let updatedData = await bookModel.find({rating:{$gt:3.5}}).updateMany({$inc: {"price": 10}})
    res.send({updatedData})
} 

const updateAllfield = async function(req,res){
    let updateFeild = await bookModel.find({rating:{$gt:0}}).updateMany({$set: {"isHardCover": true}})
    res.send({updateFeild})
} 

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatePrice = updatePrice

module.exports.updateAllfield = updateAllfield