const Expense = require('../models/expenseModel');

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get expenses by month
exports.getExpensesByMonth = async (req, res) => {
    try {
        const { month } = req.params;
        const expenses = await Expense.find({ month });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new expense
exports.addExpense = async (req, res) => {
    try {
        const { month, expenseType, expenseAmount } = req.body;
        const newExpense = new Expense({ month, expenseType, expenseAmount });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.findByIdAndDelete(id);
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
