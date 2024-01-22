const container = document.querySelector(".container");

document.addEventListener("keydown", (event) => {
  container.innerHTML = `
    <div class="wrapper">
        <div class="title">Key</div>
        <div class="description">${
          event.key === " " ? "Space" : event.key
        }</div>
      </div>
      <div class="wrapper">
        <div class="title">Code</div>
        <div class="description">${event.code}</div>
      </div>
    `;
  deleteExistingAudio();
  const audio = createNewAudio(event.key);
  container.insertAdjacentElement("beforebegin", audio);
  audio.play();
});

function deleteExistingAudio() {
  document.querySelector("audio")?.remove();
}

function createNewAudio(text) {
  const audio = document.createElement("audio");
  audio.id = text;
  audio.src = `sounds/${text.toLowerCase()}.mp3`;
  // audio.playbackRate = 2;
  // audio.loop = true;
  return audio;
}
