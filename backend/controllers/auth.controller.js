const auth = require('../services/auth.service')
const createError = require('http-errors')
const e = require('express')

class authController {

    static register = async (req, res, next) => {

        try {
            const user = await auth.register(req.body)
            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static login = async (req, res, next) => {

        try {
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static loginStatus = async (req, res, next) => {

        try {
            const data = await auth.loginStatus(req.user)
            res.status(200).json({
                status: true,
                message: "Auth Status",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }
    static role = async (req, res, next) => {

        try {
            const data = await auth.role(req.user)
            res.status(200).json({
                status: true,
                message: "User Role",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

}

module.exports = authController