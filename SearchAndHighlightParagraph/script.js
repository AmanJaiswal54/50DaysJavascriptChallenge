let text = document.querySelector(".wrapper");
let originalText = text.textContent;
let input = document.querySelector(".input");

// solution 1 -- using replaceAll
input.addEventListener("keyup", function (e) {
  let value = e.target.value;
  if (value !== "" && text.textContent.includes(value)) {
    text.innerHTML = text.textContent.replaceAll(
      value,
      `<span class="highlight">${value}</span>`
    );
  } else {
    text.innerHTML = originalText;
  }
});

// solution 2 -- using RegExpression
// input.addEventListener("keyup", function (e) {
//   let value = e.target.value;
//   if (value !== "") {
//     let regExp = new RegExp(value, "gi");
//     console.log("regExp", regExp);
//     text.innerHTML = text.textContent.replace(
//       regExp,
//       (keyword) => `<mark>${keyword}</mark>`
//     );
//   } else {
//     text.innerHTML = originalText;
//   }
// });
