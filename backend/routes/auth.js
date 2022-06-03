const router = require('express').Router()
const user = require('../controllers/auth.controller')
const auth = require('../middlewares/auth')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/status', auth, user.loginStatus)
router.get('/role', auth, user.role)

module.exports = router