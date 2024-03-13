// Promise API's -- all, allSettled, race, any

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 1 Resolved");
  }, 6000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 2 Resolved");
  }, 3000);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 3 Resolved");
  }, 3000);
});

// 1 Promise.all
// if all the promises fulfilled, then it will return the arrays of fulfilled data
// in case if any of the promise rejected, then it will upfront return the rejected promise and it will not wait for remaining promises to get settled

Promise.all([p1, p2, p3])
  .then(function (response) {
    console.log("Promise.all response", response);
  })
  .catch(function (error) {
    console.log("Promise.all error", error);
  });

// ------------------------------------------------------------------------------------------

// 2 Promise.allSettled
// if all the promises fulfilled, then it will return the arrays of fulfilled data
// in case if any of the promise rejected, then also it will wait for all the other promises to get settled(fulfilled or rejected) first and will return array of settled promises.

Promise.allSettled([p1, p2, p3])
  .then(function (response) {
    console.log("Promise.allSettled response", response);
  })
  .catch(function (error) {
    console.log("Promise.allSettled error", error);
  });

// ------------------------------------------------------------------------------------------

// 3 Promise.race
// it will return the first fulfilled or rejected promise and will not wait for remaining promises to get settled

Promise.race([p1, p2, p3])
  .then(function (response) {
    console.log("Promise.race response", response);
  })
  .catch(function (error) {
    console.log("Promise.race error", error);
  });

// ------------------------------------------------------------------------------------------

// 4 Promise.any
// it will return the first fulfilled promise, doesn't matter if the earlier promise got rejected
// in case if all the promises get rejected then it will return array of Aggregate error

Promise.any([p1, p2, p3])
  .then(function (response) {
    console.log("Promise.any response", response);
  })
  .catch(function (error) {
    console.log("Promise.any error", error.errors);
  });
