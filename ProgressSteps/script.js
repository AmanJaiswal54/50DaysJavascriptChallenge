const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let activeCircle = 1;

next.addEventListener("click", () => {
  activeCircle++;
  circles[activeCircle - 1].classList.add("active");

  update();
});

prev.addEventListener("click", () => {
  activeCircle--;
  circles[activeCircle].classList.remove("active");

  update();
});

function update() {
  if (activeCircle > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }

  if (activeCircle >= circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  progress.style.width =
    ((activeCircle - 1) / (circles.length - 1)) * 100 + "%";
}
