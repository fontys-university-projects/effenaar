const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const validator = require('../utils/validation')

const createError = require('http-errors')

const saltValue = parseInt(process.env.SALT_VALUE)

class authService {


    static async me(data) {
        const { uid } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                firstName: true,
                lastName: true,
                createdAt: true,
                profile: {
                    avatar: true,
                    bio: true,
                    color: true,
                }
            }
        })

        return (user)
    }

    static async user(data) {
        const user = await prisma.user.findUnique({
            where: {
                uid: data
            },
            select: {
                firstName: true,
                lastName: true,
                createdAt: true,
                profile: {
                    avatar: true,
                    bio: true,
                    color: true,
                }
            }
        })

        return (user)
    }
}

module.exports = authService