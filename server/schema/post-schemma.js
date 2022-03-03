const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    description: {
        type: String,
        required: true,
        unique: true,

    },
    pic: {
        type: String,
        required: false,

        
    },
    userName: {
        type: String,
        required: true,

    },
    catagories: {
        type: String,
        required: false,

    },
    createdAt:{
        type: Date,


    }

})


module.exports =  mongoose.model('post', PostSchema )