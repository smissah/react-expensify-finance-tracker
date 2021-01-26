import React from "react";
import ExpenseForm from "../ExpenseForm";
import { Link } from "react-router-dom";

const AddExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm />
    </div>
  );
};

export default AddExpensePage;
