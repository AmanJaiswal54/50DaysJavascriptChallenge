// resources - https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions

// -----------------------------

// calculate sum from 1 to 100;
// brute force, time complexity - O(n)
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("sum", sum);

// optimized,  time complexity - O(1)
function getSum(n) {
  let sum = (n * (n + 1)) / 2;
  console.log("optimized sum", sum);
}
getSum(100);

// -----------------------------

// difference between Object.create and Constructor Function
// Object.create
let obj1 = {
  name: "shiva",
};

let obj2 = Object.create(obj1, {
  name: {
    value: "mahesh",
  },
});

console.log("obj1", obj1);
console.log("obj2", obj2);

// Constructor Function
function Parent(name) {
  this.name = name;
}
Parent.prototype.getLength = function () {
  return this.name.length;
};
Parent.b = 50;
let child1 = new Parent("vishnu");
console.log("child1", child1);

// -----------------------------

// Difference between Shallow Copy and Deep Copy
let obj3 = {
  name: "rahul",
  address: {
    city: "Delhi",
    state: "Delhi",
  },
  accounts: {
    sbi: {
      savings: "Yes",
    },
    hdfc: {
      savings: "No",
      current: "Yes",
    },
  },
};
let obj4 = JSON.parse(JSON.stringify(obj3)); // deep copy
obj4.accounts.hdfc.savings = "Yes";
let obj5 = { ...obj3 }; // shallow copy
obj5.accounts.hdfc.savings = "-";
console.log("obj3", obj3);
console.log("obj4", obj4);
console.log("obj5", obj5);

// -----------------------------

// interchange Object keys-values to values-keys
let obj6 = {
  name1: "julie",
  name2: "anna",
  name3: "robert",
  name4: "adam",
  name: "satya",
};

let keys = Object.keys(obj6);
let values = Object.values(obj6);
let obj7 = {};
for (let i = 0; i < keys.length; i++) {
  obj7[values[i]] = keys[i];
}
console.log("obj6", obj6);
console.log("obj7", obj7);

// -----------------------------

// What will be the output
let str = "b" + "a" + +"a" + "a";
str.toLowerCase();
console.log(str.toLowerCase()); //banana

// -----------------------------

// create a div parent and child1 div(with some text) html tag
// Now using parent div as reference I want you to create another child2 div from JS and insert inside parent at the bottom
// Ultimately need to use insertAdjacentHTML("beforeend", <div class="child2">Child 2</div>)

// -----------------------------

const arr1 = [0, 1, 2, [3, 4, [5, 6, 7, [8, 9, "10", { name: "rahul" }]]]];
// array flat polyfill
Array.prototype.myflat = function () {
  const inputArr = this;
  let outputArr = [];
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" || typeof arr[i] === "string") {
        outputArr.push(Number(arr[i]));
      } else if (
        typeof arr[i] === "object" &&
        Object.keys(arr[i]).length > 0 &&
        !Array.isArray(arr[i])
      ) {
        outputArr.push(arr[i][Object.keys(arr[i])]);
      } else {
        flatten(arr[i]);
      }
    }
  }
  flatten(inputArr);
  console.log("outputArr", outputArr);
};

arr1.myflat(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'rahul'];

// -----------------------------

// array flat function

function flatten(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || typeof arr[i] === "string") {
      out.push(Number(arr[i]));
    } else if (
      typeof arr[i] === "object" &&
      Object.keys(arr[i]).length > 0 &&
      !Array.isArray(arr[i])
    ) {
      out.push(arr[i][Object.keys(arr[i])]);
    } else {
      return flatten([...out, ...arr[i]]);
    }
  }
  console.log(out);
}
flatten(arr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'rahul'];

// -----------------------------

// palindrome

let str1 = "rac e car";
let str2 = "nitin";
let str3 = "Rama";

function palindrome(str) {
  let output_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output_str = output_str + str[i];
  }
  console.log(`${str} === ${output_str}: ${output_str === str}`);
}

palindrome(str1);
palindrome(str2);
palindrome(str3);

// -----------------------------

// Anagram

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return "Not an Anagram";
  }

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] = obj1[str1[i]] + 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!obj2[str2[i]]) {
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]] = obj2[str2[i]] + 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (obj2[str1[i]] !== obj1[str1[i]]) {
      return "Not an Anagram";
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]] !== obj1[str2[i]]) {
      return "Not an Anagram";
    }
  }

  return "Its an anagram";
}

console.log(anagram("cheater", "teacher"));

// -----------------------------

// Fibonnaci using Closures

function parent() {
  let initialValue1 = 0;
  let initialValue2 = 1;
  return function () {
    let oldInitialValue1 = initialValue1;
    let oldInitialValue2 = initialValue2;

    initialValue1 = oldInitialValue2;
    initialValue2 = oldInitialValue1 + oldInitialValue2;

    return initialValue2;
  };
}

let Fibonnaci = parent();
console.log(Fibonnaci()); // 1
console.log(Fibonnaci()); // 2
console.log(Fibonnaci()); // 3
console.log(Fibonnaci()); // 5
console.log(Fibonnaci()); // 8
console.log(Fibonnaci()); // 13
console.log(Fibonnaci()); // 21
console.log(Fibonnaci()); // 34
