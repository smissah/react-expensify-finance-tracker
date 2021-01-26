import React from "react";
import ExpenseList from "../ExpenseList";
import { connect } from "react-redux";
import ExpenseListFilters from "../ExpenseListFilters";
const DashboardPage = () => (
  <div>
    <ExpenseList />
    <ExpenseListFilters />
  </div>
);

export default DashboardPage;
