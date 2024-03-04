const COUNTRIES = ["germany", "france", "argentina", "colombia"];
const container = document.querySelector(".container");
document.addEventListener("dblclick", function () {
  removePreviousCountry();
  const country = getCountry();
  container.classList.add(`${country}`);
});

function removePreviousCountry() {
  container.className = "container";
}
function getCountry() {
  return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
}
