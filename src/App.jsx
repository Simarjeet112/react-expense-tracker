import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  // Load expenses from localStorage
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Form state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // Edit state
  const [editingId, setEditingId] = useState(null);

  // Persist expenses
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Total amount (derived state)
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Add OR Update expense
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    if (editingId === null) {
      // ADD
      const newExpense = {
        id: Date.now(),
        title,
        amount: Number(amount),
      };
      setExpenses([...expenses, newExpense]);
    } else {
      // UPDATE
      setExpenses(
        expenses.map((expense) =>
          expense.id === editingId
            ? { ...expense, title, amount: Number(amount) }
            : expense
        )
      );
      setEditingId(null);
    }

    setTitle("");
    setAmount("");
  };

  // Start editing
  const startEdit = (expense) => {
    setEditingId(expense.id);
    setTitle(expense.title);
    setAmount(expense.amount.toString());
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <p>Total expenses: {expenses.length}</p>
      <p>Total amount: ₹{totalAmount}</p>

      <ExpenseForm
        title={title}
        amount={amount}
        setTitle={setTitle}
        setAmount={setAmount}
        onSubmit={handleSubmit}
        isEditing={editingId !== null}
      />

      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
        onEdit={startEdit}
      />
    </div>
  );
}

export default App;
