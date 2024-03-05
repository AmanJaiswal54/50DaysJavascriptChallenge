const container = document.querySelector(".container");
const output = document.querySelector(".output");
const options = document.querySelector(".options");
const logos = document.querySelectorAll(".logo");

container.addEventListener("mouseover", function () {
  addActiveClass();
  container.style.backgroundColor = getBackGroundColor("gray");
});

container.addEventListener("mouseout", function () {
  removeActiveClass();
  container.style.backgroundColor = getBackGroundColor("gainsboro");
});

logos.forEach(function (logo) {
  logo.addEventListener("click", function (e) {
    output.innerHTML = this.innerHTML;
    removeActiveClass();
    container.style.backgroundColor = getBackGroundColor("gainsboro");
  });
});

function addActiveClass() {
  options.classList.add("active");
}

function removeActiveClass() {
  options.classList.remove("active");
}

function getBackGroundColor(color) {
  return color;
}
