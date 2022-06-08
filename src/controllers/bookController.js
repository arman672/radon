const { count } = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const { match } = require("assert")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id)
    {
        let savedData= await BookModel.create(data)
        res.send({msg: savedData})
    }
    else
    res.send({msg: "author id missing"})
}
const getBookByAuthor = async function(req, res){
    let authorByName = await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    const authorId = authorByName.author_id
    const books = await BookModel.find({author_id:authorId})
    res.send({books})
}
const findAuthor = async function(req, res){
    let bookByName = await BookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set: {price: 100}}
    )
    const price = bookByName.price
    const authorId = bookByName.author_id
    let authorName = await AuthorModel.find({author_id : authorId}).select({author_name: 1, _id: 0})
    res.send({authorName,"Updated price":price})
}

const getBooksBwPrice = async function(req,res){
    let books = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1, name :1})
    let authors = await AuthorModel.find().select({ author_id :1, author_name: 1})
    let data = []
    for(let i =0; i < authors.length;i++){
        books.forEach(element => { 
            if(element.author_id == authors[i].author_id){
                data.push({"Book Name": element.name, "Author Name": authors[i].author_name})
            }
        });
    }
    res.send({data})
}

const getBooksByAuthorId = async function(req,res){
    const authorId = req.params.authorId
    const books = await BookModel.find({author_id:authorId}).select({name:1,_id:0})
    res.send({books})
}

const getAuthorsOlderThanAge = async function(req,res){
    const authors = await AuthorModel.find({age:{ $gt: 50}}).select({author_name:1,age:1,_id:0,author_id:1})
    let books = await BookModel.find({ratings:{$gt: 4}})
    let data = []
    for(let i =0; i < authors.length;i++){
        books.forEach(element => { 
            if(element.author_id == authors[i].author_id){
                data.push({"Author Name": authors[i].author_name, "Age": authors[i].age})
            }
        });
    }
    res.send({data})  
}   

module.exports.createBook= createBook
module.exports.getBookByAuthor= getBookByAuthor 
module.exports.findAuthor= findAuthor  
module.exports.getBooksBwPrice= getBooksBwPrice
module.exports.getBooksByAuthorId= getBooksByAuthorId
module.exports.getAuthorsOlderThanAge= getAuthorsOlderThanAge

