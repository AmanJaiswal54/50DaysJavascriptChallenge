// Difference between

function funct1() {
  console.log(a);
}
function funct2(b) {
  let a = 10;
  return b;
}
funct2(funct1)();

// vs

function funct2(b) {
  let a = 10;
  return function () {
    console.log(a);
  };
}
funct2()();

// -------------------------------

function outer() {
  var a = 1;
  const b = 10;
  let c = 20;
  function inner() {
    console.log(a, b, c);
  }
  a = 2;
  // b = 11;
  c = 22;

  return inner;
  c = 21;
  b = 11;
}
outer()();

// -------------------------------

// Difference between

// all parameters in single parenthesis

function multiply() {
  console.log("arguments", arguments);
  let total = 1;
  for (let i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  console.log("total multiply", total);
}
multiply(1, 2, 3, 4, 5);

// vs
// with empty parenthesis and 1 parameter

function multiply(x) {
  return function (y) {
    if (y) {
      return multiply(x * y);
    } else {
      console.log("total multiply", x);
    }
  };
}
multiply(1)(2)(3)(4)(5)();

// vs
// with empty parenthesis and 1 parameter

function sum(x) {
  return function (y) {
    if (typeof y === "number") {
      return sum(x + y);
    } else {
      console.log("total multiply", x);
    }
  };
}
sum(1)(2)(3)(0)(5)();

// vs
// with empty parenthesis and multiple parameters

function sum(...args1) {
  let sum1 = args1.reduce((acc, arg) => {
    return acc + arg;
  }, 0);
  return function (...args2) {
    let sum2 = args2.reduce((acc, arg) => {
      return acc + arg;
    }, 0);
    if (typeof sum2 === "number") {
      return sum(sum1 + sum2);
    } else {
      console.log("total multiply", sum1);
    }
  };
}
sum(1)(2, 3)(4, 5, 6)();

// vs
// without empty parenthesis

function add(a) {
  function sum(b) {
    a = a + b;
    return sum;
  }
  sum.getValue = function () {
    return a;
  };
  return sum;
}
console.log(add(1)(2)(3)(4));
console.log(add(1)(2)(3)(4).getValue());


// how to avoid memory leaks
// https://dev.to/satishrajnale/question-16-javascript-in-depth-4-types-of-common-memory-leaks-and-how-to-avoid-13fd


// Currying via Closures Questions
// https://theanubhav.com/2019/02/03/js-currying-in-interview/#add234-and-add234-usage-in-same-function


// nested functions

const compose = (sum2, sum1) => (x) => sum2(sum1(x));
const sum1 = (num) => num + 1;
const sum2 = (num) => num * 2;
const result = compose(sum2, sum1);
console.log(result(53));
