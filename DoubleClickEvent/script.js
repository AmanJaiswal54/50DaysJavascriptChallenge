let initialTime = 0;
document.querySelector(".grandParent").addEventListener("click", function (e) {
    if(initialTime===0) {
        initialTime = new Date().getTime();
    } else {
        let newTime = new Date().getTime();
        if((newTime - initialTime) < 400) {
            console.log('DOUBLE Clicked Created');
            initialTime = 0;
        } else {
            initialTime = new Date().getTime();
        }
    }
});


document.querySelector(".grandParent").addEventListener("dblclick", function (e) {
    console.log('DOUBLE Clicked Inbuilt');
});