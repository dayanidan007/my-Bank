const express = require('express')
const app = express()
const accountRouter = require('../bank/server/routes/AccountApi')
const managerRouter = require('../bank/server/routes/ManagerApi')
const loanRouter = require('../bank/server/routes/LoanApi')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/my-bank').then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', accountRouter)
app.use('/', managerRouter)
app.use('/', loanRouter)



const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

