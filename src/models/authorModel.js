const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const authorShecma = new mongoose.Schema({
    author_id: {
        type: String,
        unique: true,
        required: true
    },
    author_name:{
        type: String,
        required: true
    },
    age: Number,
    address:mongoose.Schema.Types.Mixed
},{ timestamps: true });
module.exports = mongoose.model("Author",authorShecma)