// Closures - nested Fucntions
const compose = (sum2, sum1) => (x) => sum1(sum2(x));
const sum1 = (num) => num + 1;
const sum2 = (num) => num * "";
const result = compose(sum2, sum1);
console.log(result(53));

// -----------------------------

// Prototype - To create Capatalize first alphabet
let inputArray = ["aman", "rahul", "shiva", "gautam"];
Array.prototype.captitalilzeFirstLetter = function () {
  const arr = this;
  const result = arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log("result", result);
};
inputArray.captitalilzeFirstLetter();

// -----------------------------

// sort String
let arr1 = ["aman", "rahul", "shiva", "gautam"];
console.log("output", arr1.sort());

// sort Number
let arr2 = [1, 40, 20, 100, 1000, 200, 300, 30, 4000];
console.log(
  "output",
  arr2.sort((a, b) => {
    return a - b;
  })
);

// -----------------------------

// Difference between Slice and Splice.
// slice
var a = ["aman", "rahul", "shiva", "gautam"];
var b = a.slice(1, 3);
console.log("slice", a, b);

// splice
var a = ["aman", "rahul", "shiva", "gautam"];
var b = a.splice(1, 3);
console.log("splice", a, b);

// -----------------------------

// Hoisting Snippet
let a = 10;
{
    console.log('Start');
	console.log(a);
    console.log('End');
	let a = 20;
}