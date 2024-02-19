// MAP Higher Order Function

let inputMapArray = [2, 5, 7, 8, 1, 4];
console.log("inputMapArray", inputMapArray);

let mapInbuiltOutput = inputMapArray.map((num) => {
  return num * 6;
});

console.log("mapInbuiltOutput", mapInbuiltOutput);

Array.prototype.mapPolyfillOutput = function (cb, index) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], index));
  }
  return newArr;
};

let mapOutput = inputMapArray.mapPolyfillOutput((num) => {
  return num * 6;
});

console.log("mapPolyfillOutput", mapOutput);

// FIND Higher Order Function

let inputFindArray = [2, 5, 7, 8, 1, 4];
console.log("inputFindArray", inputFindArray);

let findInbuiltOutput = inputFindArray.find((num) => {
  return num % 2 !== 0;
});

console.log("findInbuiltOutput", findInbuiltOutput);

Array.prototype.findPolyfillOutput = function (cb, index) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], index)) {
      return this[i];
    }
  }
};

let findOutput = inputFindArray.findPolyfillOutput((num) => {
  return num % 2 !== 0;
});

console.log("findPolyfillOutput", findOutput);

// FILTER Higher Order Function

let inputFilterArray = [2, 5, 7, 8, 1, 4];
console.log("inputFilterArray", inputFilterArray);

let filterInbuiltOutput = inputFilterArray.filter((num) => {
  return num % 2 !== 0;
});

console.log("filterInbuiltOutput", filterInbuiltOutput);

Array.prototype.filterPolyfillOutput = function (cb, index) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], index)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

let filterOutput = inputFilterArray.filterPolyfillOutput((num) => {
  return num % 2 !== 0;
});

console.log("filterPolyfillOutput", filterOutput);

// REDUCE Higher Order Function

let inputReduceArray = [2, 5, 7, 8, 1, 4];
console.log("inputReduceArray", inputReduceArray);

let reduceInbuiltOutput = inputReduceArray.reduce((acc, num) => {
  return acc + num;
}, 10);

console.log("reduceInbuiltOutput", reduceInbuiltOutput);

Array.prototype.reducePolyfillOutput = function (cb, acc = 0) {
  let sum = acc;
  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }
  return sum;
};

let reduceOutput = inputReduceArray.reducePolyfillOutput((acc, num) => {
  return acc + num;
}, 10);

console.log("reducePolyfillOutput", reduceOutput);

// EVERY Higher Order Function

let inputEveryArray = [0, 1, 4, 9, 16, 25];
console.log("inputEveryArray", inputEveryArray);

let everyInbuiltOutput = inputEveryArray.every((num, index) => {
  return num === Math.pow(index, 2);
});

console.log("everyInbuiltOutput", everyInbuiltOutput);

Array.prototype.everyPolyfillOutput = function (cb) {
  let result = true;
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i)) {
      result = false;
      return result;
    }
  }
  return result;
};

let everyOutput = inputEveryArray.everyPolyfillOutput((num, index) => {
  return num === Math.pow(index, 2);
});

console.log("everyPolyfillOutput", everyOutput);

// SOME Higher Order Function

let inputSomeArray = [0, 1, 4, 9, 16, 25, 28];
console.log("inputSomeArray", inputSomeArray);

let someInbuiltOutput = inputSomeArray.some((num, index) => {
  return num !== Math.pow(index, 2);
});

console.log("someInbuiltOutput", someInbuiltOutput);

Array.prototype.somePolyfillOutput = function (cb) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result = true;
    }
  }
  return result;
};

let someOutput = inputSomeArray.somePolyfillOutput((num, index) => {
  return num !== Math.pow(index, 2);
});

console.log("somePolyfillOutput", someOutput);
