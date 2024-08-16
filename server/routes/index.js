const Router = require('express')
const router = new Router()
const product = require('./productRouter')
const user = require('./userRouter')
const type = require('./typeRouter')
const subtype = require('./subtypeRouter')


router.use('/user', user)
router.use('/type', type)
router.use('/subtype', subtype)
router.use('/product', product)

module.exports = router