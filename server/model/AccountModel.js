const mongoose = require("mongoose")
const Schema = mongoose.Schema

const accountSchema = new Schema({
    managerID: [{ type: Schema.Types.ObjectId, ref: 'Manager' }],// מספר זיהוי של המנהל שאחראי עליו
    accountNumber: Number,// מספר חשבון
    fullName: String,// שם מלא
    balance: Number,// יתרת העובר ושב
    saving: Number,// פיקדון חסכון
    loans: [{ type: Schema.Types.ObjectId, ref: 'Loan' }],
    transactions: [{
        date: String,
        description: String,
        creditOrDebit: Number,
    }]// פעולות שבוצעו בחשבון
}, { versionKey: false })

const Account = mongoose.model("Account", accountSchema)
module.exports = Account