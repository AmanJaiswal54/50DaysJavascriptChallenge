// async and await

// 1 returning string/array/boolean/any datatype inside async function is always going to wrap the datatype with Promise and return
// async function getData() {
//   return [1, 2, 3];
// }

// let var1 = getData();
// console.log("va", var1);

// 2 returning promise inside async function is going to return Promise(no wrapping with another Promise)
// let p = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved");
//   }, 5000);
// });

// async function getData() {
//   return p;
// }

// getData().then(function (res) {
//   console.log("res", res);
// });


// 3 using async and await resolved
// let p1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 1");
//   }, 5000);
// });

// async function getData() {
//   console.log('Start')
//   let var1 = await p1;
//   console.log('Hello World 1');
//   console.log('var1', var1)
//   console.log('End')
// }

// getData()

// 4 using async and await reject
// let p1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     rej("Promise rejected 1");
//   }, 5000);
// });

// async function getData() {
//   console.log('Start')
//   let var1 = await p1;
//   console.log('Hello World 1');
//   console.log('var1', var1)
//   console.log('End')
// }

// getData().catch(function(rej) {
//   console.log('rej', rej);
// })


// 5 Snippet 1 using async and await - when promise1 timer is less than promise2
// let p1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 1");
//   }, 5000);
// });

// let p2 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 2");
//   }, 10000);
// });

// async function getData() {
//   console.log('Start')
//   let var1 = await p1;
//   console.log('Hello World 1');
//   console.log('var1', var1)

//   let var2 = await p2;
//   console.log('Hello World 2');
//   console.log('var2', var2)
//   console.log('End')
// }

// getData()


// 5 Snippet 2 using async and await - when promise1 timer is greater than promise2
// let p1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 1");
//   }, 10000);
// });

// let p2 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 2");
//   }, 5000);
// });

// async function getData() {
//   console.log('Start')
//   let var1 = await p1;
//   console.log('Hello World 1');
//   console.log('var1', var1)

//   let var2 = await p2;
//   console.log('Hello World 2');
//   console.log('var2', var2)
//   console.log('End')
// }

// getData()


// 6 Snippet 3 using async and await - when returning string/any datatype from async function after await.
// let p1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 1");
//   }, 5000);
// });

// let p2 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("Promise resolved 2");
//   }, 15000);
// });

// async function getData() {
//   console.log('Start')
//   let var1 = await p1;
//   console.log('Hello World 1');
//   console.log('var1', var1)

//   let var2 = await p2;
//   console.log('Hello World 2');
//   console.log('var2', var2)
//   console.log('End')
//   return 'hello';
// }

// let var3 = getData().then((res)=>{
//   console.log('res', res);
// })
// console.log('var3', var3);

