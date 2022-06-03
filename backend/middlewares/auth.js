const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const jwt = require('../utils/jwt')
const createError = require('http-errors')

const auth = async (req, res, next) => {

    if (!req.headers.authorization) {
        return next(createError.Unauthorized('Access token is required'))
    }
    if (req.headers.authorization == "Bearer null") {
        return next(createError.Unauthorized('Access token is required'))
    }
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return next(createError.Unauthorized('Access token is required'))
    }
    let data = null
    await jwt.verifyAccessToken(token).then(user => {
        return data = user
    }).catch(
        createError.Unauthorized('There was an error trying to verify the access token!')
    )

    if (data) {
            req.user = data
            next()
    } else {
        return next(createError.Unauthorized())
    }

}

module.exports = auth