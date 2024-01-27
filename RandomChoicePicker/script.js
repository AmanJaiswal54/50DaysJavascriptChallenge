const TOTAL_TIMES_ANIMATION_RUN = 50;

const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");

textarea.addEventListener("keyup", (e) => {
  let strArray = getStringArray(e.target.value);
  tags.innerHTML = createTags(strArray);
  if (e.key === "Enter") {
    e.target.value = "";
    for (let i = 0; i < TOTAL_TIMES_ANIMATION_RUN; i++) {
      setTimeout(() => {
        showRandomAnimation();
      }, i * 200);
    }

    // final selected Value
    setTimeout(() => {
      let selectedTag = getRandomTag();
      addActiveClass(selectedTag);
    }, TOTAL_TIMES_ANIMATION_RUN * 200);
  }
});

function createTags(strArray) {
  return strArray
    .map((str) => {
      return `<span class="tag">${str}</span>`;
    })
    .join("");
}

function getStringArray(value) {
  return value
    .split(",")
    .filter((str) => {
      return str.length !== 0;
    })
    .filter((str) => {
      return str !== " ";
    })
    .map((str) => {
      return str.trim();
    });
}

function showRandomAnimation() {
  let selectedTag = getRandomTag();
  setTimeout(() => {
    addActiveClass(selectedTag);
  }, 10);

  setTimeout(() => {
    removeActiveClass(selectedTag);
  }, 200);
}

function getRandomTag() {
  const tag = document.querySelectorAll(".tag");
  return tag[Math.floor(Math.random() * tag.length)];
}

function addActiveClass(selectedTag) {
  selectedTag.classList.add("active");
}

function removeActiveClass(selectedTag) {
  selectedTag.classList.remove("active");
}
