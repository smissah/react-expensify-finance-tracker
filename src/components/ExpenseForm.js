import React from "react";

export default class ExpenseFrom extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }));
    }
  };
  render() {
    return (
      <div>
        <form action="#">
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
          <textarea
            placeholder="Add a new note"
            onChange={this.handleTextAreaChange}
            value={this.state.note}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
