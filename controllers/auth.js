const User = require('../models/User')
const{StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')


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
    const{email, password} = request.body
    if(!email || !password) {
        throw new BadRequestError('Please provide correct credentials...')
    }

    const user = await User.findOne({email})

    if(!user) {
        throw new UnauthenticatedError('Invalid credentials...')
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials...')
    }

    const token = user.createJWT()
    response.status(StatusCodes.OK).json({ user: {name: user.name}, token })
    // response.send('login user')
}

module.exports = {
    register, 
    login
}