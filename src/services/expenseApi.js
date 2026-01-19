const API_URL = "http://localhost:5000/api/expenses";

export const fetchExpenses = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createExpense = async (expense) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return res.json();
};

export const deleteExpense = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
