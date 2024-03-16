import COLORS from "./const.js";
const TOTAL_SQUARES = 400;

const container = document.querySelector('.container');
const virtalContainer = document.createDocumentFragment();

for(let  i =1; i<=TOTAL_SQUARES;i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    virtalContainer.appendChild(square);

}
container.appendChild(virtalContainer);

document.querySelectorAll(".square").forEach(function (square) {
  square.addEventListener("mouseover", function () {
    this.style.backgroundColor =
      COLORS[Math.floor(Math.random() * COLORS.length)];
  });
  square.addEventListener("mouseout", function () {
    setTimeout(() => {
      this.style.backgroundColor = "gray";
    }, 3000);
  });
});
