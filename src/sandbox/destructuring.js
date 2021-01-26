//
//! Object destructuring
//

// const Book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holid",
//   publisher: {
//     // name: "Penguin",
//     location: "New York",
//   },
// };

// const { name: publisherName = "Self-published" } = Book.publisher;

// console.log(publisherName);

//
//! Array destructuring
//

const home = [
  "111 Fleetham Gardens",
  "RG6 4BZ",
  "Lower Earley",
  "Reading",
  "Berkshire",
];

const items = ["Coffee (hot)", "£2.00", "£2.50", "£2.75"];

const [coffee, , mediumPrice] = items;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
