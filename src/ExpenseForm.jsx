function ExpenseForm({ title, amount, setTitle, setAmount, onSubmit }) {
    return (
      <form onSubmit={onSubmit} style={{ marginBottom: "20px" }}>
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
  