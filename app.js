require('dotenv')
require('express-async-errors')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const connectDB = require('./db/connect')

const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch(error) {
        console.log(error)
    }
}

start()