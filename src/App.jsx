import { useSelector } from "react-redux";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = useSelector((state) => state.expenses.expenses);

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <p>Total expenses: {expenses.length}</p>
      <p>Total amount: ₹{totalAmount}</p>

      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
