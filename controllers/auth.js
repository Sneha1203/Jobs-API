const User = require('../models/User')
const{StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors')


const register = async (request, response) => {
    const {name, email, password} = request.body

    // if(!name || !email || !password) {
    //     throw new BadRequestError('Please provide all credentials...')
    // }

    const user = await User.create({...request.body})

    response.status(StatusCodes.CREATED).json({ user })
}

const login = async (request, response) => {
    response.send('login user')
}

module.exports = {
    register, 
    login
}