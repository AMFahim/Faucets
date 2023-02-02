const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [50, "Name is too long"],
        unique: false
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, "Please provide a valid email"],
        unique: [true, "Already used this email"]
    }, 
    password: {
        type: String,
        required: [true, "please give a password"],
        unique: false,
    }
})

module.exports = mongoose.model('user', UserSchema)