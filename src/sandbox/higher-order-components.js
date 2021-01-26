import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h2>Hello World!</h2>
    <p>Welcome to Info, it contains ${props.information}</p>
  </div>
);

//This is just a normal function that returns my HIGH-ORDER-COMPONENT
const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} /> //HOC - props are broken down to it can get props passed in
      ) : (
        <p>Please sign-in to see information</p>
      )}
    </div>;
  };
};
const AuthInfo = requireAuthentication(Info); // here is were I can pass in as many components as I'd like to get rerendered

ReactDOM.render(
  <AuthInfo
    isAuthenticated={true}
    information="This was the hidden information!"
  />,
  document.getElementById("app-container")
);
