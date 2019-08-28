// const person = {
//   name: "hien",
//   age: 40,
//   location: {
//     city: "nhatrang",
//     temp: 92
//   }
// };

// const { name = "Anonymous", age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "xxx",
//   author: "hien",
//   publisher: {
//     // name: "abc"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

const address = ["123 asfadf", "philadenphia", "pennysylvania", "1238"];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);
