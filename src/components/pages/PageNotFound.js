import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    <h3> Oops Something Went wrong</h3>
    <p>This page has gone walkies</p>
    <Link to="/">Go to Dashboard</Link>
  </div>
);

export default PageNotFound;
