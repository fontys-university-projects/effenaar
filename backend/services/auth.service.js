const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('../utils/jwt')
const validator = require('../utils/validation')

const createError = require('http-errors')

const saltValue = parseInt(process.env.SALT_VALUE)

class authService {

    static async register(data) {
        const { email } = data

        if (!email) {
            throw createError.Unauthorized('Email is required')
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            throw createError.Unauthorized('User already exists')
        }
        if (!data.firstName & !data.lastName) {
            throw createError.Unauthorized('First and Last name are required')
        }
        if (data.password !== data.confirmPassword) {
            throw createError.Unauthorized('Password does not match')
        }
        if (!data.dob) {
            throw createError.Unauthorized('Date of Birth is missing')
        }
        validator.verifyEmail(email)
        validator.verifyPassword(data.password)

        data.password = bcrypt.hashSync(data.password, saltValue)
        data.uid = crypto.randomBytes(9).toString('hex')
        data.dob = new Date(data.dob)
        const createUser = await prisma.user.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: email,
                password: data.password,
                uid: data.uid,
                dob: data.dob,
            }
        })
        return
    }

    static async login(data) {
        const { email, password } = data
        if (!email && !password) {
            throw createError.Unauthorized('Email and password are required')
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            throw createError.NotFound('User not found')
        }

        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) throw createError.Unauthorized('Email address or password not valid')

        // const jti = crypto.randomBytes(4).toString('hex')
        const payload = {
            uid: user.uid
        }
        const accessToken = await jwt.signAccessToken(payload)

        return { accessToken }
    }

    static async loginStatus(data) {
        const {uid} = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        if (!user) {
            throw createError.Unauthorized('User is not logged in!')
        }

        return("Authenticated")
    }
    static async role(data) {
        const {uid} = data;
        const user = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                role: true,
            },
        })

        if (!user) {
            throw createError.Unauthorized('User is not logged in!')
        }

        return(user)
    }
}

module.exports = authService