// consume and produce promises
// .then, .catch is use to consume the promise
// new Promise is use to produce promise

const URL = "https://cat-fact.herokuapp.com/facts";

const heading = document.querySelector(".heading");
const wrapper = document.querySelector(".response-wrapper");

let promise = fetch(URL);

promise
  .then(function (res) {
    console.log("res 1", res);
    return res.json();
  })
  .then(function (res) {
    console.log("res 2", res);
    setTimeout(() => {
      renderCatFactResponse(res);
    }, 2000);
    return createdPromiseAfterResponseCompleted();
  })
  .then(function (res) {
    console.log("res 3", res);
    heading.innerHTML = `${heading.innerHTML}: ${res.text}`;
  })
  .catch(function (err) {
    console.log("err", err);
  });

function renderCatFactResponse(res) {
  const ul = document.createElement("ul");
  for (let i = 0; i < res.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = res[i]?.text;
    ul.appendChild(li);
  }
  wrapper.appendChild(ul);
}

function createdPromiseAfterResponseCompleted() {
  return new Promise(function (resolve, reject) {
    let msg = {
      text: "RESPONSE COMPLETED",
    };
    setTimeout(() => {
      return resolve(msg);
    }, 3000);
  });
}
