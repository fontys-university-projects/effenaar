const express = require('express')
require('@prisma/client')
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser')
const helmet = require('helmet')
const multer = require('multer')


var corsOptions = {
    origin: "http://localhost:8080"
  }

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

const route = require('./routes')
app.use('/api', route)

app.disable('x-powered-by')
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.log('You are missing "DATABASE_URL" inside the .env file \n')
  console.log('Example: DATABASE_URL="postgresql://username:password@ip:5432/databaseName?schema=public"')
}
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})