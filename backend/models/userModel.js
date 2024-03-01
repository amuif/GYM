const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema


const userModel= new Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
}, { timestamps: true })

module.exports = mongoose.model('userSchema', userModel)