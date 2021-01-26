import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* {props.filters.text} */}
    <ExpenseListItem description={props.description} />
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    // filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
//the function I want to pair with the component(s)
