import COLORS from "./const";
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const worker1 = new Worker('./worker1.js');
const worker2 = new Worker('./worker2.js');

button1.addEventListener("click", function () {
    // let sum = 0;
    // let time1 = performance.now();
    // for (let i = 0; i < 10000000000; i++) {
    //     sum = sum + i;
    // }
    // let time2 = performance.now();
    // console.log("totalTime", time2 - time1);
    // console.log("sum", sum);
    worker1.postMessage('calculate');
    worker2.postMessage('calculate');
});

worker1.onmessage = function (msg) {
     console.log("sum script worker 1", msg.data);
}
worker2.onmessage = function (msg) {
    console.log("sum script worker 2", msg.data);
}

button2.addEventListener("click", function () {
    document.body.style.backgroundColor =
        COLORS[Math.floor(Math.random() * COLORS.length)];
        console.log('document.body.style.backgroundColor', document.body.style.backgroundColor);
});
