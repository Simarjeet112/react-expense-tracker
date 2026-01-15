import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <h1>Expense Tracker</h1>

      <form>
        <input type="text" placeholder="Expense title" />
        <input type="number" placeholder="Amount" />
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default App;
