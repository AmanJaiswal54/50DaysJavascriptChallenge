const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  container.classList.toggle("active");
  e.target.innerText = e.target.innerText === "Dark" ? "Light" : "Dark";
});

document.querySelector(".wrapper").addEventListener("click", function (e) {
  this.classList.toggle("active");
  container.classList.toggle("active");
});
