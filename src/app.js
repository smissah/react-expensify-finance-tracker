import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/main.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Phone Bill", amount: 3500, createdAt: 5 })
);
store.dispatch(addExpense({ description: "Food bill", amount: 1500 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 1950, createdAt: 1000 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//
//!
//
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app-container"));
