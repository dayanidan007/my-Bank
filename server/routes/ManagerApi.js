const express = require('express')
const router = express.Router()
const Account = require('../model/AccountModel')
const Manager = require('../model/ManagerModel')

router.post('/manager/register', async function (req, res) {
    const manager = new Manager({ ...req.body })
    try {
        await manager.save
        res.send(manager)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router

