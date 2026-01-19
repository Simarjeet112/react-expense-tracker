import { useDispatch } from "react-redux";
import { addExpense } from "../features/expenses/expensesSlice";
import { addExpenseApi } from "../services/expenseApi";
import { useState } from "react";

function ExpenseForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = async () => {
    if (!title || !amount) return;

    const savedExpense = await addExpenseApi({
      title,
      amount: Number(amount),
    });

    dispatch(addExpense(savedExpense));

    setTitle("");
    setAmount("");
  };

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense title"
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        type="number"
      />
      <button onClick={handleAdd}>Add Expense</button>
    </>
  );
}

export default ExpenseForm;
