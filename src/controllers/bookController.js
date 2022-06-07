const { count } = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const { match } = require("assert")

const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id)
    {
        let savedData= await BookModel.create(data)
        res.send({msg: savedData})
    }
    else
    res.send({msg: "no author id"})
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
    let books = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let authors = await AuthorModel.find().select({ author_id :1, author_name: 1})
    let data = []
    for(let i =0; i < authors.length;i++){
        books.forEach(element => { 
            if(element.author_id == authors[i].author_id){
                data.push({"Author Name": authors[i].author_name, "Author ID": element.author_id})
            }
        });
    }
    res.send({data})
    }
module.exports.createBook= createBook
module.exports.getBookByAuthor= getBookByAuthor 
module.exports.findAuthor= findAuthor
module.exports.getBooksBwPrice= getBooksBwPrice

