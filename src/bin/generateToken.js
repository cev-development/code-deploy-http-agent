require('dotenv').config()
const { sign } = require('jsonwebtoken');
const { secret_token, expires_in_token } = require('../config/auth')

const token = sign({}, secret_token, { expiresIn: expires_in_token, });

console.log(token)
