export default (expenses, { text, sortBy, startDate, endDate }) => {
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
