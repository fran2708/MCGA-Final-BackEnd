const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const productRoutes = require('./routes/product')
const authRoutes = require('./routes/auth')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(
    cors({
        origin: '*',
        credentials: true
    })
)

app.use(express.json())
app.use('/api', productRoutes, authRoutes)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to my API for MCGA')
})

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('🟢 MongoDB connection was succesful 🟢'))
    .catch((error) => console.error('🔴 MongoDB connection failed: ' + error + ' 🔴'))

app.listen(PORT, () => console.log('server listening on port', PORT))