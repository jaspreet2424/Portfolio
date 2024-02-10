const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    },
    email : {
        type : String , 
        required : true
    },
    password : {
        type : String , 
        required : true
    },
    token : {
        type : String , 
    }
});

const User = new mongoose.model("Users" , userSchema);

module.exports = User;