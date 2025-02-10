const express = require('express');
const router = express.Router();
const { getAllIncomes, getIncomeByMonth, addIncome, deleteIncome } = require('../controller/incomecontroller');

// Define routes
router.get('/incomes', getAllIncomes);
router.get('/incomes/:month', getIncomeByMonth);
router.post('/incomes', addIncome);
router.delete('/incomes/:id', deleteIncome);

module.exports = router;

