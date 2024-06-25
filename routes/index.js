const express = require('express')
const path = require("path");
const router = express.Router()
const datawajahRouter = require('./datawajah')
const adminRouter = require('./admin')
const datadeviceRouter = require('./device')
const authRouter = require('./auth')
router.use('/datawajah', datawajahRouter)
router.use('/device', datadeviceRouter)
router.use('/user', authRouter)
router.use('/admin', adminRouter)

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router