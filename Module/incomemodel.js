const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    investments: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;
