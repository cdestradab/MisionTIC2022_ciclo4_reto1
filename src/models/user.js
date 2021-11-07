const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
    }
});

module.exports= mongoose.model('User', userSchema)