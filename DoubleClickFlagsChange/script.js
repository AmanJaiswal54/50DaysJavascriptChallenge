const COUNTRIES = ["germany", "france", "argentina", "colombia"];
const container = document.querySelector(".container");
const row = document.querySelector(".row");
document.addEventListener("dblclick", function () {
  removePreviousCountry();
  const country = getCountry();
  container.classList.add(`${country}`);
  addCountryName(country);
});

function getCountry() {
  return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
}

function removePreviousCountry() {
  container.className = "container";
}

function addCountryName(country) {
  setTimeout(() => {
    row.classList.add("active");
    row.innerHTML = country.toUpperCase();
  }, 0);

  setTimeout(() => {
    row.classList.remove("active");
  }, 1000);
}
