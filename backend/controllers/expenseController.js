import Expense from "../models/expense.js";

/*
  @desc    Create a new expense
  @route   POST /api/expenses
*/
export const createExpense = async (req, res) => {
  try {
    const { title, amount } = req.body;

    // basic validation
    if (!title || !amount) {
      return res.status(400).json({
        message: "Title and amount are required",
      });
    }

    const expense = new Expense({
      title,
      amount,
    });

    const savedExpense = await expense.save();

    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
  @desc    Get all expenses
  @route   GET /api/expenses
*/
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
  @desc    Delete an expense
  @route   DELETE /api/expenses/:id
*/
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    await expense.deleteOne();

    res.json({ message: "Expense removed" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
