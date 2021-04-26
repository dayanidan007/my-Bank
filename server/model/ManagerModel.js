const mongoose = require("mongoose")
const Schema = mongoose.Schema

const managerSchema = new Schema({
    loans: [{ type: Schema.Types.ObjectId, ref: 'Loan' }],// הלוואות
    accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],// חשבונות
    amountMoneySaving: Number,// סה"כ כסף שמור בבנק
    amountMoneyLoans: Number,// סה"כ כסף שהבנק נתן להלוואות
}, { versionKey: false })

const Manager = mongoose.model("Manager", managerSchema)
module.exports = Manager