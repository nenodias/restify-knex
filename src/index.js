require('dotenv').config()

const server = require('./server')
console.log(process.env.PORT)
server.listen(process.env.PORT)