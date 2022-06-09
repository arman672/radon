const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisher:{
        type: ObjectId,
        ref:"newPublisher"
    }
    // ,
    // isHardCover: {
    //     type: Boolean,
    //     default: false
    // }
}, { timestamps: true });

bookSchema.add({isHardCover:'Boolean'});
//module.exports.bookSchema = bookSchema
module.exports = mongoose.model('newBook', bookSchema)
