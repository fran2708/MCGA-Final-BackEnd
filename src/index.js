const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(PORT, () => console.log('server listening on port', PORT))