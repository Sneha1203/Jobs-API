const User = require('../models/User')
const{StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors')


const register = async (request, response) => {

    // if(!name || !email || !password) {
    //     throw new BadRequestError('Please provide all credentials...')
    // }

    const user = await User.create({...request.body})
    const token = user.createJWT()
    // const token = jwt.sign({ userID: user._id, name: user.name }, process.env.JWT_SECRET, {expiresIn: '30d'})

    response.status(StatusCodes.CREATED).json({ user: {name: user.name}, token })
}

const login = async (request, response) => {
    response.send('login user')
}

module.exports = {
    register, 
    login
}