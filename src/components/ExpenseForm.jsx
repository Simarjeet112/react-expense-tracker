import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/expenses/expensesSlice";

function ExpenseForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    dispatch(
      addExpense({
        id: Date.now(),
        title,
        amount: Number(amount),
      })
    );

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
