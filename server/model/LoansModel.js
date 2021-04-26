const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loanSchema = new Schema({
    ManagerID: [{ type: Schema.Types.ObjectId, ref: 'Manager' }],
    accountNumber: Number, // מספר חשבון אליו ההלוואה שייכת
    dateOfEstablishmen: Date, // תאריך הקמת ההלוואה
    endDate: Date, // תאריך סיום תשלום ההלוואה
    loanAmount: Number, // סכום לקיחת ההלוואה
    interest: Number, // ריבית שנתית
    balanceamount:Number,// סהכ ההיתרה שנותרה לשלם
    lastPayment: Date, // תשלום אחרון שבוצע להלוואה
}, { versionKey: false })

const Loan = mongoose.model("Loan", loanSchema)
module.exports = Loan