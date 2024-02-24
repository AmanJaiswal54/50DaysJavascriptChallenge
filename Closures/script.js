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
  c = 22;

  return inner;
  c = 21;
  b = 11;
}
outer()();

// -------------------------------

// Difference between

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
