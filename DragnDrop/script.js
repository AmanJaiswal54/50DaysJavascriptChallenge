const bgImage = document.querySelector(".image");
const boxes = document.querySelectorAll(".box");

bgImage.addEventListener("dragstart", function () {
  this.classList.add("holdImg");
  setTimeout(() => {
    this.classList = "invisible";
  }, 0);
});

bgImage.addEventListener("dragend", function () {
  console.log("dragend");
  this.classList = "image";
});

boxes.forEach((box) => {
  box.addEventListener("dragenter", function (e) {
    e.preventDefault();
    console.log("dragenter");
  });

  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log("dragover");
    this.classList.add("hovered");
  });

  box.addEventListener("dragleave", function (e) {
    e.preventDefault();
    this.classList = "box";
    console.log("dragleave");
  });

  box.addEventListener("drop", function () {
    console.log("drop");
    this.appendChild(bgImage);
  });
});
