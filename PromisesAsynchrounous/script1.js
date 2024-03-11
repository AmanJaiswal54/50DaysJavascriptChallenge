// Difference between promise.then(success, error) and promise.then(success).catch(error)
// The main difference between the forms promise.then(success, error) and promise.then(success).catch(error) is that in case if success callback returns a rejected promise, then only the second form is going to catch that rejection.
// reference1 : https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/
// reference2 : https://javascript.info/promise-chaining

function success(value) {
  console.log("Resolved: ", value);
}

function error(err) {
  console.log("Error: ", err);
}

function rejectSuccess(invalidValue) {
  console.log("Invalid success: ", invalidValue);
  return Promise.reject("Invalid!");
}

// promise.then(success, error)
Promise.resolve("Zzz!").then(rejectSuccess, error); // Logs 'Invalid success: Zzzzz!'

// promise.then(success).catch(error)
Promise.resolve("Zzz!").then(rejectSuccess).catch(error); // Logs 'Invalid success: Zzzzz!' // Logs 'Error: Invalid!'
