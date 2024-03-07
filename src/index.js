const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('test')
})

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connection was succesful'))
    .catch((error) => console.error('MongoDB connection failed: ', error))

app.listen(PORT, () => console.log('server listening on port', PORT))