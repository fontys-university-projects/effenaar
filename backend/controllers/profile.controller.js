const profile = require('../services/profile.service')
const createError = require('http-errors')
const e = require('express')

class profileController {


    static me = async (req, res, next) => {

        try {
            const data = await profile.me(req.user)
            res.status(200).json({
                status: true,
                message: "User Profile",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static user = async (req, res, next) => {

        try {
            const data = await profile.me(req.query.uid)
            res.status(200).json({
                status: true,
                message: "User Profile",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static settings = async (req, res, next) => {

        try {
            let user = req.user
            let body = req.body
            let merge = { ...user, ...body }
            const data = await profile.settings(merge)
            res.status(200).json({
                status: true,
                message: "User Settings Successfully Changed",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

}

module.exports = profileController