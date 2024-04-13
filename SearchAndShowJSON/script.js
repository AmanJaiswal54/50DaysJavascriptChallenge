import { results } from "./mockData.js";

let wrapper = document.querySelector(".wrappers");
let input = document.querySelector(".input");

function render(res) {
  wrapper.innerHTML = "";
  res.forEach((arr, index) => {
    let child = document.createElement("div");
    child.className = `wrapper -${index}`;
    child.innerHTML = `<div class='fullName'>${arr.fullName}</div><div class='address country'>${arr.address}, ${arr.country}</div>`;
    wrapper.appendChild(child);
  });
}

render(results);
input.addEventListener("keyup", function (e) {
  let value = e.target.value;
  if (value !== "") {
    let searchResults = results.filter(function (result) {
      return (
        result.fullName.includes(value) ||
        result.address.includes(value) ||
        result.country.includes(value)
      );
    });
    render(searchResults);
  } else {
    render(results);
  }
});
