const userSchema = require('../models/user')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const email = req.body?.email
    const password = req.body?.password

    if (!email || !password) {
        return res.status(422).json({
            error: true,
            msg: 'Enter email and password'
        })
    }
    try{
        const user = await userSchema.findOne({ email })
        if (!user) {
            return res.status(401).json({
                error: true,
                msg: 'Invalid credentials'
            })
        }
        if (user.password !== password) {
            return res.status(401).json({
                error: true,
                msg: 'Invalid credentials'
            })
        }

        const token = jwt.sign({ email, userId: user._id }, process.env.JWT_KEY, { expiresIn: '1d' })

        user.token = token
        await user.save()

        return res.status(200).json({
            msg: 'User logged in successfully',
            data: {
                email: user.email,
                _id: user._id,
                token: user.token
            }
        })
    }catch(error){
        return res.status(error.status || 400).json({
            error: true,
            msg: error
        })
    }
}

module.exports = { login }