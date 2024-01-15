const cards = document.querySelectorAll(".card");

document.addEventListener("scroll", () => {
  cards.forEach((card) => {
    let right = card.getBoundingClientRect().right;
    let innerWidth = window.innerWidth ;
    if (right < innerWidth) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});
