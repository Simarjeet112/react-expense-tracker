import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "./features/expenses/expensesSlice";
import { getExpenses } from "./services/expenseApi";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const dispatch = useDispatch();

  // get expenses from redux store
  const expenses = useSelector((state) => state.expenses.expenses);

  // load expenses from backend when app loads
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses();
        dispatch(setExpenses(data));
      } catch (error) {
        console.error("Failed to load expenses", error);
      }
    };

    loadExpenses();
  }, [dispatch]);

  // calculate total amount
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Expense Tracker</h1>

      <p>Total expenses: {expenses.length}</p>
      <p>Total amount: ₹{totalAmount}</p>

      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
