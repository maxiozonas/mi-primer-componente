import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import './App.css'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 94.56,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.99,
    date: new Date(2021, 4, 14),
  },
  {
    id: 'e3',
    title: 'Car insurance',
    amount: 294.56,
    date: new Date(2021, 6, 22),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2019, 6, 20),
  },  
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
