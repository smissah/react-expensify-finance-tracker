import { createStore } from "redux";

//
//! ACTION GENERATORS
//
const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy, //! this can also be return like how increment was done - see below
  };
};

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const resetCount = () => ({ type: "RESET" });

const setCount = ({ setTo = 1 } = {}) => {
  //!set it to one if not number is provided - assign the object to an empty object if no parameter is given to it doesnt become undefined!!
  return {
    type: "SET",
    // setTo: setTo
    setTo,
  };
};
//
//
//
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(
        `${action.type} is the action type and te current value is ${state.count}`
      );
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      console.log(
        `${action.type} is the action type and te current value is ${state.count}`
      );
      return {
        count: state.count - action.decrementBy,
      };

    case "RESET":
      console.log(
        `${action.type} is the action type and te current value is ${state.count}`
      );
      return { count: 0 };

    case "SET":
      console.log(
        `${action.type} is the action type and te current value is ${state.count} and the value is ${action.setTo}`
      );
      return { count: action.setTo };

    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setTo: 300 }));
