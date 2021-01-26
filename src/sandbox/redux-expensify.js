import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//!Actions needed

//ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};
//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => {
  console.log("removeExpense", id);

  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

// EDIT_EXPENSE

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};
// SET_TEXT_FILTER
const setTextFilter = ({ text = "" }) => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};
//SORT_BY_DATE

const sortByDate = () => {
  return { type: "SORT_BY_DATE" };
};
//SORT_BY_AMOUNT

const sortByAmount = () => {
  return { type: "SORT_BY_AMOUNT" };
};
//SET_START_DATE
const setStartDate = (startDate) => {
  return { type: "SET_START_DATE", startDate };
};
//SET_END_DATE
const setEndDate = (endDate) => {
  return { type: "SET_END_DATE", endDate };
};
//! Expenses Reducer

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

//! filters reducer

const filterDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };

    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

//!get visible expenses
// using timestamps - milliseconds since 1st Jan 1970;
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      //if the startdate is the default of undefined = returns true
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch =
        typeof text === "string" &&
        expense.description.toLowerCase().includes(text.toLowerCase());

      return textMatch && endDateMatch && startDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
//!store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//assign expense to variable so its easier to pull out id
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 85000, createdAt: 4042202 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Fuel", amount: 40, createdAt: -300000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "food shop", amount: 100, createdAt: 50000 })
);

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 90000, note: "" })); //second in am object containing everthing to update
// store.dispatch(setTextFilter({ text: "food" }));
// store.dispatch(setTextFilter(""));
// store.dispatch(sortByAmount({ sortBy: "amount" }));
// store.dispatch(sortByDate({ sortBy: "date" }));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(9999999));
// store.dispatch(setStartDate());

const demoState = {
  expenses: [
    {
      id: "f9930od",
      description: "Phone bill",
      note: "EE New phone bill",
      amount: 1000, //written in pennies
      // createdAt: new Date()
      createdAt: 0,
    },
  ],
  filters: {
    text: "",
    sortBy: "", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
