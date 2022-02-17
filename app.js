const express = require('express')
const app = express()

const users = require('./router/user')

const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./Middleware/notFound')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/users', users);

app.use(notFound)

const port = 3000

const start = async () =>{
    try {
     await connectDB (process.env.MONGO_URI)
     app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}


start()