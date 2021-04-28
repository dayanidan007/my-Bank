const express = require('express')
const router = express.Router()
const Account = require('../model/AccountModel')
const Manager = require('../model/ManagerModel')

router.get('/account/:id', async function (req, res) {
    const accountID = req.params.id
    try {
        const account = await Account.findById(accountID).populate('manager').populate('loan')
        console.log(account)
        res.send(account)
    } catch (error) {
        res.send(error)
    }
})

router.post('/account/register', async function (req, res) {
    const managerID = req.body
    const account = new Account({ ...req.body })
    try {
        await account.save
        const manager = await Manager.findByIdAndUpdate({ _id: managerID }, { $push: { accounts: account } }, { new: true, useFindAndModify: false }).populate('accounts')
        res.send(manager)
    } catch (error) {
        res.send(error)
    }
})

router.put('/account/update', async function (req, res) {
    const { id } = req.body
    const { newBalance } = req.body
    const { newSaving } = req.body
    const { newTransaction } = req.body

    if (newTransaction) {
        try {
            await Account.findByIdAndUpdate(id, { $push: { transactions: newTransaction } })
            res.send('Transactions is Update')
        } catch (error) {
            res.send(error)
        }
    }
    if (newBalance) {
        try {
            await Account.findByIdAndUpdate(id, { balance: newBalance })
            res.send('Balance is Update')
        } catch (error) {
            res.send(error)
        }
    }
    if (newSaving) {
        try {
            await Account.findByIdAndUpdate(id, { saving: newSaving })
            await Manager.updateMany({ $inc: { amountMoneySaving: newSaving } }, { new: true, useFindAndModify: false }).populate('accounts')
            res.send('Saving is Update')
        } catch (error) {
            res.send(error)
        }
    }
})


module.exports = router

