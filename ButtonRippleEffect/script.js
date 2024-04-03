const button = document.querySelector(".button");
button.addEventListener("click", function (event) {
  const container = document.createElement("span");
  container.classList.add("container");
  let x = event.clientX - event.target.offsetLeft;
  let y = event.clientY - event.target.offsetTop;
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  button.appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 1000);
});
