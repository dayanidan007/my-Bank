const express = require('express')
const router = express.Router()
const Manager = require('../model/ManagerModel')

router.get('/manager/:id', async function (req, res) {
    const managerID = req.params.id
    try {
        const manager = await Manager.findById(managerID).populate('loan').populate('account')
        console.log(manager)
        res.send(manager)
    } catch (error) {
        res.send(error)
    }
})

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

