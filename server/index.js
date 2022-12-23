const express = require('express')
const colors = require('colors')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = require('./config/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const port = process.env.PORT || 5000
mongoose.set('strictQuery', true)
const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`.blue)
})
