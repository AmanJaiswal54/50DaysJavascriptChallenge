const boxes = document.querySelectorAll(".box");
let queue = [];
boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    this.classList.add("active");
    queue.push(this);
    removeActiveClassInOrder();
  });
});

function removeActiveClassInOrder() {
  let totalActive = document.querySelectorAll(".active");
  if (totalActive.length === boxes.length) {
    setTimeout(() => {
      for (let i = 0; i < queue.length; i++) {
        setTimeout(() => {
          let box = queue.shift();
          box.classList.remove("active");
        }, i * 1000);
      }
    }, 2000);
  }
}
