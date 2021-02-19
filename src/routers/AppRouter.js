import React from "react";
import { Route, BrowserRouter, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import HelpPage from "../components/pages/HelpPage";
import DashboardPage from "../components/pages/DashboardPage";
import EditExpensePage from "../components/pages/EditExpensePage";
import AddExpensePage from "../components/pages/AddExpensePage";
import PageNotFound from "../components/pages/PageNotFound";
import ExpenseList from "../components/ExpenseList";

const AppRouter = () => {
  console.log(ExpenseList + " is the expense list");
  return (
    <BrowserRouter>
      <div>
        <h1>Expensify</h1>
        <Header />
        <Switch className="routes">
          <Route path="/" component={DashboardPage} exact={true} />
          <Route path="/add_expense" component={AddExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route
            path="/edit_expense/:id"
            render={(props) => (
              <EditExpensePage expenseList={ExpenseList} {...props} />
            )}
          />
          {/* <Route path="/edit_expense/:id" component={EditExpensePage} /> */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
