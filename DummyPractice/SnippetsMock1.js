// Some frequently asked Js Screening questions:

// Que 1:- 
// const func = () => console.log(val);
// let val = 3;
// func();

// Que 2:- 
// const val = 2;
// delete val;
// console.log(val);

// Que 3:- 
// let p1 = { name: "Mohit" };
// let p2 = { name: "Mohit" };
// const m1 = [p1];
// const m2 = [p2];
// p1 = null;
// p2.name = null;
// console.log(m1, m2);

// Que 4:- 
// console.log([..."Pune", "Delhi", ..."Mumbai"]);
// console.log(5 * undefined);
// console.log(5 * null);

// Que 5:-
// function welcomeMessage(name) {
//  setTimeout(() => {
//   return `Hello ${name}!`;
//  }, 0);
// }
// console.log(welcomeMessage("Mohit"));

// Que 6:-
// function welcomeMessage(name, callback) {
//  setTimeout(() => {
//   callback(`Hello ${name}!`);
//  }, 0);
// }
// welcomeMessage("Mohit", function (message) {
//  console.log(message);
// });
// console.log(5 * {});

// Que 7:-
// var func = function () {
//  console.log(this, this[0], this[1]);
// }.bind("1", "10", 2);
// func();
// var func1 = function () {
//  console.log(this, this[0], this[1]);
// }.bind(1, "1", 2);
// func1();
// var func2 = function () {
//  console.log(this);
// }.bind();
// func2();

// Que 8:-
// var obj = {
//  0: 1,
//  1: 2,
//  cat: "meaow",
//  "": "empty string",
// };
// console.log(obj[0], obj[1], obj["cat"], obj[""]);

// Que 9:- 
// const promise = new Promise((res) => res(4));
// promise
//  .then((p) => {
//   console.log(p);
//   return p * 4;
//  })
//  .then((p) => {
//   console.log(p);
//   return p * 4;
//  })
//  .finally((p) => {
//   console.log(p);
//   return p * 4;
//  })
//  .then((p) => {
//   console.log(p);
//  });