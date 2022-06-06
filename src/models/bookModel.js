const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    category: {
        type: String,
        enum: ["fantasy", "horror", "romance", "adventure ", "thriller ", "fiction"] 
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array