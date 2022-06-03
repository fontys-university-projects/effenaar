const jwt = require('jsonwebtoken')
const createError = require('http-errors')

//openssl ecparam -genkey -name prime256v1 -noout -out private.pem
//openssl ec -in private.pem -pubout -out public.pem

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const privateKey = 
`-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIJDfyXxKh3YJHHyYdKjVu1flnsNJfszBpGfwrLG26d4DoAoGCCqGSM49
AwEHoUQDQgAEUjrqq5Z3mteBSonkHbdhn8BIvcFcy3y5lL9DitLfteMRBaoBToz/
7e2RiSk1g/JYEu4fZ5PZmedpq/3p9O2Qqw==
-----END EC PRIVATE KEY-----`
const publicKey = 
`-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUjrqq5Z3mteBSonkHbdhn8BIvcFc
y3y5lL9DitLfteMRBaoBToz/7e2RiSk1g/JYEu4fZ5PZmedpq/3p9O2Qqw==
-----END PUBLIC KEY-----`

module.exports = {

    signAccessToken(payload){
        return new Promise((resolve, reject) => {
            jwt.sign( payload, privateKey, { algorithm: 'ES256' }, (err, token) => {
                if (err) {
                reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, publicKey, { algorithms:['ES256'] }, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject(createError.Unauthorized(message))
                }
                resolve(payload)
            })
        })
    }

}
