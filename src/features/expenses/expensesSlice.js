import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: JSON.parse(localStorage.getItem("expenses")) || [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },

    updateExpense: (state, action) => {
      const { id, title, amount } = action.payload;
      const existing = state.expenses.find((e) => e.id === id);

      if (existing) {
        existing.title = title;
        existing.amount = amount;
      }

      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
