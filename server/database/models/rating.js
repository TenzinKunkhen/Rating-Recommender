const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
// const ratingSchema = new Schema({

// 	username: { type: String, unique: false, required: false },
//     rating: {type: Integer, unique: false, required: false}
// })

var ratingSchema = new Schema({
    
        username: {
            type: String,
            required: false,
        },
        movieTitle: {
            type: String,
            required: false,
        },
        rating: {
            type: Number,
            required: true
        },
        movieID: {
            type: Number
        }
});



module.exports = Rating = mongoose.model('rating', ratingSchema);