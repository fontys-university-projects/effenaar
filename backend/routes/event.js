const router = require('express').Router()
const event = require('../controllers/event.controller')
const auth = require('../middlewares/auth')
const role = require('../middlewares/privilege')

router.post('/create', auth, role('PARTNER'), event.createEvent)
router.delete('/delete', auth, role('PARTNER'), event.deleteEvent)
router.post('/update', auth, role('PARTNER', 'COOWNER'), event.updateEvent)
router.post('/invite', auth, role('PARTNER', 'COOWNER'), event.inviteUser)
router.post('/accept', auth, event.acceptInvite)
router.post('/remove', auth, role('PARTNER', 'COOWNER'), event.removeUser)

module.exports = router