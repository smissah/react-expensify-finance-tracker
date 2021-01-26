import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
const ExpenseListItem = ({ description, id, amount, createdAt, dispatch }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <button
        className="btn"
        onClick={() => {
          dispatch(removeExpense({ id }));
          console.log("removed expenses");
        }}
      >
        remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect()(ExpenseListItem);
//!this works too if if you dont need anythin from state
// export default connect(mapStateToProps)(ExpenseListItem);
