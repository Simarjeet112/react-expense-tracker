import express from "express";
import mongoose from "mongoose";
import Expense from "../models/expense.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("DB state in POST:", mongoose.connection.readyState);

  try {
    const expense = await Expense.create({
      title: req.body.title,
      amount: req.body.amount,
    });

    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
