for (let i = 1; i <= 500; i++) {
  let div = document.createElement("div");
  div.innerHTML = i;
  document.querySelector("body").appendChild(div);
}




// same thing but using documentFragment virtualDOM to reduce reflow

let virtualDOM = document.createDocumentFragment();

for (let i = 1; i <= 500; i++) {
  let div = document.createElement("div");
  div.innerHTML = i;
  virtualDOM.appendChild(div);
}
document.querySelector("body").appendChild(virtualDOM);
