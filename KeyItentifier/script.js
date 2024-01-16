const container = document.querySelector('.container');
document.addEventListener("keydown", (event) => {
    container.innerHTML = `
    <div class="wrapper">
        <div class="title">Key</div>
        <div class="description">${event.key === " "? 'Space' : event.key}</div>
      </div>
      <div class="wrapper">
        <div class="title">Code</div>
        <div class="description">${event.code}</div>
      </div>
    `;
  });
  