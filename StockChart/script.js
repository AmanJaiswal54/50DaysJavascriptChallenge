const panel = document.getElementById("panel");
const level = document.getElementById("level");

function calculateHeight(openToday, closeToday, lowest, highest) {
  const isPositive = closeToday - openToday > 0 ? true : false;
  let panelHeight = ((closeToday - openToday) / closeToday) * 100;
  panelHeight = nonNegative(panelHeight);
  let levelHeight = ((highest - lowest) / highest) * 100;
  levelHeight = nonNegative(levelHeight);
  panel.style.height = panelHeight + "%";
  panel.style.backgroundColor = isPositive ? "green" : "red";

  level.style.height = levelHeight + "%";
  level.style.border = isPositive
    ? "1px solid lightgreen"
    : "1px solid palevioletred";
}

function nonNegative(value) {
  return value > 0 ? value : value * -1;
}

calculateHeight(800, 1600, 200, 700);
