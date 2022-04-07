const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,required:true},
    lastName:{
        type:String,required:true},
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema)