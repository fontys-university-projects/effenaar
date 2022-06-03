const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require('../utils/jwt')
const createError = require('http-errors')

const privilege = (role) => {
    return async (req, res, next) => { 
    
        const token = req.headers.authorization.split(' ')[1]
    
        let data = null
        await jwt.verifyAccessToken(token).then(user => {
            return data = user
        }).catch(
            createError.Unauthorized('There was an error trying to verify the access token!')
        )
    
        const user = await prisma.user.findUnique({
            where: {
                uid: data.uid
            }
        })
        
        if(!user) {
            createError.Unauthorized('User is not authenticated')
        }
        if(user.role == role){
            next()
        } else {
            return next(createError.Unauthorized('You must be a ' + role + ' to be able to register a new concert!')) 
        }
    }
}

module.exports = privilege