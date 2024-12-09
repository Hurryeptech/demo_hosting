const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({

    name:{
        type: String
    },
    email:{
        type: String
    }
})

module.exports = mongoose.model('newUser',newSchema)