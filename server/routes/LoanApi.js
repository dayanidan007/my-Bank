const express = require('express')
const router = express.Router()
const Loan = require('../model/LoansModel')
const Account = require('../model/AccountModel')
const Manager = require('../model/ManagerModel')


router.post('/account/loan', async function (req, res) {
    const { accountNumber } = req.body
    const { ManagerID } = req.body
    const { loanAmount } = req.body
    const loan = new Loan({ ...req.body })
    try {
        await loan.save
        const account = await Account.findOneAndUpdate({ accountNumber: accountNumber }, { $push: { loans: loan } }, { new: true, useFindAndModify: false }).populate('loans')
        const manager = await Manager.findByIdAndUpdate({ _id: ManagerID }, { $push: { loans: loan } }, { $inc: { amountMoneyLoans: loanAmount } }, { new: true, useFindAndModify: false }).populate('loans')
        res.send(account)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router

