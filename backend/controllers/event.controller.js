const event = require('../services/event.service')
const createError = require('http-errors')
const e = require('express')

class eventController {


    static createEvent = async (req, res, next) => {
        try {
            let user = req.user
            let body = req.body
            let merge = { ...user, ...body }
            const data = await event.createEvent(merge)
            res.status(200).json({
                status: true,
                message: "Event Creation",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static deleteEvent = async (req, res, next) => {
        try {
            let user = req.user
            let query = req.query.eid
            let merge = { ...user, ...query }
            const data = await event.deleteEvent(merge)
            res.status(200).json({
                status: true,
                message: "Event Deletion",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static updateEvent = async (req, res, next) => {
        try {
            let user = req.user
            let body = req.body
            let query = req.query.eid
            let merge = { ...user, ...body, ...query }
            const data = await event.updateEvent(merge)
            res.status(200).json({
                status: true,
                message: "Event Updated",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static inviteUser = async (req, res, next) => {
        try {
            let user = req.user
            let queryEid = req.query.eid
            let queryEmail = req.query.email
            let merge = { ...user, ...queryEid, ...queryEmail }
            const data = await event.inviteUser(merge)
            res.status(200).json({
                status: true,
                message: "User invited to the Event",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static acceptInvite = async (req, res, next) => {
        try {
            let user = req.user
            let query = req.query.eid
            let merge = { ...user, ...query }
            const data = await event.acceptInvite(merge)
            res.status(200).json({
                status: true,
                message: "User invite accepted",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static removeUser = async (req, res, next) => {
        try {
            let user = req.user
            let queryEid = req.query.eid
            let queryEmail = req.query.email
            let merge = { ...user, ...queryEid, ...queryEmail }
            const data = await event.removeUser(merge)
            res.status(200).json({
                status: true,
                message: "User removed from the event",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }
}

module.exports = eventController