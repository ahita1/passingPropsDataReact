import { useState } from "react";
import ExpenseForm from "./expense-tracker/components/expenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Form from "./components/form";
import Chatbot from "./components/chatBot";

export const Catagories = ["Groceries", "Utilities", "Entertainment"];

const App = () => {
  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCatagory
    ? expenses.filter((e) => e.category === selectedCatagory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <Form></Form>
      </div>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCatagory={(category) => setSelectedCatagory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      <Chatbot />
    </div>
  );
};
export default App;
