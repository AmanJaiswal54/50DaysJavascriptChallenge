this.onmessage = function(msg) {
    this.postMessage(new Date());
    let sum = 0;
    let time1 = performance.now();
    for (let i = 0; i < 10000000000; i++) {
        sum = sum + i;
    }
    let time2 = performance.now();
    console.log("worker 1 totalTime", time2 - time1);
    console.log("worker 1 sum", sum);
    this.postMessage(sum);
}