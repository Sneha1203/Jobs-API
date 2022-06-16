const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        minlength: 3,
        maxlength: 50,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: 6,
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
