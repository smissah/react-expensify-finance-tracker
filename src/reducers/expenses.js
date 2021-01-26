// import React from "react";

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (action.id === expense.id) {
          return {
            ...expense, //grabs and opens existing properties of the object in the array
            ...action.updates, //gets overridden buy the new spead
          };
        } else {
          return expense;
        }
      });

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        //destructured the expense object here
        return id !== action.id;
        //if true, item kept, if false, item removed
      });
    default:
      return state;
  }
};

export default expensesReducer;
