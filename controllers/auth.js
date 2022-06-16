const User = require('../models/User')
const{StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (request, response) => {
    const {name, email, password} = request.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const tempUser = {name, email, password: hashedPassword}

    // if(!name || !email || !password) {
    //     throw new BadRequestError('Please provide all credentials...')
    // }

    const user = await User.create({...tempUser})

    response.status(StatusCodes.CREATED).json({ user })
}

const login = async (request, response) => {
    response.send('login user')
}

module.exports = {
    register, 
    login
}