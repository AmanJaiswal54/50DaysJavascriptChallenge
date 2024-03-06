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
