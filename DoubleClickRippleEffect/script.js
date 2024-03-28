const body = document.querySelector("body");

let initialTime = 0;
document.addEventListener("click", function (event) {
  if (initialTime === 0) {
    initialTime = new Date().getTime();
  } else {
    let newTime = new Date().getTime();
    if (newTime - initialTime < 400) {
      console.log("doubleClick");
      initialTime = 0;
      const container = document.createElement("div");
      container.classList.add("container");
      container.style.left = `${event.clientX}px`;
      container.style.top = `${event.clientY}px`;
      body.appendChild(container);

      setTimeout(() => {
        container.remove();
      }, 2000);
    } else {
      initialTime = new Date().getTime();
    }
  }
});
