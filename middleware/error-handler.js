const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (error, request, response, next) => {
    let customError = {
        statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: error.message || 'Something went wrong try again later....'
    }

    // if(error instanceof CustomAPIError) {
    //     return response.status(error.statusCode).json({ msg: error.message })
    // }

    if(error.name === 'ValidationError') {
        customError.msg = Object.values(error.errors).map(item => item.message).join(',')
        customError.statusCode = 400
    }

    if(error.name === 'CastError') {
        customError.msg = `No item found with id: ${error.value}`
        customError.statusCode = 404
    }

    if(error.code && error.code === 11000)  {
        customError.msg = `Duplicate value entered for ${Object.keys(error.keyValue)}field, please choose another value`
        customError.statusCode = 400
    }

    // return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
    return response.status(customError).json({ msg: customError.message })
}

module.exports = errorHandlerMiddleware