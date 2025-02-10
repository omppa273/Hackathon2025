const Income = require('../Module/incomemodel');

// Get all incomes
const getAllIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get incomes by month
const getIncomeByMonth = async (req, res) => {
    try {
        const { month } = req.params;
        const incomes = await Income.find({ month });
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new income entry
const addIncome = async (req, res) => {
    try {
        const newIncome = new Income(req.body);
        await newIncome.save();
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete income
const deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;
        await Income.findByIdAndDelete(id);
        res.json({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllIncomes, getIncomeByMonth, addIncome, deleteIncome };
