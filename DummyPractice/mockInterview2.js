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