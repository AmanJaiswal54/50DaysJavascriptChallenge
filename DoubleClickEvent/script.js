let container = document.querySelector(".container");
let initialTime = 0;

container.addEventListener("click", function (e) {
  if (initialTime === 0) {
    initialTime = new Date().getTime();
  } else {
    let newTime = new Date().getTime();
    if (newTime - initialTime < 400) {
      console.log("DOUBLE Clicked Created");
      showAnimation(e);
      initialTime = 0;
    } else {
      initialTime = new Date().getTime();
    }
  }
});

function showAnimation(e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  let circle = document.createElement("span");
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  setTimeout(() => {
    circle.style.opacity = 0;
  }, 20);
  container.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
}

container.addEventListener("dblclick", function (e) {
  console.log("DOUBLE Clicked Inbuilt");
});