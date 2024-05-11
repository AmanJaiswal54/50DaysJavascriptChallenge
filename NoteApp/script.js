const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".add-btn");
btn.addEventListener("click", () => {
  createNotes();
});

function createNotes() {
  const div = document.createElement("div");
  div.classList.add("note");
  notesContainer.appendChild(div);
  createBtnContainer(div);
  createTextArea(div);
}

function createBtnContainer(noteParent) {
  const div = document.createElement("div");
  div.classList.add("btn-container");
  noteParent.appendChild(div);
  createSavebtn(div);
  createDeletebtn(div);
}

function createSavebtn(parent) {
  const div = document.createElement("div");
  div.classList.add("save-btn");
  div.innerHTML = "save";
  parent.appendChild(div);
}

function createDeletebtn(parent) {
  const div = document.createElement("div");
  div.classList.add("delete-btn");
  div.innerHTML = "delete";
  parent.appendChild(div);
}


function createTextArea(noteParent) {
    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea-container");
    noteParent.appendChild(textarea);
}