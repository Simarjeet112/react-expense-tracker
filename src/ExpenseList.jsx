function ExpenseList({ expenses, onDelete, onEdit }) {
    if (expenses.length === 0) {
      return <p>No expenses added yet.</p>;
    }
  
    return (
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} style={{ marginBottom: "8px" }}>
            {expense.title} - ₹{expense.amount}
  
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => onEdit(expense)}
            >
              ✏️
            </button>
  
            <button
              style={{ marginLeft: "6px" }}
              onClick={() => onDelete(expense.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ExpenseList;
  