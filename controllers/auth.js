const register = async (request, response) => {
    response.send('register user')
}

const login = async (request, response) => {
    response.send('login user')
}

module.exports = {
    register, 
    login
}