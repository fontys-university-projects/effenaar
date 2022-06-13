const router = require('express').Router()
const profile = require('../controllers/profile.controller')
const auth = require('../middlewares/auth')

router.get('/me', auth, profile.me)
router.get('/user', auth, profile.user)
router.post('/me/settings', auth, profile.settings)

module.exports = router