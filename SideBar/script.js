const pivot = document.querySelector(".pivot");
const container = document.querySelector(".container");
const titles = document.querySelectorAll(".title");
pivot.addEventListener("click", function (e) {
  container.classList.toggle("active");
  pivot.classList.toggle("active");

  titles.forEach(function (title) {
    title.classList.toggle("active");
  });
});
