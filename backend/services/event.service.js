const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const validator = require('../utils/validation')

const createError = require('http-errors')

const saltValue = parseInt(process.env.SALT_VALUE)

class authService {


    static async createEvent(data) {
        const { uid, name, color } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const eid =   crypto.randomBytes(9).toString('hex')
        const createUser = await prisma.user.create({
            data: {
                eid: eid,
                name: name,
                color: color,
                ownerId: user.id
            }
        })

        return
    }

    static async deleteEvent(data) {
        const { uid, eid } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const event = await prisma.event.findUnique({
            where: {
                eid
            }
        })

        if(user.id === event.ownerId ) {

            const deleteUser = await prisma.event.delete({
                where: {
                  eid
                },
              })

        } else {
            throw createError.Unauthorized('You do not have the required privileges to delete this event')
        }

        return
    }

    static async updateEvent(data) {
        const { uid, eid, name, color } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const event = await prisma.event.findUnique({
            where: {
                eid
            }
        })

        const moderator = await prisma.eventModerators.findUnique({
            where: {
                eventId: event.id,
                user: user.id
            }
        })

        if (moderator !== null) {
            const details = [name, color]

            details.forEach(updateDetails)

            function updateDetails(item) {
                if (item !== null) {
                    await prisma.event.update({
                        where: {
                            eid
                        },
                        data: {
                            item
                        },
                      })
                }
            }
        }

        return
    }

    static async inviteUser(data) {
        const { uid, eid, email } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const event = await prisma.event.findUnique({
            where: {
                eid
            }
        })

        const moderator = await prisma.eventModerators.findUnique({
            where: {
                eventId: event.id,
                user: user.id
            }
        })

        const attendee = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (moderator !== null) {
            await prisma.eventAttendees.create({
                where: {
                    eventId: event.id
                },
                data: {
                    user: attendee.id
                }
            })
        }

        return
    }

    static async acceptInvite(data) {
        const { uid, eid } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const event = await prisma.event.findUnique({
            where: {
                eid
            }
        })

        const invite = await prisma.eventAttendees.findUnique({
            where: {
                user: user.id
            }
        })

        if(!invite){
            throw createError.Unauthorized('You are not invited to the specified event')
        } else {
            await prima.eventAttendees.update({
                where: {
                    user: user.id
                },
                data: {
                    acceptedInvite: true
                }
            })
        }

        return
    }

    static async removeUser(data) {
        const { uid, eid, email } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const event = await prisma.event.findUnique({
            where: {
                eid
            }
        })

        const moderator = await prisma.eventModerators.findUnique({
            where: {
                eventId: event.id,
                user: user.id
            }
        })

        const attendee = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (moderator !== null) {
            await prisma.eventAttendees.delete({
                where: {
                    user: attendee.id
                }
            })
        }

        return
    }
}

module.exports = authService