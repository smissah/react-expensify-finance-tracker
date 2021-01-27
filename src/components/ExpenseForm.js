import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import ErrorComponent from "./ErrorComponent";

// const now = moment();
// console.log(now.format("Do, MMM, YYYY"));

export default class ExpenseFrom extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calenderFocused: false,
    isFormError: false,
  };

  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description: description }));
    console.log(this.state.description);
  };

  handleTextAreaChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note: note }));
  };

  handleAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }));
    }
  };

  handleDateChange = (createdAtDate) => {
    if (createdAtDate) {
      this.setState(() => ({ createdAt: createdAtDate }));

      //put in an if statement to stop people deleting date
    }
  };

  handleFocusedChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // return an error message if these fields are empty
      this.setState(() => ({
        isFormError: true,
      }));
    } else {
      this.setState(() => ({ isFormError: false }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        // createdAt: this.state.createdAt.format("Do, MMM, YYYY"), changes it from unix milliseconds - check moments documentation

        createdAt: this.state.createdAt.valueOf(),

        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        <form action="#" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            type="text"
            //!use text not number for i can use some validation
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.handleFocusedChange}
            numberOfMonths={1} //how many months to show at a go
            isOutsideRange={(day) => false} //allows past dates
          />
          <textarea
            placeholder="Add a new note"
            onChange={this.handleTextAreaChange}
            value={this.state.note}
          ></textarea>
          <button>Add Expense</button>
        </form>
        {this.state.isFormError && (
          <ErrorComponent
            message={"Please prodive an amount and description"}
          />
        )}
      </div>
    );
  }
}
