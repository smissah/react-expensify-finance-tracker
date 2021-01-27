import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";
// import { Link } from "react-router-dom";
import addExpense from "../../actions/expenses";

const AddExpensePage = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          // console.log(expense);
          props.dispatch(addExpense(expense));
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
