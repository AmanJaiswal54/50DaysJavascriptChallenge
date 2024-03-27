const URL = "https://icanhazdadjoke.com/";

const loader = document.querySelector(".bar-loader");
const message = document.querySelector(".message");
const nextBtn = document.querySelector(".next-joke");

function fetchJokes() {
  loader.classList.add("active");
  fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      message.textContent = response.joke;
      loader.classList.remove("active");
    })
    .catch(function (error) {
      console.log("error", error);
    });
}

fetchJokes();

nextBtn.addEventListener("click", fetchJokes);
