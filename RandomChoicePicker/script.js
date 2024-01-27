const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");

textarea.addEventListener("keyup", (e) => {
  let strArray = getStringArray(e.target.value);
  tags.innerHTML = createTags(strArray);
  console.log('tags.innerHTML', tags.innerHTML);
  if (e.key === "Enter") {
    e.target.value = "";
    showAnimation();
  }
});

function createTags(strArray) {
  return strArray.map((str) => {
    return `<span class="tag">${str}</span>`
  }).join('');
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

function showAnimation() {
  let timer = 1000;
  const tag = document.querySelectorAll(".tag");

  let interval = setInterval(() => {
    let selectedTag = tag[Math.floor(Math.random() * tag.length)];
    timer--;
    setTimeout(() => {
      addActiveClass(selectedTag);
    }, 2000);

    setTimeout(() => {
      removeActiveClass(selectedTag);
    }, 1000);
  }, 3000);

  if (timer <= 0) {
    clearInterval(interval);
  }
}

function addActiveClass(selectedTag) {
  selectedTag.classList.add("active");
}

function removeActiveClass(selectedTag) {
  selectedTag.classList.remove("active");
}
