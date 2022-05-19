const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const eventRouter = require('./eventRouter')
const typeRouter = require('./typeRouter')
const placeRouter = require('./placeRouter')

router.use('/user', userRouter)
router.use('/event', eventRouter)
router.use('/type', typeRouter)
router.use('/place', placeRouter)

module.exports = router