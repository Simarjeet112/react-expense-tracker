import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/expenses/expensesSlice";

function ExpenseList({ expenses }) {
  const dispatch = useDispatch();

  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id} style={{ marginBottom: "8px" }}>
          {expense.title} - ₹{expense.amount}
          <button
            onClick={() => dispatch(deleteExpense(expense.id))}
            style={{ marginLeft: "10px" }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
