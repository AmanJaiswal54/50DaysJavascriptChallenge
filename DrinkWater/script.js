// const SMALL_CONTAINER = 8;
const container = document.querySelector(".container");
const smalls = document.querySelectorAll(".small");

smalls.forEach(function (small, index) {
  small.addEventListener("click", function (e) {
    deleteExistingSmallWaterLevel();
    deleteExistingLargeWaterLevel();
    calculateSmallWaterLevel(index);
    calculateLargeWaterLevel(index);

    // if we want to reset after 2 seconds
    // if (index + 1 === SMALL_CONTAINER) {
    //   setTimeout(() => {
    //     deleteExistingSmallWaterLevel();
    //     deleteExistingLargeWaterLevel();
    //   }, 2000);
    // }
  });
});

function deleteExistingSmallWaterLevel() {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  smalls.forEach(function (small) {
    removeAllChildNodes(small);
  });
}

function deleteExistingLargeWaterLevel() {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  removeAllChildNodes(container);
}
function calculateSmallWaterLevel(index) {
  for (let i = 0; i < index + 1; i++) {
    const smallWaterLevel = document.createElement("div");
    smallWaterLevel.classList.add("small-water-level");
    smalls[i].appendChild(smallWaterLevel);
  }
}

function calculateLargeWaterLevel(index) {
  const waterLevel = document.createElement("div");
  waterLevel.classList.add("water-level");
  waterLevel.style.height = `${((index + 1) * 80) / 2}px`;
  container.appendChild(waterLevel);
}
