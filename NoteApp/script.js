let store = [];
let uniqueId = 0;
const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".add-btn");

btn.addEventListener("click", () => {
  createNotes(uniqueId);
  uniqueId++;
});

function createNotes(uniqueId) {
  const div = document.createElement("div");
  div.classList.add("note");
  div.classList.add(`note-${uniqueId}`);
  notesContainer.appendChild(div);
  createBtnContainer(div, uniqueId);
  createTextArea(div, uniqueId);
}

function createBtnContainer(noteParent, uniqueId) {
  const div = document.createElement("div");
  div.classList.add("btn-container");
  div.classList.add(`btn-container-${uniqueId}`);
  noteParent.appendChild(div);
  createSavebtn(div, uniqueId);
  createDeletebtn(div, uniqueId);
}

function createSavebtn(parent, uniqueId) {
  const div = document.createElement("div");
  div.classList.add("save-btn");
  div.classList.add(`save-btn-${uniqueId}`);
  div.innerHTML = "save";
  div.addEventListener("click", function (e) {
    let textAreaValue = document.querySelector(
      `.textarea-container-${uniqueId}`
    )?.value;
    store[uniqueId] = textAreaValue;
    console.log("store", store);
    localStorage.setItem("note", JSON.stringify(store));
  });
  parent.appendChild(div);
}

function createDeletebtn(parent, uniqueId) {
  const div = document.createElement("div");
  div.classList.add("delete-btn");
  div.classList.add(`delete-btn-${uniqueId}`);
  div.innerHTML = "delete";
  div.addEventListener("click", function (e) {
    let textAreaValues = JSON.parse(localStorage.getItem("note"));
    let newtextAreaValues = textAreaValues.filter((value, i) => {
      if (i !== uniqueId) {
        return value;
      }
    });
    document.querySelector(`.note-${uniqueId}`).remove();
    // localStorage.removeItem(uniqueId);
    localStorage.setItem("note", JSON.stringify(newtextAreaValues));
  });
  parent.appendChild(div);
}

function createTextArea(noteParent, uniqueId) {
  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea-container");
  textarea.classList.add(`textarea-container-${uniqueId}`);
  noteParent.appendChild(textarea);
}
